<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
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
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div class="view-wrapper has-top-nav">
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
