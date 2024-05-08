<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Projects projects 3'
})

useHead({
  title: 'Projects projects 3 - Sidebar - Vuero',
})
</script>

<template>
  <ProjectsViewV3 />
</template>
