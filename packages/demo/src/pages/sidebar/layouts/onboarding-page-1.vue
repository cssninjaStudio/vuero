<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Onboarding Page 1'
})

useHead({
  title: 'Onboarding Page 1 - Sidebar - Vuero',
})
</script>

<template>
  <OnboardingV1 />
</template>
