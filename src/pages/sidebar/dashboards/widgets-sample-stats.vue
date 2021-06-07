<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Widgets Stats'
useHead({
  title: 'Widgets Stats - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsStats />
  </div>
</template>
