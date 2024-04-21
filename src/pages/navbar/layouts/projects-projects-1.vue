<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Projects Project')

useHead({
  title: 'Projects Project - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectsViewV1 />
  </div>
</template>
