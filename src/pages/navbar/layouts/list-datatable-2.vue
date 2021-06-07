<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'List Datatable 2'
useHead({
  title: 'List Datatable 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <DatatableV2 />
  </div>
</template>
