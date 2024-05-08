<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Company Dashboard'
})

useHead({
  title: 'Company Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <CompanyDashboard />
</template>
