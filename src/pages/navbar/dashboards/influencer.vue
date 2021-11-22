<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Lifestyle 1')

useHead({
  title: 'Lifestyle 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <teleport to="[data-teleport-bg]">
      <div class="lifestyle-dashboard-bg has-top-nav"></div>
    </teleport>

    <LifestyleDashboardV1 class="has-navbar-spacing" />
  </div>
</template>
