<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Action Page'
useHead({
  title: 'Action Page - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ActionPageV1 />
  </div>
</template>
