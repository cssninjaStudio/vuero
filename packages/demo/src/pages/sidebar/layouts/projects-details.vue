<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Projects project'
})

useHead({
  title: 'Projects project - Sidebar - Vuero',
})
</script>

<template>
  <ProjectDetailsV1 />
</template>
