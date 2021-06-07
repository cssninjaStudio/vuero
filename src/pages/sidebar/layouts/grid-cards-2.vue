<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Grid Cards 2'
useHead({
  title: 'Grid Cards 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CardsGridV2 />
  </div>
</template>
