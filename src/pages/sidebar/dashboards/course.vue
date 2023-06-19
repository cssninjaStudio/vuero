<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

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
