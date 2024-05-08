<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Projects Projects 1'
})

useHead({
  title: 'Projects Projects 1 - Navbar - Vuero',
})
</script>

<template>
  <ProjectDetailsV1 />
</template>
