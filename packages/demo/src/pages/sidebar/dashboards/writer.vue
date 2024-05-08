<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Writer Dashboard'
})

useHead({
  title: 'Writer Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <LifestyleDashboardV4 />
</template>
