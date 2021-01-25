<script setup lang="ts">
import { isMobileSidebarOpen } from '/@src/composition/state/ui/mobileSidebarState'
import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'
</script>

<template>
  <div
    :class="[
      isMobileSidebarOpen && activeSidebar === 'components' && 'is-active',
    ]"
    class="mobile-subsidebar is-activity"
  >
    <div class="inner">
      <div class="sidebar-title">
        <h3>Components</h3>
      </div>

      <ul class="submenu">
        <li>
          <RouterLink :to="{ name: 'components' }">Components Hub</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-avatars' }">V-Avatar</RouterLink>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >V-Accordion <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion-basic' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >V-Accordion</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion-collapse' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >V-Collapse</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion-images' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>
                V-ImageAccordion</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-vblock' }">V-Block</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-breadcrumb' }"
            >V-Breadcrumb</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'components-vbutton' }">V-Button</RouterLink>
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
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >V-FlexTable <i class="iconify" data-icon="feather:chevron-right"
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
          <RouterLink :to="{ name: 'components-vtag' }">V-Tag</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-snacks' }">V-Snack</RouterLink>
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
@import '../../../../../assets/scss/layout/_sidebar-mobile.scss';
</style>
