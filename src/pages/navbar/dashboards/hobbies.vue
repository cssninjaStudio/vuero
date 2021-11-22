<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Hobbies')

useHead({
  title: 'Hobbies - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV2 />
  </div>
</template>
