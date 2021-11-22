<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Lifestyle 3')

useHead({
  title: 'Lifestyle 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV3 />
  </div>
</template>
