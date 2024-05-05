<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Hobbies'
})

useHead({
  title: 'Hobbies - Sidebar - Vuero',
})
</script>

<template>
  <LifestyleDashboardV2 />
</template>
