<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Soccer'
})

useHead({
  title: 'Soccer - Navbar - Vuero',
})
</script>

<template>
  <SoccerDashboard />
</template>
