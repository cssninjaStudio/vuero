<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Welcome')

useHead({
  title: 'Welcome - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingStandard />
  </div>
</template>
