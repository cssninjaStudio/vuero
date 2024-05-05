<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Projects projects'
})

useHead({
  title: 'Projects projects - Sidebar - Vuero',
})
</script>

<template>
  <ProjectsViewV1 />
</template>
