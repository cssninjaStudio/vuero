<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Utility Promotion'
useHead({
  title: 'Utility Promotion - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Promotion />
  </div>
</template>
