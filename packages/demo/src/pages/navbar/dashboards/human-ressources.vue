<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'HR Dashboard'
})

useHead({
  title: 'HR Dashboard - Navbar - Vuero',
})
</script>

<template>
  <HumanRessourcesDashboard class="has-navbar-spacing" />
</template>
