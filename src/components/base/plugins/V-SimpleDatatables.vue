<script lang="ts">
import 'simple-datatables/src/style.css'
</script>

<script setup lang="ts">
import {
  defineProps,
  isReactive,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  defineEmit,
  reactive,
} from 'vue'
import { DataTable } from 'simple-datatables'

const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
  autoupdate: {
    type: Boolean,
    default: false,
  },
})

const tableElement = ref<HTMLElement | null>(null)
const wrapperElement = ref<HTMLElement | null>(null)
const datatable = ref<any>(null)
const hasFocus = ref(false)
const lastSort = reactive({
  column: 0,
  direction: '',
})

const emit = defineEmit([
  'init',
  'refresh',
  'update',
  'page',
  'sort',
  'perpage',
  'search',
])

const onFocus = (event: Event) => {
  if (!hasFocus.value) {
    hasFocus.value = true
  }
}

const onBlur = (event: Event) => {
  if (hasFocus.value) {
    hasFocus.value = false
  }
}

const registerEvents = () => {
  if (wrapperElement.value) {
    const searchElement = wrapperElement.value.querySelector(
      '.dataTable-input'
    ) as HTMLInputElement
    const pageLimitElement = wrapperElement.value.querySelector(
      '.dataTable-selector'
    ) as HTMLSelectElement
    const paginationElement = wrapperElement.value.querySelector(
      '.dataTable-pagination'
    ) as HTMLElement
    const sortersElement =
      wrapperElement.value.querySelectorAll('.dataTable-sorter')

    if (searchElement) {
      searchElement.addEventListener('focus', onFocus, false)
      searchElement.addEventListener('blur', onBlur, false)
    }
    if (pageLimitElement) {
      pageLimitElement.addEventListener('focus', onFocus, false)
      pageLimitElement.addEventListener('blur', onBlur, false)
      pageLimitElement.addEventListener('change', onBlur, false)
    }
    if (paginationElement) {
      paginationElement.addEventListener('mousedown', onFocus, false)
      paginationElement.addEventListener('mouseup', onBlur, false)
    }
    sortersElement.forEach((sorterElement) => {
      let sorter = sorterElement as HTMLElement
      if (sorter) {
        sorter.addEventListener('mousedown', onFocus, false)
        sorter.addEventListener('mouseup', onBlur, false)
      }
    })
  }

  if (datatable.value) {
    datatable.value.on(`datatable.init`, () => {
      emit('init')
    })
    datatable.value.on(`datatable.refresh`, () => {
      emit('refresh')
    })
    datatable.value.on(`datatable.update`, () => {
      emit('update')
    })
    datatable.value.on(`datatable.page`, (page: number) => {
      emit('page', page)
    })
    datatable.value.on(
      `datatable.sort`,
      (column: number, direction?: string) => {
        lastSort.column = column
        lastSort.direction = direction || ''
        emit('sort', column, direction)
      }
    )
    datatable.value.on(`datatable.perpage`, (perpage: number) => {
      emit('perpage', perpage)
    })
    datatable.value.on(`datatable.search`, (query: string, matched: any[]) => {
      emit('search', query, matched)
    })
  }
}

const unregisterEvents = () => {
  if (datatable.value) {
    datatable.value.destroy()
    datatable.value = null
  }

  if (wrapperElement.value) {
    const searchElement = wrapperElement.value.querySelector(
      '.dataTable-input'
    ) as HTMLInputElement
    const pageLimitElement = wrapperElement.value.querySelector(
      '.dataTable-selector'
    ) as HTMLSelectElement
    const paginationElement = wrapperElement.value.querySelector(
      '.dataTable-pagination'
    ) as HTMLElement
    const sortersElement =
      wrapperElement.value.querySelectorAll('.dataTable-sorter')

    if (searchElement) {
      searchElement.removeEventListener('focus', onFocus)
      searchElement.removeEventListener('blur', onBlur)
    }
    if (pageLimitElement) {
      pageLimitElement.removeEventListener('focus', onFocus)
      pageLimitElement.removeEventListener('blur', onBlur)
      pageLimitElement.removeEventListener('change', onBlur)
    }
    if (paginationElement) {
      paginationElement.removeEventListener('mousedown', onFocus)
      paginationElement.removeEventListener('mouseup', onBlur)
    }
    sortersElement.forEach((sorterElement) => {
      let sorter = sorterElement as HTMLElement
      if (sorter) {
        sorter.removeEventListener('mousedown', onFocus)
        sorter.removeEventListener('mouseup', onBlur)
      }
    })
  }
}

onMounted(() => {
  if (tableElement.value) {
    datatable.value = new DataTable(tableElement.value, props.options)
  }
  registerEvents()
})

onBeforeUnmount(() => {
  unregisterEvents()
})

if (isReactive(props.options)) {
  watch([props.options, () => props.autoupdate], () => {
    if (tableElement.value && props.autoupdate && !hasFocus.value) {
      let currentPage = 1
      let perPage = 10
      let search = ''

      if (datatable.value) {
        currentPage = datatable.value.currentPage
        search = datatable.value.input?.value
        perPage = datatable.value.options?.perPage
        unregisterEvents()
      }

      datatable.value = new DataTable(tableElement.value, {
        ...props.options,
        perPage,
      })
      if (props.options.searchable !== false) {
        datatable.value.input.value = search
        datatable.value.input.dispatchEvent(new Event('keyup'))
      }
      if (lastSort.direction !== '') {
        datatable.value.columns().sort(lastSort.column, lastSort.direction)
      }

      datatable.value.page(currentPage)
      registerEvents()
    }
  })
}
</script>

<template>
  <div ref="wrapperElement">
    <table ref="tableElement">
      <slot></slot>
    </table>
  </div>
</template>
