<script setup lang="ts">
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
