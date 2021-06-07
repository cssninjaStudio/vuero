<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Grid Tiles 1'
useHead({
  title: 'Grid Tiles 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TilesGridV1 />
  </div>
</template>
