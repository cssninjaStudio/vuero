<script setup lang="ts">
const layoutSwitcher = useLayoutSwitcher()
useVueroContext({
  pageTitle: 'Maps 1',
})

useHead({
  title: 'Maps 1 - Navbar - Vuero',
})
</script>

<template>
  <component
    :is="(layoutSwitcher.dynamicLayoutComponent as any)"
    v-bind="layoutSwitcher.dynamicLayoutProps"
    size="full"
  >
    <template #page-heading>
      <span />
    </template>
    <MapsDashboard />
  </component>
</template>
