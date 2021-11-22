<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Projects Project 2')

useHead({
  title: 'Projects Projects 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectsViewV2 />
  </div>
</template>
