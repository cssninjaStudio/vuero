<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Charts BillboardJS')

useHead({
  title: 'Charts BillboardJS - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <BillboardJsDashboard />
  </div>
</template>
