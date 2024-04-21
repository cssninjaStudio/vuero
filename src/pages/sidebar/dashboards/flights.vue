<script setup lang="ts">
useVueroContext({
  pageTitle: 'Flights Dashboard',
})

useHead({
  title: 'Flights Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FlightsDashboard />
  </div>
</template>
