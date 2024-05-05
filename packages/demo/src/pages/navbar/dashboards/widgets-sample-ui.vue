<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Widgets UI'
})

useHead({
  title: 'Widgets UI - Navbar - Vuero',
})
</script>

<template>
  <WidgetsUI />
</template>
