<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Health Dashboard')

useHead({
  title: 'Health Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV3 />
  </div>
</template>
