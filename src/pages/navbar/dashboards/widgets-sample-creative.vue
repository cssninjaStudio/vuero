<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Widgets Creative'
useHead({
  title: 'Widgets Creative - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsCreative />
  </div>
</template>
