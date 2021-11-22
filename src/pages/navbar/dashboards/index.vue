<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Personal 1')

useHead({
  title: 'Personal 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV1 />
  </div>
</template>
