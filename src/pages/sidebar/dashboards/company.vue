<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Company Dashboard'
useHead({
  title: 'Company Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CompanyDashboard />
  </div>
</template>
