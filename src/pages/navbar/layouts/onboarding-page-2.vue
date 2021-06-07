<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Onboarding Page 2'
useHead({
  title: 'Onboarding Page 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV2 />
  </div>
</template>
