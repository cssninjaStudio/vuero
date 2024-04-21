<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Finance 3')

useHead({
  title: 'Finance 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <SalesDashboard />
  </div>
</template>
