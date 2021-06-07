<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Grid Cards 3'
useHead({
  title: 'Grid Cards 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CardsGridV3 />
  </div>
</template>
