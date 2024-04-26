<script setup lang="ts">
useVueroContext({
  pageTitle: 'Influencer Dashboard',
})

useHead({
  title: 'Influencer Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div>
    <Teleport to="[data-teleport-bg]">
      <div class="lifestyle-dashboard-bg" />
    </Teleport>

    <LifestyleDashboardV1 />
  </div>
</template>
