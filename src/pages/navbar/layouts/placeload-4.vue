<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Placeload Tiles'
useHead({
  title: 'Placeload Tiles - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PlaceloadV4 />
  </div>
</template>
