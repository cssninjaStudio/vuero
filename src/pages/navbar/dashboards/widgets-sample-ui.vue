<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Widgets UI'
useHead({
  title: 'Widgets UI - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsUI />
  </div>
</template>
