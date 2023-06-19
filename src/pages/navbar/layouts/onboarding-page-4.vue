<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Onboarding Page 4')

useHead({
  title: 'Onboarding Page 4 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV4 />
  </div>
</template>
