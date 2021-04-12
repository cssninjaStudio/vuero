<script setup lang="ts">
import { activeSidebar } from '/@src/state/activeSidebarState'
</script>

<template>
  <div
    id="elements-sidebar"
    :class="[activeSidebar === 'elements' && 'is-active']"
    class="sidebar-panel is-generic"
  >
    <div class="subpanel-header">
      <h3 class="no-mb">Elements</h3>
      <div class="panel-close" @click="activeSidebar = 'none'">
        <i class="iconify" data-icon="feather:x"></i>
      </div>
    </div>
    <div class="inner" data-simplebar>
      <ul>
        <li>
          <RouterLink :to="{ name: 'elements' }">Elements Hub</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-colors' }">Colors</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-helpers' }">Helpers</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-buttons' }">Buttons</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-content' }">Content</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-tags' }">Tags</RouterLink>
        </li>

        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Icons <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-icons-line-icons' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Line Icons
                Light</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-icons-line-icons-regular' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Line Icons
                Regular</RouterLink
              >
            </li>
            <li>
              <RouterLink :to="{ name: 'elements-icons-fa' }" class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Font Awesome
                5</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-icons-iconify' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Iconify</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-cards-basic' }">Cards</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-table' }">Table</RouterLink>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Tabs <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-tabs-regular' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Regular
                Tabs</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-tabs-slider' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Slider
                Tabs</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-tooltips' }">Tooltips</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../../scss/abstracts/_variables.scss';
@import '../../../../../scss/layout/_sidebar-panel.scss';
</style>
