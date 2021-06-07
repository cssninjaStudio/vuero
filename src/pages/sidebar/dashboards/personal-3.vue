<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Personal 3'
useHead({
  title: 'Personal 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV3 />
  </div>
</template>
