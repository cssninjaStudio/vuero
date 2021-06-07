<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Projects Project'
useHead({
  title: 'Projects Project - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectsViewV1 />
  </div>
</template>
