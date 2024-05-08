<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Business 4'
})

useHead({
  title: 'Business 4 - Navbar - Vuero',
})
</script>

<template>
  <CourseDashboard />
</template>
