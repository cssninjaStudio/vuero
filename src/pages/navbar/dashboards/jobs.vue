<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Jobs')

useHead({
  title: 'Jobs - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <JobsDashboard />
  </div>
</template>
