<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Personal 2'
useHead({
  title: 'Personal 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV2 />
  </div>
</template>
