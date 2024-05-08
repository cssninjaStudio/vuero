<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Projects Project 3'
})

useHead({
  title: 'Projects Projects 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="is-navbar-lg">
    <ProjectsViewV3 />
  </div>
</template>
