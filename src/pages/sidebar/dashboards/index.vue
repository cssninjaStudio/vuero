<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Personal 1'
useHead({
  title: 'Personal 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV1 />
  </div>
</template>
