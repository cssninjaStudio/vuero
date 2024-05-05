<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Saas Billing'
})

useHead({
  title: 'Saas Billing - Sidebar - Vuero',
})
</script>

<template>
  <SaasBillingApp />
</template>
