<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Banking 2')

useHead({
  title: 'Banking 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <BankingDashboardV2 />
  </div>
</template>
