<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Lifestyle 5')

useHead({
  title: 'Lifestyle 5 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV5 />
  </div>
</template>
