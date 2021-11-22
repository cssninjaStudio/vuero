<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Finance 1')

useHead({
  title: 'Finance 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <AnalyticsDashboard />
  </div>
</template>
