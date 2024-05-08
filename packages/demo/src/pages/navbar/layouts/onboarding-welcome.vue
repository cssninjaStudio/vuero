<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Welcome'
})

useHead({
  title: 'Welcome - Navbar - Vuero',
})
</script>

<template>
  <OnboardingStandard />
</template>
