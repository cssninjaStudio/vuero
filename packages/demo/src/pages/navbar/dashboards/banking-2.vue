<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Banking 2'
})

useHead({
  title: 'Banking 2 - Navbar - Vuero',
})
</script>

<template>
  <BankingDashboardV2 />
</template>
