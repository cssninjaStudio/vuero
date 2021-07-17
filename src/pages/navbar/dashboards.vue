<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import {
  navbarLayoutComponent,
  navbarLayoutId,
  navbarLayoutTheme,
} from '/@src/state/navbarLayoutState'

const route = useRoute()
</script>

<template>
  <component :is="navbarLayoutComponent" :theme="navbarLayoutTheme">
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <transition name="fade-fast" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </RouterView>
  </component>
</template>
