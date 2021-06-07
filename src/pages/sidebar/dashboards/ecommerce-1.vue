<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Ecommerce 1'
useHead({
  title: 'Ecommerce 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <EcommerceDashboardV1 />
  </div>
</template>
