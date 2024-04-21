<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Flights Dashboard')

useHead({
  title: 'Flights Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FlightsDashboard />
  </div>
</template>
