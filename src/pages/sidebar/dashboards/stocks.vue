<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Stock Dashboard')

useHead({
  title: 'Stock Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <StockDashboard />
  </div>
</template>
