<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Ecommerce'
})

useHead({
  title: 'Ecommerce - Navbar - Vuero',
})
</script>

<template>
  <EcommerceDashboardV1 class="has-navbar-spacing" />
</template>
