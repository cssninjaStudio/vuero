<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Profile View'
})

useHead({
  title: 'Profile View - Navbar - Vuero',
})
</script>

<template>
  <ViewProfile />
</template>
