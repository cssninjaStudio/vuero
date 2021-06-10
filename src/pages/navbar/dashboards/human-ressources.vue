<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'HR Dashboard'
useHead({
  title: 'HR Dashboard - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <HumanRessourcesDashboard class="has-navbar-spacing" />
  </div>
</template>
