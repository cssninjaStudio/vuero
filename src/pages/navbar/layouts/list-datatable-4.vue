<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'List Datatable 4'
useHead({
  title: 'List Datatable 4 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <DatatableV4 />
  </div>
</template>
