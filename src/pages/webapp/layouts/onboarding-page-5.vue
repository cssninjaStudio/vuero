<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'Onboarding Page 5 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Onboarding</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <OnboardingV5 class="is-webapp" />
    </div>
  </div>
</template>
