<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Projects Project'
})

useHead({
  title: 'Projects Project - Navbar - Vuero',
})
</script>

<template>
  <ProjectsViewV1 />
</template>
