<script setup lang="ts">
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
