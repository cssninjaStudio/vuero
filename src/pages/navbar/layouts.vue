<script setup lang="ts">
import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'

const layoutSwitcher = useLayoutSwitcher()
</script>

<template>
  <component
    :is="layoutSwitcher.dynamicLayoutComponent"
    v-bind="layoutSwitcher.dynamicLayoutProps"
  >
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <Transition name="translate-page-x" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </component>
</template>
