<script setup lang="ts">
import { onMounted } from 'vue'

import { activeSidebar } from '/@src/state/activeSidebarState'
import { sidebarTheme } from '/@src/state/sidebarLayoutState'

onMounted(() => {
  activeSidebar.value = 'elements'
})
</script>

<template>
  <SidebarLayout :theme="sidebarTheme">
    <ElementsSidebar />

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
  </SidebarLayout>
</template>

<style lang="scss">
@import '../scss/abstracts/_variables.scss';
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/demo/_demo.scss';
</style>
