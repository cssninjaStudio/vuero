<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'List Datatable 4'
useHead({
  title: 'List Datatable 4 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <DatatableV4 />
  </div>
</template>
