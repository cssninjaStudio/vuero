<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Course Dashboard')

useHead({
  title: 'Course Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CourseDashboard />
  </div>
</template>
