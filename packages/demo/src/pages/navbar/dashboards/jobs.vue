<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Jobs'
})

useHead({
  title: 'Jobs - Navbar - Vuero',
})
</script>

<template>
  <JobsDashboard />
</template>
