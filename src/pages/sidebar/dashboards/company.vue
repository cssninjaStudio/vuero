<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Company Dashboard')

useHead({
  title: 'Company Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CompanyDashboard />
  </div>
</template>
