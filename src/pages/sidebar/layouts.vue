<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'

const layoutSwitcher = useLayoutSwitcher()
const route = useRoute()
</script>

<template>
  <component
    :is="layoutSwitcher.dynamicLayoutComponent"
    v-bind="layoutSwitcher.dynamicLayoutProps"
    close-on-change
    default-sidebar="layout"
  >
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <transition name="translate-page-x" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </RouterView>
  </component>
</template>
