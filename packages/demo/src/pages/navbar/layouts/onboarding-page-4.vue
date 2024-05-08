<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Onboarding Page 4'
})

useHead({
  title: 'Onboarding Page 4 - Navbar - Vuero',
})
</script>

<template>
  <OnboardingV4 />
</template>
