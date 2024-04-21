<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Onboarding Page 1')

useHead({
  title: 'Onboarding Page 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV1 />
  </div>
</template>
