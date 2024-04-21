<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Writer Dashboard')

useHead({
  title: 'Writer Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV4 />
  </div>
</template>
