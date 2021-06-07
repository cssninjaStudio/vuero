<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Welcome'
useHead({
  title: 'Welcome - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingStandard />
  </div>
</template>
