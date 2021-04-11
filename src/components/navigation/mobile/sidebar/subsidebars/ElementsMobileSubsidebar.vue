<script setup lang="ts">
import { isMobileSidebarOpen } from '/@src/state/mobileSidebarState'
import { activeSidebar } from '/@src/state/activeSidebarState'
</script>

<template>
  <div
    :class="[isMobileSidebarOpen && 'is-active']"
    class="mobile-subsidebar is-activity"
  >
    <div class="inner">
      <div class="sidebar-title">
        <h3>Elements</h3>
      </div>

      <ul class="submenu">
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
          <RouterLink :to="{ name: 'elements-tags' }"
            >Tags &amp; Badges</RouterLink
          >
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
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
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
          <RouterLink :to="{ name: 'elements-table' }">Table</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-tooltips' }">Tooltips</RouterLink>
        </li>
      </ul>

      <div class="bottom-action"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../../assets/scss/layout/_sidebar-mobile.scss';
</style>
