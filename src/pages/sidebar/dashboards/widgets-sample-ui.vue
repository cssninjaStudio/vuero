<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Widgets UI')

useHead({
  title: 'Widgets UI - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsUI />
  </div>
</template>
