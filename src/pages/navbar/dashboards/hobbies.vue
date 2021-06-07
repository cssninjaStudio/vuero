<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Lifestyle 2'
useHead({
  title: 'Lifestyle 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV2 />
  </div>
</template>
