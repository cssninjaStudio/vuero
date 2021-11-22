<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Soccer')

useHead({
  title: 'Soccer Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <SoccerDashboard />
  </div>
</template>
