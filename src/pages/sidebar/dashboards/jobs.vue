<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Jobs')

useHead({
  title: 'Jobs Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <JobsDashboard />
  </div>
</template>
