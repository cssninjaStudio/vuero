<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Placeload List'
useHead({
  title: 'Placeload List - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PlaceloadV1 />
  </div>
</template>
