<script lang="ts">
import type { PropType, Ref, VNode } from 'vue'
import {
  InjectionKey,
  defineComponent,
  toRaw,
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

export interface VFlexTableWrapperColumn<T = any> extends VFlexTableColumn<T> {
  searchable?: boolean
  sortable?: boolean
  sortBy?: (order: 'asc' | 'desc', a: T, b: T) => number
  filterRow?: (
    value: any,
    row: T,
    column: VFlexTableWrapperColumn,
    index: number
  ) => boolean
}

export type VFlexTableWrapperDataResolver<T = any> = (filters: {
  searchTerm: string
  start: number
  limit: number
  controller: AbortController
}) => T[] | Promise<T[]>

export interface VFlexTableWrapperInjection<T = any> {
  data?: Ref<T[] | undefined>
  columns?: Record<string, string | Omit<Partial<VFlexTableWrapperColumn<T>>, 'key'>>
  loading?: Ref<boolean>
  searchTerm?: Ref<string>
  start?: Ref<number>
  limit?: Ref<number>
  total?: Ref<number>
}

export const flewTableWrapperSymbol: InjectionKey<VFlexTableWrapperInjection> = Symbol()

function createProps<T>() {
  return {
    data: {
      type: [Array, Function] as PropType<T[] | VFlexTableWrapperDataResolver<T>>,
      default: undefined,
    },
    columns: {
      type: Object as PropType<
        Record<string, string | Omit<Partial<VFlexTableWrapperColumn<T>>, 'key'>>
      >,
      default: undefined,
    },
    start: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    page: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: undefined,
    },
    debounceSearch: {
      type: Number,
      default: 300,
    },
  }
}

export default defineComponent({
  props: createProps(),
  emits: ['update:page', 'update:limit'],
  setup(props, context) {
    const rawData = ref<unknown[]>()
    const loading = ref(false)
    const searchInput = ref('')
    const searchTerm = useDebounce(searchInput, props.debounceSearch)

    const start = computed(() => props.start || (props.page - 1) * limit.value)

    const limit = computed({
      get: () => props.limit,
      set(value) {
        context.emit('update:limit', value)
      },
    })

    const columns = computed(() => {
      const columns = props.columns

      if (columns) {
      }

      return columns
    })

    const totalPages = computed(() => {
      const total = props.total ?? 0
      const _limit = limit.value <= 0 ? 0 : limit.value
      return total ? Math.ceil(total / _limit) : 0
    })

    const data = computed(() => {
      if (!rawData.value) return rawData.value
      if (props.page) return rawData.value

      return rawData.value.slice(start.value, start.value + limit.value)
    })

    const wrapperState = {
      data,
      columns,
      loading,
      searchInput,
      searchTerm,
      start,
      limit,
      totalPages,
    }

    watch([searchTerm, limit], () => {
      if (props.page !== 1) {
        context.emit('update:page', 1)
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
            controller,
          })
        } finally {
          loading.value = false
        }
      } else {
        rawData.value = props.data
      }

      onInvalidate(() => {
        console.log('abort!')
        controller?.abort()
      })
    })

    provide(flewTableWrapperSymbol, wrapperState as any)

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

  .flex-table-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }

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
    .flex-table-toolbar {
      margin-bottom: 10px;

      .left {
        flex-grow: 2;
      }

      .right {
        display: none;
      }
    }

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
