<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Onboarding Page 2'
})

useHead({
  title: 'Onboarding Page 2 - Sidebar - Vuero',
})
</script>

<template>
  <OnboardingV2 />
</template>
