<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Flights Dashboard')

useHead({
  title: 'Flights Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FlightsDashboard />
  </div>
</template>
