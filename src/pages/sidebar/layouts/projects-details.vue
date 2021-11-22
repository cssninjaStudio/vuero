<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Projects project')

useHead({
  title: 'Projects project - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ProjectDetailsV1 />
  </div>
</template>
