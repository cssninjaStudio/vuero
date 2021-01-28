<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Welcome - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Welcome</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <OnboardingStandard class="is-webapp" />
    </div>
  </div>
</template>
