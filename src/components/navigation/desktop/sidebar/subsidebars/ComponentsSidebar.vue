<script setup lang="ts">
import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'
</script>

<template>
  <div
    id="components-sidebar"
    :class="[activeSidebar === 'components' && 'is-active']"
    class="sidebar-panel is-generic"
  >
    <div class="subpanel-header">
      <h3 class="no-mb">Components</h3>
      <div class="panel-close">
        <i class="iconify" data-icon="feather:x"></i>
      </div>
    </div>
    <div class="inner" data-simplebar>
      <ul>
        <li>
          <RouterLink :to="{ name: 'components' }">Components Hub</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-avatars' }">Avatars</RouterLink>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Accordions <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion-basic' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Accordion</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion-collapse' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Collapse</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion-images' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Image
                Accordion</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-breadcrumb' }"
            >Breadcrumb</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'components-vbutton' }">V-Button</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-dropdown' }"
            >Dropdown</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'components-icon-box' }"
            >Icon Box</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'components-loader' }">Loader</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-messages' }">Message</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-modal' }">Modal</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-progress' }"
            >Progress</RouterLink
          >
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Tabs <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-tabs-regular' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Regular
                Tabs</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-tabs-slider' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Slider
                Tabs</RouterLink
              >
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Flex Table <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-table-flex' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Base
                Table</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-table-flex-compact' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Compact
                Table</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-table-flex-media' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Media
                Table</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-table-flex-advanced' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Advanced
                Table</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-snacks' }">Snacks</RouterLink>
        </li>
        <li class="divider"></li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Plugins <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-alertify' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Alertify</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-autocomplete' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Autocomplete</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-datepicker' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Datepicker</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-choices' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >ChoicesJs</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-nouislider' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>NoUI
                Slider</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-filepond' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Filepond</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-lightgallery' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Light
                Gallery</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-videogallery' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Video
                Gallery</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-video-player' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Video
                Player</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-toasts' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Toasts</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-webuipopover' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>WebUI
                Popover</RouterLink
              >
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Rich Text <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                class="is-submenu"
                :to="{ name: 'components-plugins-editor-summernote' }"
                ><i class="iconify" data-icon="feather:circle"></i
                >Summernote</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-editor-sun' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Sun
                Editor</RouterLink
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
