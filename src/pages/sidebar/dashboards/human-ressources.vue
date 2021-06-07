<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'HR Dashboard'
useHead({
  title: 'HR Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <HumanRessourcesDashboard />
  </div>
</template>
