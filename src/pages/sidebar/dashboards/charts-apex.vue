<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Charts Apex')

useHead({
  title: 'Charts Apex - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ApexDashboard />
  </div>
</template>
