<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'HR Dashboard'
})

useHead({
  title: 'HR Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <HumanRessourcesDashboard />
</template>
