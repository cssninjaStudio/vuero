<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'List Datatable 1'
useHead({
  title: 'List Datatable 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <DatatableV1 />
  </div>
</template>
