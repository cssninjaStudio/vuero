<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Projects projects 2')

useHead({
  title: 'Projects projects 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectsViewV2 />
  </div>
</template>
