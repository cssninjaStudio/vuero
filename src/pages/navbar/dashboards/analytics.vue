<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Finance 1'
useHead({
  title: 'Finance 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <AnalyticsDashboard />
  </div>
</template>
