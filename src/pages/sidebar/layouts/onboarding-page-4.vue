<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Onboarding Page 4')

useHead({
  title: 'Onboarding Page 4 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV4 />
  </div>
</template>
