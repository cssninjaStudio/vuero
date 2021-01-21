<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

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
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper is-webapp"
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
  </WebappLayout>
</template>

<style lang="scss" scoped>
.translatex-enter-active,
.translatex-leave-active {
  transform: translateX(0);
  transition: transform 0.25s ease-out, opacity 0.25s ease-out;
}

.translatex-enter-from {
  transform: translateX(10px);
  opacity: 0;
}
.translatex-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .translatex-enter-active,
  .translatex-leave-active {
    transition: none;
  }
}
</style>
