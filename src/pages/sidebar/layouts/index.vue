<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'List View 1'
useHead({
  title: 'List View 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ViewListV1 />
  </div>
</template>
