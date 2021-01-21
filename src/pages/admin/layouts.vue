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
            <transition name="translatex" mode="in-out">
              <component :is="Component" />
            </transition>
          </RouterView>
        </div>
      </div>
    </div>
  </component>
</template>

<style lang="scss" scoped>
.translatex-enter-active,
.translatex-leave-active {
  transform: translateX(0);
  transition: transform 0.45s ease-out, opacity 0.25s ease-out;
  opacity: 1;
}

.translatex-enter-from {
  transform: translateX(100px);
  opacity: 0;
}
.translatex-leave-to {
  transform: translateX(-800px);
  opacity: 0;
}

// @media (prefers-reduced-motion: reduce) {
//   .translatex-enter-active,
//   .translatex-leave-active {
//     transition: none;
//   }
// }
</style>
