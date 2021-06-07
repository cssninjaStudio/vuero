<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Widgets Stats'
useHead({
  title: 'Widgets Stats - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsStats />
  </div>
</template>
