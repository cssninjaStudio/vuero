<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Banking 1'
})

useHead({
  title: 'Banking 1 - Sidebar - Vuero',
})
</script>

<template>
  <BankingDashboardV1 />
</template>
