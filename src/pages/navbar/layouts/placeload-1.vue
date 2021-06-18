<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Placeload List'
useHead({
  title: 'Placeload List - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PlaceloadV1 />
  </div>
</template>
