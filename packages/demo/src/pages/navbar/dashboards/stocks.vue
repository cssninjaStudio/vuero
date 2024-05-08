<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Finance 2'
})

useHead({
  title: 'Finance 2 - Navbar - Vuero',
})
</script>

<template>
  <StockDashboard />
</template>
