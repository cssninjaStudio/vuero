<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Finance 2'
useHead({
  title: 'Finance 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <StockDashboard />
  </div>
</template>
