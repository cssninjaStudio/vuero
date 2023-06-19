<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Onboarding Page 3')

useHead({
  title: 'Onboarding Page 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV3 />
  </div>
</template>
