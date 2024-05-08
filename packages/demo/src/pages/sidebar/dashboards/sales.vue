<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Sales Dashboard'
})

useHead({
  title: 'Sales Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <SalesDashboard />
</template>
