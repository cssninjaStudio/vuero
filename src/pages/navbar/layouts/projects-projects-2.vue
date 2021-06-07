<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Projects Project 2'
useHead({
  title: 'Projects Projects 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectsViewV2 />
  </div>
</template>
