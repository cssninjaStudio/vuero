<script setup lang="ts">
import { onMounted } from 'vue'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'
import {
  adminLayout,
  adminLayoutId,
} from '/@src/composition/state/ui/adminLayoutState'

onMounted(() => {
  activeSidebar.value = 'components'
})
</script>

<template>
  <component :is="adminLayout" :class="[adminLayoutId]">
    <ComponentsSidebar />
    <ComponentsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <RouterView v-slot="{ Component }">
            <transition name="translate-page-y" mode="out-in">
              <component :is="Component" />
            </transition>
          </RouterView>
        </div>
      </div>
    </div>
  </component>
</template>
