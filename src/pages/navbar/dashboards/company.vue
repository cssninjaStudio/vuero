<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Business 2')

useHead({
  title: 'Business 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CompanyDashboard />
  </div>
</template>
