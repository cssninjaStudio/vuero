<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import { activeSidebar } from '/@src/composition/state/activeSidebarState'
import {
  adminLayout,
  adminLayoutId,
} from '/@src/composition/state/adminLayoutState'

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
    <GenericSidebar />
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper"
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
