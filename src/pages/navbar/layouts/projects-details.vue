<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Projects Projects 1'
useHead({
  title: 'Projects Projects 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectDetailsV1 />
  </div>
</template>
