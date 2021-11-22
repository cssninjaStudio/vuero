<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('List Datatable 3')

useHead({
  title: 'List Datatable 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <DatatableV3 />
  </div>
</template>
