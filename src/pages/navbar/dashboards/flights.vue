<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Business 1')

useHead({
  title: 'Business 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FlightsDashboard />
  </div>
</template>
