<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Influencer Dashboard'
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
