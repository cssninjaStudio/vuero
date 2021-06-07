<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Grid Tiles 1'
useHead({
  title: 'Grid Tiles 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TilesGridV1 />
  </div>
</template>
