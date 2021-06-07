<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Grid Cards 1'
useHead({
  title: 'Grid Cards 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CardsGridV1 />
  </div>
</template>
