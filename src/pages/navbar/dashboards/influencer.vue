<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Lifestyle 1'
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
