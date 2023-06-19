<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Tiles 3')

useHead({
  title: 'Grid Tiles 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TilesGridV3 />
  </div>
</template>
