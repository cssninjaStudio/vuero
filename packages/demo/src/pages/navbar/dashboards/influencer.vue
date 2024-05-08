<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Lifestyle 1'
})

useHead({
  title: 'Lifestyle 1 - Navbar - Vuero',
})
</script>

<template>
  <div>
    <Teleport to="[data-teleport-bg]">
      <div class="lifestyle-dashboard-bg has-top-nav" />
    </Teleport>

    <LifestyleDashboardV1 class="has-navbar-spacing" />
  </div>
</template>
