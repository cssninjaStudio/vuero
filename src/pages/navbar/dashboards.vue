<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script setup lang="ts">
import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'

const layoutSwitcher = useLayoutSwitcher()
const route = useRoute()
</script>

<template>
  <component
    :is="layoutSwitcher.dynamicLayoutComponent"
    v-bind="layoutSwitcher.dynamicLayoutProps"
  >
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <Transition name="fade-fast" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </component>
</template>
