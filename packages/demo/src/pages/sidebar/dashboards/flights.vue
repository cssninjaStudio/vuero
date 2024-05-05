<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Flights Dashboard'
})

useHead({
  title: 'Flights Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <FlightsDashboard />
</template>
