<script setup lang="ts">
import {
  defineProps,
  isReactive,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  defineEmit,
} from 'vue'
import { DataTable } from 'simple-datatables'
import 'simple-datatables/src/style.css'

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
const datatable = ref<any>(null)

const emit = defineEmit([
  'init',
  'refresh',
  'update',
  'page',
  'sort',
  'perpage',
  'search',
])

const registerEvents = () => {
  if (datatable.value) {
    datatable.value.on(`datatable.init`, (args: any) => {
      emit('init', args)
    })
    datatable.value.on(`datatable.refresh`, (args: any) => {
      emit('refresh', args)
    })
    datatable.value.on(`datatable.update`, (args: any) => {
      emit('update', args)
    })
    datatable.value.on(`datatable.page`, (args: any) => {
      emit('page', args)
    })
    datatable.value.on(`datatable.sort`, (args: any) => {
      emit('sort', args)
    })
    datatable.value.on(`datatable.perpage`, (args: any) => {
      emit('perpage', args)
    })
    datatable.value.on(`datatable.search`, (args: any) => {
      emit('search', args)
    })
  }
}

onMounted(() => {
  if (tableElement.value) {
    datatable.value = new DataTable(tableElement.value, props.options)
    registerEvents()
  }
})

onBeforeUnmount(() => {
  if (datatable.value) {
    datatable.value.destroy()
    datatable.value = null
  }
})

if (isReactive(props.options)) {
  watch([props.options, () => props.autoupdate], () => {
    if (props.autoupdate) {
      let currentPage = 1
      let perPage = 10
      let search = ''

      if (datatable.value) {
        currentPage = datatable.value.currentPage
        search = datatable.value.input?.value
        perPage = datatable.value.options?.perPage
        datatable.value.destroy()
      }

      datatable.value = new DataTable(tableElement.value, {
        ...props.options,
        perPage,
      })
      datatable.value.input.value = search
      datatable.value.input.dispatchEvent(new Event('keyup'))
      datatable.value.page(currentPage)
      registerEvents()
    }
  })
}
</script>

<template>
  <table ref="tableElement">
    <slot></slot>
  </table>
</template>
