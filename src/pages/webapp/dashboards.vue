<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

import WebappLayout from '/@src/layouts/WebappLayout.vue'
import WebappV2Layout from '/@src/layouts/WebappV2Layout.vue'
import WebappV3Layout from '/@src/layouts/WebappV3Layout.vue'
import WebappV4Layout from '/@src/layouts/WebappV4Layout.vue'
import WebappV5Layout from '/@src/layouts/WebappV5Layout.vue'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'
import { webappLayout } from '/@src/composition/state/ui/webappLayoutState'

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
  <component :is="webappLayout">
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
    >
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
  </component>
</template>

<style lang="scss" scoped>
.fade-fast-enter-active,
.fade-fast-leave-active {
  transition: opacity 0.2s ease;
}

.fade-fast-enter-from,
.fade-fast-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .fade-fast-enter-active,
  .fade-fast-leave-active {
    transition: none;
  }
}
</style>
