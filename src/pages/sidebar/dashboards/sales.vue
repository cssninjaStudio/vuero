<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Sales Dashboard'
useHead({
  title: 'Sales Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <SalesDashboard />
  </div>
</template>
