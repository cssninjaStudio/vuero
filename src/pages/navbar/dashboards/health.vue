<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Lifestyle 3'
useHead({
  title: 'Lifestyle 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV3 />
  </div>
</template>
