<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'
import {
  adminLayout,
  adminLayoutId,
} from '/@src/composition/state/ui/adminLayoutState'

const route = useRoute()

onMounted(() => {
  activeSidebar.value = 'none'
})

watch(
  () => route.path,
  () => {
    activeSidebar.value = 'none'
  }
)
</script>

<template>
  <component :is="adminLayout" :class="[adminLayoutId]">
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <RouterView v-slot="{ Component }">
            <transition name="translatex" mode="out-in">
              <component :is="Component" />
            </transition>
          </RouterView>
        </div>
      </div>
    </div>
  </component>
</template>

<style lang="scss" scoped>
.translatex-enter-active {
  animation: translatex-in 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
.translatex-leave-active {
  animation: translatex-out 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}

@keyframes translatex-in {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes translatex-out {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(500px);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .translatex-enter-active,
  .translatex-leave-active {
    transition: none;
  }
}
</style>
