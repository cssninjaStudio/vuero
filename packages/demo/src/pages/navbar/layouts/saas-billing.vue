<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Saas Billing'
})

useHead({
  title: 'Saas Billing - Navbar - Vuero',
})
</script>

<template>
  <SaasBillingApp />
</template>
