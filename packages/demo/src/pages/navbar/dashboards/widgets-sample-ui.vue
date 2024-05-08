<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
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
