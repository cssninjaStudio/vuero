<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Personal 3'
useHead({
  title: 'Personal 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV3 class="has-navbar-spacing" />
  </div>
</template>
