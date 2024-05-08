<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Video Dashboard'
})

useHead({
  title: 'Video Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <LifestyleDashboardV5 />
</template>
