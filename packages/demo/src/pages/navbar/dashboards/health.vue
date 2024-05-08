<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Lifestyle 3'
})

useHead({
  title: 'Lifestyle 3 - Navbar - Vuero',
})
</script>

<template>
  <LifestyleDashboardV3 />
</template>
