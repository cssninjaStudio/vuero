<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Banking 3'
useHead({
  title: 'Banking 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <BankingDashboardV3 />
  </div>
</template>
