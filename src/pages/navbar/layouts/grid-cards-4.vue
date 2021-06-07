<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Grid Cards 4'
useHead({
  title: 'Grid Cards 4 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CardsGridV4 />
  </div>
</template>
