<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Personal 2')

useHead({
  title: 'Personal 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV2 />
  </div>
</template>
