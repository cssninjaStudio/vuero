<script setup lang="ts">
useVueroContext({
  pageTitle: 'Jobs',
})

useHead({
  title: 'Jobs - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <JobsDashboard />
  </div>
</template>
