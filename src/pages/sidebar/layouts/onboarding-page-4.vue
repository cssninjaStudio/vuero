<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Onboarding Page 4'
useHead({
  title: 'Onboarding Page 4 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV4 />
  </div>
</template>
