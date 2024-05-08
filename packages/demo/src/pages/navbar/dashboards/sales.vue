<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Finance 3'
})

useHead({
  title: 'Finance 3 - Navbar - Vuero',
})
</script>

<template>
  <SalesDashboard />
</template>
