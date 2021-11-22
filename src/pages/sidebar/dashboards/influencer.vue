<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Influencer Dashboard')

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
