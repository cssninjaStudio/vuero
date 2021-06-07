<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Widgets UI'
useHead({
  title: 'Widgets UI - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsUI />
  </div>
</template>
