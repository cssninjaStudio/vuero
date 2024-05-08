<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Personal 3'
})

useHead({
  title: 'Personal 3 - Sidebar - Vuero',
})
</script>

<template>
  <PersonalDashboardV3 />
</template>
