<script setup lang="ts">
import { activeSidebar } from '/@src/state/activeSidebarState'
</script>

<template>
  <div
    id="components-sidebar"
    :class="[activeSidebar === 'components' && 'is-active']"
    class="sidebar-panel is-generic"
  >
    <div class="subpanel-header">
      <h3 class="no-mb">Components</h3>
      <div class="panel-close" @click="activeSidebar = 'none'">
        <i class="iconify" data-icon="feather:x"></i>
      </div>
    </div>
    <div class="inner" data-simplebar>
      <ul>
        <li>
          <RouterLink :to="{ name: 'components' }">Components Hub</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-avatars' }">V-Avatar</RouterLink>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >V-Accordion <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >V-Accordion</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-collapse' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >V-Collapse</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion-image' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >V-ImageAccordion</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-block' }">V-Block</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-breadcrumb' }"
            >V-Breadcrumb</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'components-button' }">V-Button</RouterLink>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >V-Card <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-card-advanced' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >V-CardAdvanced</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-card-bulma' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >V-CardBulma</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-card-social' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >V-CardSocial</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-dropdown' }"
            >V-Dropdown</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'components-icon-box' }"
            >V-IconBox</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'components-loader' }">V-Loader</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-messages' }"
            >V-Message</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'components-modal' }">V-Modal</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-progress' }"
            >V-Progress</RouterLink
          >
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >V-FlexTable <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-flex-table' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Base
                Table</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-flex-table-compact' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Compact
                Table</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-flex-table-media' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Media
                Table</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-flex-table-advanced' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Advanced
                Table</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-tag' }">V-Tag</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-snacks' }">V-Snack</RouterLink>
        </li>
        <li class="divider"></li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Plugins <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-notif' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Notyf</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-photo-swipe' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Photo
                Swipe</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-simple-datatables' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >V-Datatable</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-v-calendar' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >V-Calendar</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-vue-plyr' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Vue-Plyr</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-vue-multiselect' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Vue-Multiselect</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-vue-slider' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Vue-Slider</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-vue-tippy' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>
                Vue-Tippy</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-ckeditor' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>
                CKEditor</RouterLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../../assets/scss/layout/_sidebar-panel.scss';
</style>
