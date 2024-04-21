<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Influencer Dashboard')

useHead({
  title: 'Influencer Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Teleport to="[data-teleport-bg]">
      <div class="lifestyle-dashboard-bg" />
    </Teleport>

    <LifestyleDashboardV1 />
  </div>
</template>
