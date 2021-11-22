<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Writer Dashboard')

useHead({
  title: 'Writer Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV4 />
  </div>
</template>
