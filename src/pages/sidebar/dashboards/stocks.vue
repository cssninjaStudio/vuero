<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Stock Dashboard'
useHead({
  title: 'Stock Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <StockDashboard />
  </div>
</template>
