<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'

const layoutSwitcher = useLayoutSwitcher()
const route = useRoute()
</script>

<template>
  <SidebarLayout
    :theme="layoutSwitcher.sidebarTheme"
    close-on-change
    default-sidebar="dashboard"
  >
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <transition name="fade-fast" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </RouterView>
  </SidebarLayout>
</template>
