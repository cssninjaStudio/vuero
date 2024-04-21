<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Analytics Dashboard')

useHead({
  title: 'Analytics Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <AnalyticsDashboard />
  </div>
</template>
