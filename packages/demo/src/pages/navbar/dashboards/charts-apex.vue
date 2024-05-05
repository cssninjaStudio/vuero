<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Charts Apex'
})

useHead({
  title: 'Charts Apex - Navbar - Vuero',
})
</script>

<template>
  <ApexDashboard />
</template>
