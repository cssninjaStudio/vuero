<script lang="ts">
import type { PropType } from 'vue'

import {
  InjectionKey,
  defineComponent,
  computed,
  reactive,
  ref,
  h,
  watch,
  provide,
  watchEffect,
} from 'vue'
import { useDebounce } from '@vueuse/core'

import type { VFlexTableColumn } from './VFlexTable.vue'
import VFlexTableSortColumn from './VFlexTableSortColumn.vue'

export type VFlexTableWrapperDataResolver<T = any> = (parameters: {
  searchTerm: string
  start: number
  limit: number
  sort?: string
  controller: AbortController
}) => T[] | Promise<T[]>

export type VFlexTableWrapperSortFunction<T = any> = (parameters: {
  key: string
  column: Partial<VFlexTableWrapperColumn>
  order: 'asc' | 'desc'
  a: T
  b: T
}) => number

export type VFlexTableWrapperFilterFunction<T = any> = (parameters: {
  searchTerm: string
  value: any
  row: T
  column: Partial<VFlexTableWrapperColumn>
  index: number
}) => boolean

export interface VFlexTableWrapperColumn extends VFlexTableColumn {
  searchable?: boolean
  sortable?: boolean
  sort?: VFlexTableWrapperSortFunction
  filter?: VFlexTableWrapperFilterFunction
}

export interface VFlexTableWrapperInjection {
  data?: any[] | undefined
  columns?: Record<string, Partial<VFlexTableWrapperColumn>>
  loading?: boolean
  searchInput?: string
  searchTerm?: string
  start?: number
  limit?: number
  sort?: string
  page?: number
  total?: number
  totalPages?: number
}

export const flewTableWrapperSymbol: InjectionKey<VFlexTableWrapperInjection> = Symbol()

const defaultFormatter = (value: any) => value
const defaultSortFunction: VFlexTableWrapperSortFunction = ({ key, order, a, b }) => {
  const aValue = a[key]
  const bValue = b[key]

  if (typeof aValue === 'string') {
    if (order === 'asc') {
      return aValue.localeCompare(bValue)
    } else {
      return bValue.localeCompare(aValue)
    }
  }

  if (aValue > bValue) {
    return order === 'asc' ? 1 : -1
  }

  if (aValue < bValue) {
    return order === 'asc' ? -1 : 1
  }

  return 0
}

export default defineComponent({
  props: {
    data: {
      type: [Array, Function] as PropType<any[] | VFlexTableWrapperDataResolver>,
      default: undefined,
    },
    columns: {
      type: Object as PropType<Record<string, string | Partial<VFlexTableWrapperColumn>>>,
      default: undefined,
    },
    sort: {
      type: String,
      default: undefined,
    },
    searchTerm: {
      type: String,
      default: undefined,
    },
    limit: {
      type: Number,
      default: undefined,
    },
    page: {
      type: Number,
      default: undefined,
    },
    total: {
      type: Number,
      default: undefined,
    },
    debounceSearch: {
      type: Number,
      default: 300,
    },
  },
  emits: ['update:sort', 'update:page', 'update:limit', 'update:searchTerm'],
  setup(props, context) {
    const rawData = ref<any[]>()
    const loading = ref(false)

    const defaultSort = ref('')
    const sort = computed({
      get: () => props.sort ?? defaultSort.value,
      set(value) {
        if (props.sort === undefined) {
          defaultSort.value = value
        } else {
          context.emit('update:sort', value)
        }
      },
    })

    const defaultSearchInput = ref('')
    const searchInput = computed({
      get: () => props.searchTerm ?? defaultSearchInput.value,
      set(value) {
        if (props.searchTerm === undefined) {
          defaultSearchInput.value = value
        } else {
          context.emit('update:searchTerm', value)
        }
      },
    })

    const defaultPage = ref(1)
    const page = computed({
      get: () => props.page ?? defaultPage.value,
      set(value) {
        if (props.page === undefined) {
          defaultPage.value = value
        } else {
          context.emit('update:page', value)
        }
      },
    })

    const defaultLimit = ref(10)
    const limit = computed({
      get: () => Math.max(1, props.limit ?? defaultLimit.value),
      set(value) {
        if (props.limit === undefined) {
          defaultLimit.value = value
        } else {
          context.emit('update:limit', value)
        }
      },
    })

    const columns = computed(() => {
      const columnProps = props.columns
      if (!columnProps) return columnProps

      const wrapperColumns: Record<string, Partial<VFlexTableWrapperColumn>> = {}

      Object.keys(columnProps).reduce((acc, key) => {
        const value = columnProps[key]

        if (typeof value === 'string') {
          acc[key] = {
            format: defaultFormatter,
            label: value,
            key,
          }
        } else if (typeof value === 'object') {
          acc[key] = {
            format: defaultFormatter,
            label: key,
            key,
            ...value,
          }

          if (value.sortable === true) {
            if (value.renderHeader) {
              acc[key].renderHeader = () => {
                return h(
                  VFlexTableSortColumn,
                  {
                    id: key,
                    noRouter: true,
                    modelValue: sort.value,
                    'onUpdate:modelValue': (value) => (sort.value = value),
                  },
                  {
                    default: value.renderHeader,
                  }
                )
              }
            } else {
              acc[key].renderHeader = () => {
                return h(VFlexTableSortColumn, {
                  id: key,
                  label: value.label ?? key,
                  noRouter: true,
                  modelValue: sort.value,
                  'onUpdate:modelValue': (value) => (sort.value = value),
                })
              }
            }
          }

          if (value.searchable === true && !value.sort) {
            acc[key].sort = defaultSortFunction
          }
        }

        return acc
      }, wrapperColumns)

      return wrapperColumns
    })

    const filteredData = computed(() => {
      let data = rawData.value
      if (!data) return data
      if (typeof props.data === 'function') return data

      // filter data
      if (searchTerm.value) {
        const searchableColumns = columns.value
          ? (Object.values(columns.value).filter((column) => {
              if (!column || typeof column === 'string') return false
              return column.searchable === true
            }) as Partial<VFlexTableWrapperColumn>[])
          : []

        if (searchableColumns.length) {
          const _searchRe = new RegExp(searchTerm.value, 'i')
          data = data.filter((row, index) => {
            return searchableColumns.some((column) => {
              if (!column.key) return false

              const value = row[column.key]

              if (column.filter) {
                return column.filter({
                  searchTerm: searchTerm.value,
                  value,
                  row,
                  column,
                  index,
                })
              }

              if (typeof value === 'string') return value.match(_searchRe)

              return false
            })
          })
        }
      }

      return data
    })

    const sortedData = computed(() => {
      let data = filteredData.value
      if (!data) return data
      if (typeof props.data === 'function') return data

      // sort data
      if (sort.value && sort.value.includes(':')) {
        const [sortField, sortOrder] = sort.value.split(':') as [string, 'desc' | 'asc']

        const sortingColumn = columns.value
          ? (Object.values(columns.value).find((column) => {
              if (!column || typeof column === 'string') return false
              return column.sortable === true && column.key === sortField
            }) as Partial<VFlexTableWrapperColumn>)
          : null

        if (sortingColumn) {
          const sorted = [...data]
          sorted.sort((a, b) => {
            if (!sortingColumn.key) return 0
            if (!sortingColumn.sort) return 0

            return sortingColumn.sort({
              order: sortOrder,
              column: sortingColumn,
              key: sortingColumn.key,
              a,
              b,
            })
          })
          data = sorted
        }
      }

      return data
    })

    const data = computed(() => {
      if (typeof props.data === 'function') return rawData.value
      if (!rawData.value) return rawData.value

      let data = sortedData.value

      // paginate data
      return data?.slice(start.value, start.value + limit.value)
    })

    const searchTerm = useDebounce(searchInput, props.debounceSearch)
    const total = computed(() => props.total ?? sortedData.value?.length ?? 0)
    const start = computed(() => (page.value - 1) * limit.value)
    const totalPages = computed(() =>
      total.value ? Math.ceil(total.value / limit.value) : 0
    )

    watch([searchTerm, limit], () => {
      if (page.value !== 1) {
        page.value = 1
      }
    })

    watchEffect(async (onInvalidate) => {
      let controller: AbortController

      if (typeof props.data === 'function') {
        controller = new AbortController()
        loading.value = true

        try {
          rawData.value = await props.data({
            searchTerm: searchTerm.value,
            start: start.value,
            limit: limit.value,
            sort: sort.value,
            controller,
          })
        } finally {
          loading.value = false
        }
      } else {
        rawData.value = props.data
      }

      onInvalidate(() => {
        controller?.abort()
      })
    })

    const wrapperState = reactive({
      data,
      columns,
      loading,
      searchInput,
      searchTerm,
      start,
      page,
      limit,
      sort,
      total,
      totalPages,
    }) as VFlexTableWrapperInjection

    provide(flewTableWrapperSymbol, wrapperState)

    return () => {
      const slotContent = context.slots.default?.(wrapperState)
      return h('div', { class: 'flex-table-wrapper' }, slotContent)
    }
  },
})
</script>

<style lang="scss">
/* ==========================================================================
5. Flex Table advanced wrapper
========================================================================== */

.flex-table-wrapper {
  background: var(--white);
  border: 1px solid var(--fade-grey-dark-3);
  border-radius: 8px;
  padding: 20px;

  .flex-table {
    .flex-table-item {
      margin-bottom: 0;
      border-radius: 0;
      border-left: none;
      border-right: none;
      border-top: none;

      &:last-child {
        margin-bottom: 6px;
        border-bottom: none;
      }

      &:focus-visible {
        border-radius: 4px;
        outline-offset: var(--accessibility-focus-outline-offset);
        outline-width: var(--accessibility-focus-outline-width);
        outline-style: var(--accessibility-focus-outline-style);
        outline-color: var(--accessibility-focus-outline-color);
      }
    }
  }
}

/* ==========================================================================
6. Flex Table advanced wrapper Dark mode
========================================================================== */

.is-dark {
  .flex-table-wrapper {
    background: var(--dark-sidebar-light-6);
    border-color: var(--dark-sidebar-light-12);
  }
}

/* ==========================================================================
9. Media Queries
========================================================================== */

@media (max-width: 767px) {
  .flex-table-wrapper {
    .flex-table {
      .flex-table-header {
        .is-checkbox {
          display: none;
        }
      }

      .flex-table-item {
        padding-left: 0;
        padding-right: 0;

        .is-checkbox {
          display: none;
        }
      }
    }
  }
}
</style>
