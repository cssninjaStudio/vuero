<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Charts Apex'
})

useHead({
  title: 'Charts Apex - Sidebar - Vuero',
})
</script>

<template>
  <ApexDashboard />
</template>
