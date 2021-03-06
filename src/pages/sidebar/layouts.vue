<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import { activeSidebar } from '/@src/state/activeSidebarState'
import { sidebarLayout, sidebarLayoutId } from '/@src/state/sidebarLayoutState'

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
  <component :is="sidebarLayout" :class="[sidebarLayoutId]">
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
            <transition name="translate-page-x" mode="out-in">
              <component :is="Component" />
            </transition>
          </RouterView>
        </div>
      </div>
    </div>
  </component>
</template>
