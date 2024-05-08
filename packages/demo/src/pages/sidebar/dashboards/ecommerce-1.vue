<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Ecommerce 1'
})

useHead({
  title: 'Ecommerce 1 - Sidebar - Vuero',
})
</script>

<template>
  <EcommerceDashboardV1 />
</template>
