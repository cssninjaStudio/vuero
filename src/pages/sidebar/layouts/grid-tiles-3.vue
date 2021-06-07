<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Grid Tiles 3'
useHead({
  title: 'Grid Tiles 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TilesGridV3 />
  </div>
</template>
