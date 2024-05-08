<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Charts BillboardJS'
})

useHead({
  title: 'Charts BillboardJS - Sidebar - Vuero',
})
</script>

<template>
  <BillboardJsDashboard />
</template>
