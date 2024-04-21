<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Widgets Stats')

useHead({
  title: 'Widgets Stats - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsStats />
  </div>
</template>
