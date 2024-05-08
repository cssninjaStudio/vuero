<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Business 1'
})

useHead({
  title: 'Business 1 - Navbar - Vuero',
})
</script>

<template>
  <FlightsDashboard />
</template>
