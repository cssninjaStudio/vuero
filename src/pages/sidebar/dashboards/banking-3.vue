<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Banking 3')

useHead({
  title: 'Banking 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <BankingDashboardV3 />
  </div>
</template>
