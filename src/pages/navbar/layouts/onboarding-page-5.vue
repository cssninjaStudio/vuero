<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Onboarding Page 5'
useHead({
  title: 'Onboarding Page 5 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV5 />
  </div>
</template>
