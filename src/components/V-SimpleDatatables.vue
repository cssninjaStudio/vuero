<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import { DataTable } from 'simple-datatables'
import 'simple-datatables/src/style.css'

const tableElement = ref<HTMLElement | null>(null)

const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
})

onMounted(() => {
  if (tableElement.value) {
    const dataTable = new DataTable(tableElement.value, props.options)
  }
})
</script>

<template>
  <table ref="tableElement"></table>
</template>
