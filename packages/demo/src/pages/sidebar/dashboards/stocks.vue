<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Stock Dashboard'
})

useHead({
  title: 'Stock Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <StockDashboard />
</template>
