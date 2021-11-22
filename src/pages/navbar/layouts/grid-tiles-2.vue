<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Tiles 2')

useHead({
  title: 'Grid Tiles 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TilesGridV2 />
  </div>
</template>
