<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Onboarding Page 1')

useHead({
  title: 'Onboarding Page 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV1 />
  </div>
</template>
