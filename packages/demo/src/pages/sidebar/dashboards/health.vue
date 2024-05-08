<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Health Dashboard'
})

useHead({
  title: 'Health Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <LifestyleDashboardV3 />
</template>
