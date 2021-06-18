<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Placeload Table'
useHead({
  title: 'Placeload Table - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PlaceloadV2 />
  </div>
</template>
