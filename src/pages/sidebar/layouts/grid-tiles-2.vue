<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

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
