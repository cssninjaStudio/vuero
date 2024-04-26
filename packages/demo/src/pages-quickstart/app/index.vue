<script setup lang="ts">
useVueroContext({
  pageTitle: 'Main Dashboard',
})

useHead({
  title: 'Main Dashboard - My app',
})
</script>

<template>
  <div class="page-content-inner">
    <FlightsDashboard />
  </div>
</template>
