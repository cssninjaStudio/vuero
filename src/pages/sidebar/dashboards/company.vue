<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Company Dashboard')

useHead({
  title: 'Company Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CompanyDashboard />
  </div>
</template>
