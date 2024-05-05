<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
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
