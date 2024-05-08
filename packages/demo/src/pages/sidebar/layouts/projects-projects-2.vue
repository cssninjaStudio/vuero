<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Projects projects 2'
})

useHead({
  title: 'Projects projects 2 - Sidebar - Vuero',
})
</script>

<template>
  <ProjectsViewV2 />
</template>
