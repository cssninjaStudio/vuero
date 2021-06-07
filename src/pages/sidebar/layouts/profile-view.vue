<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Profile View'
useHead({
  title: 'Profile View - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ViewProfile />
  </div>
</template>
