<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Grid Tiles 3'
useHead({
  title: 'Grid Tiles 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TilesGridV3 />
  </div>
</template>
