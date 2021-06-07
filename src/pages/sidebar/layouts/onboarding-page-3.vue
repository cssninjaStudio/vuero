<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Onboarding Page 3'
useHead({
  title: 'Onboarding Page 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV3 />
  </div>
</template>
