<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Personal 3'
})

useHead({
  title: 'Personal 3 - Navbar - Vuero',
})
</script>

<template>
  <PersonalDashboardV3 class="has-navbar-spacing" />
</template>
