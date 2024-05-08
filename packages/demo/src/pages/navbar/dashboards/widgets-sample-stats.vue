<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Widgets Stats'
})

useHead({
  title: 'Widgets Stats - Navbar - Vuero',
})
</script>

<template>
  <WidgetsStats />
</template>
