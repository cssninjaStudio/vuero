<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import { activeSidebar } from '/@src/state/activeSidebarState'
import { navbarLayout, navbarLayoutId } from '/@src/state/navbarLayoutState'

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
  <component :is="navbarLayout" :class="[navbarLayoutId]">
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper has-top-nav"
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
