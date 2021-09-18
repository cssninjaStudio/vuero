<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Projects Project 3'
useHead({
  title: 'Projects Projects 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="is-navbar-lg page-content-inner">
    <ProjectsViewV3 />
  </div>
</template>
