<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Charts Apex')

useHead({
  title: 'Charts Apex - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ApexDashboard />
  </div>
</template>
