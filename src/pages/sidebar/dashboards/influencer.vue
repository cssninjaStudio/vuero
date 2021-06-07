<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Influencer Dashboard'
useHead({
  title: 'Influencer Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <teleport to="[data-teleport-bg]">
      <div class="lifestyle-dashboard-bg"></div>
    </teleport>

    <LifestyleDashboardV1 />
  </div>
</template>
