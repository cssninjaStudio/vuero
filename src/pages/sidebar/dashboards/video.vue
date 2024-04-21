<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Video Dashboard')

useHead({
  title: 'Video Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV5 />
  </div>
</template>
