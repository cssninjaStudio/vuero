<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Projects projects')

useHead({
  title: 'Projects projects - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectsViewV1 />
  </div>
</template>
