<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Video Dashboard'
useHead({
  title: 'Video Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV5 />
  </div>
</template>
