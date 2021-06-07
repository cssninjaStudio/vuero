<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Projects projects 3'
useHead({
  title: 'Projects projects 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectsViewV3 />
  </div>
</template>
