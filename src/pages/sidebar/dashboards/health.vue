<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Health Dashboard'
useHead({
  title: 'Health Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV3 />
  </div>
</template>
