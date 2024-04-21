<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Tiles 1')

useHead({
  title: 'Grid Tiles 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TilesGridV1 />
  </div>
</template>
