<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'List Datatable 3'
useHead({
  title: 'List Datatable 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <DatatableV3 />
  </div>
</template>
