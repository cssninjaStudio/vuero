<script setup lang="ts">
import { useRoute } from 'vue-router'
import { sidebarTheme } from '/@src/state/sidebarLayoutState'

const route = useRoute()
</script>

<template>
  <SidebarLayout :theme="sidebarTheme" close-on-change default-sidebar="layout">
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <transition name="translate-page-x" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </RouterView>
  </SidebarLayout>
</template>
