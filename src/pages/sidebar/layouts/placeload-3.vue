<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Placeload Grid'
useHead({
  title: 'Placeload Grid - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PlaceloadV3 />
  </div>
</template>
