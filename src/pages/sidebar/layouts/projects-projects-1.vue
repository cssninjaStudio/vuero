<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Projects projects'
useHead({
  title: 'Projects projects - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectsViewV1 />
  </div>
</template>
