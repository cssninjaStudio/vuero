<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Personal 2'
})

useHead({
  title: 'Personal 2 - Navbar - Vuero',
})
</script>

<template>
  <PersonalDashboardV2 />
</template>
