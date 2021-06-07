<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Ecommerce'
useHead({
  title: 'Ecommerce - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <EcommerceDashboardV1 class="has-navbar-spacing" />
  </div>
</template>
