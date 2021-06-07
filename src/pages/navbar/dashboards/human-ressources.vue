<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Business 3'
useHead({
  title: 'Business 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <HumanRessourcesDashboard class="has-navbar-spacing" />
  </div>
</template>
