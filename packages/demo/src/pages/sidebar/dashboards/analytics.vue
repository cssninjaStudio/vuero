<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Analytics Dashboard'
})

useHead({
  title: 'Analytics Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <AnalyticsDashboard />
</template>
