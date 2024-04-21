<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Banking 1')

useHead({
  title: 'Banking 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <BankingDashboardV1 />
  </div>
</template>
