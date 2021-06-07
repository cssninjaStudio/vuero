<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Finance 3'
useHead({
  title: 'Finance 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <SalesDashboard />
  </div>
</template>
