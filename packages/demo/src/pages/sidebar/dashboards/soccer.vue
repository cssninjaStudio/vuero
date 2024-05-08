<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Soccer'
})

useHead({
  title: 'Soccer Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <SoccerDashboard />
</template>
