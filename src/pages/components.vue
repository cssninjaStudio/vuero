<script setup lang="ts">
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'components'
})
</script>

<template>
  <DefaultLayout>
    <ComponentsSidebar />
    <ComponentsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <RouterView v-slot="{ Component }">
            <transition name="translatey" mode="out-in">
              <component :is="Component" />
            </transition>
          </RouterView>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style lang="scss">
.translatey-enter-active,
.translatey-leave-active {
  transform: translateY(0);
  transition: transform 0.25s ease-out, opacity 0.25s ease-out;
}

.translatey-enter-from {
  transform: translateY(10px);
  opacity: 0;
}
.translatey-leave-to {
  transform: translateY(-300px);
  opacity: 0;
}
</style>
