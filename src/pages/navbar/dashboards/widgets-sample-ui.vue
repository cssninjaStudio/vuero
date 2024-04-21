<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Widgets UI')

useHead({
  title: 'Widgets UI - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsUI />
  </div>
</template>
