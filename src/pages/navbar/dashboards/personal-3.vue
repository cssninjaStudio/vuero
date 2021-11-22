<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Personal 3')

useHead({
  title: 'Personal 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV3 class="has-navbar-spacing" />
  </div>
</template>
