<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'List Datatable 2'
useHead({
  title: 'List Datatable 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <DatatableV2 />
  </div>
</template>
