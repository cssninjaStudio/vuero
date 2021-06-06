<script setup lang="ts">
import { onMounted } from 'vue'

import { activeSidebar } from '/@src/state/activeSidebarState'
import { sidebarTheme } from '/@src/state/sidebarLayoutState'

onMounted(() => {
  activeSidebar.value = 'components'
})
</script>

<template>
  <SidebarLayout
    :theme="sidebarTheme"
    open-on-mounted
    default-sidebar="components"
  >
    <!-- Content Wrapper -->
    <div class="view-wrapper">
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
