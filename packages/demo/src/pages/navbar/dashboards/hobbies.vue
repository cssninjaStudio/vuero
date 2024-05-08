<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Hobbies'
})

useHead({
  title: 'Hobbies - Navbar - Vuero',
})
</script>

<template>
  <LifestyleDashboardV2 />
</template>
