<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'List Datatable 3'
useHead({
  title: 'List Datatable 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <DatatableV3 />
  </div>
</template>
