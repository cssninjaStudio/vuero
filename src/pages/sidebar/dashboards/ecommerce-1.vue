<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Ecommerce 1')

useHead({
  title: 'Ecommerce 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <EcommerceDashboardV1 />
  </div>
</template>
