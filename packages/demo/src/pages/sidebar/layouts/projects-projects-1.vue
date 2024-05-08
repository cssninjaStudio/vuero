<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
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
