<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Projects project')

useHead({
  title: 'Projects project - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectDetailsV1 />
  </div>
</template>
