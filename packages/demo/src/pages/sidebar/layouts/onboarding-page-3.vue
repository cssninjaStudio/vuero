<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Onboarding Page 3'
})

useHead({
  title: 'Onboarding Page 3 - Sidebar - Vuero',
})
</script>

<template>
  <OnboardingV3 />
</template>
