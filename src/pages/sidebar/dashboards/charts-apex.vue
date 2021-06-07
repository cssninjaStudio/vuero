<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Charts Apex'
useHead({
  title: 'Charts Apex - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ApexDashboard />
  </div>
</template>
