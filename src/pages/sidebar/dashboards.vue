<script setup lang="ts">
import { sidebarTheme } from '/@src/state/sidebarLayoutState'
</script>

<template>
  <SidebarLayout
    :theme="sidebarTheme"
    close-on-change
    default-sidebar="dashboard"
  >
    <!-- Content Wrapper -->
    <div class="view-wrapper">
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <RouterView v-slot="{ Component }">
            <transition name="fade-fast" mode="out-in">
              <component :is="Component" />
            </transition>
          </RouterView>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
