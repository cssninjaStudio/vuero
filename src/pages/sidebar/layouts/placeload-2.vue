<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Placeload Table'
useHead({
  title: 'Placeload Table - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PlaceloadV2 />
  </div>
</template>
