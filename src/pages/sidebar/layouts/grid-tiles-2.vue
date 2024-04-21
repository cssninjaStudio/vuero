<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Tiles 2')

useHead({
  title: 'Grid Tiles 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TilesGridV2 />
  </div>
</template>
