<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Projects project'
useHead({
  title: 'Projects project - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectDetailsV1 />
  </div>
</template>
