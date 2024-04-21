<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Hobbies')

useHead({
  title: 'Hobbies - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV2 />
  </div>
</template>
