<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Projects Project 2'
})

useHead({
  title: 'Projects Projects 2 - Navbar - Vuero',
})
</script>

<template>
  <ProjectsViewV2 />
</template>
