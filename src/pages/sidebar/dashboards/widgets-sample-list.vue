<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Widgets List'
useHead({
  title: 'Widgets List - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsList />
  </div>
</template>
