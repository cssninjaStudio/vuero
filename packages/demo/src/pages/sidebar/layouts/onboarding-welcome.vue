<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Welcome'
})

useHead({
  title: 'Welcome - Sidebar - Vuero',
})
</script>

<template>
  <OnboardingStandard />
</template>
