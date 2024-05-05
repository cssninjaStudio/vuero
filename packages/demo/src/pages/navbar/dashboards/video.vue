<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Lifestyle 5'
})

useHead({
  title: 'Lifestyle 5 - Navbar - Vuero',
})
</script>

<template>
  <LifestyleDashboardV5 />
</template>
