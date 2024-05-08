<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Business 2'
})

useHead({
  title: 'Business 2 - Navbar - Vuero',
})
</script>

<template>
  <CompanyDashboard />
</template>
