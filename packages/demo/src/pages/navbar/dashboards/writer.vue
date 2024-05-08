<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Lifestyle 4'
})

useHead({
  title: 'Lifestyle 4 - Navbar - Vuero',
})
</script>

<template>
  <LifestyleDashboardV4 />
</template>
