<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Projects projects')

useHead({
  title: 'Projects projects - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectsViewV1 />
  </div>
</template>
