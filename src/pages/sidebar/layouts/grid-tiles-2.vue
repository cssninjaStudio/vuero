<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Grid Tiles 2'
useHead({
  title: 'Grid Tiles 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TilesGridV2 />
  </div>
</template>
