<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Finance 2')

useHead({
  title: 'Finance 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <StockDashboard />
  </div>
</template>
