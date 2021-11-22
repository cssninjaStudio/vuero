<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Ecommerce')

useHead({
  title: 'Ecommerce - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <EcommerceDashboardV1 class="has-navbar-spacing" />
  </div>
</template>
