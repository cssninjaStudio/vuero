<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Course Dashboard'
})

useHead({
  title: 'Course Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <CourseDashboard />
</template>
