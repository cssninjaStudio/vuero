<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Welcome')

useHead({
  title: 'Welcome - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingStandard />
  </div>
</template>
