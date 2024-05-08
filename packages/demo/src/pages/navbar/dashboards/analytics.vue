<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Finance 1'
})

useHead({
  title: 'Finance 1 - Navbar - Vuero',
})
</script>

<template>
  <AnalyticsDashboard />
</template>
