<script setup lang="ts">
const layoutSwitcher = useLayoutSwitcher()
</script>

<template>
  <component
    :is="(layoutSwitcher.dynamicLayoutComponent as any)"
    v-bind="layoutSwitcher.dynamicLayoutProps"
  >
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <Transition
        name="translate-page-x"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
  </component>
</template>
