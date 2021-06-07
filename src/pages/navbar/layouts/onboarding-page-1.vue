<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Onboarding Page 1'
useHead({
  title: 'Onboarding Page 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV1 />
  </div>
</template>
