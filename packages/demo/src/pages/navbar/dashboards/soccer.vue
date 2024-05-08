<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
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
