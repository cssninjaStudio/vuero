<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Analytics Dashboard'
useHead({
  title: 'Analytics Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <AnalyticsDashboard />
  </div>
</template>
