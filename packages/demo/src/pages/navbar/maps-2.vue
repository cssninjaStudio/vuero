<script setup lang="ts">
const layoutSwitcher = useLayoutSwitcher()
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Maps 2'
})

useHead({
  title: 'Maps 2 - Navbar - Vuero',
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

    <MapsDashboard reversed />
  </component>
</template>
