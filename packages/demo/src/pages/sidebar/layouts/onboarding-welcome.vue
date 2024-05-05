<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
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
