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
        <Icon icon="feather:x" />
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
        <li class="has-children" >
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Accordions <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion-basic' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Accordion</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion-collapse' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Collapse</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion-images' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Image Accordion</RouterLink
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
        <li class="has-children" >
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Tabs <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-tabs-regular' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Regular Tabs</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-tabs-slider' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Slider Tabs</RouterLink
              >
            </li>
          </ul>
        </li>
        <li class="has-children" >
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Flex Table <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-table-flex' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Base Table</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-table-flex-compact' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Compact Table</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-table-flex-media' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Media Table</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-table-flex-advanced' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Advanced Table</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-snacks' }">Snacks</RouterLink>
        </li>
        <li class="divider"></li>
        <li class="has-children" >
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Plugins <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-alertify' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Alertify</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-autocomplete' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Autocomplete</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-datepicker' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Datepicker</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-choices' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />ChoicesJs</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-nouislider' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />NoUI Slider</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-filepond' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Filepond</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-lightgallery' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Light Gallery</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-videogallery' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Video Gallery</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-video-player' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Video Player</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-toasts' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Toasts</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-webuipopover' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />WebUI Popover</RouterLink
              >
            </li>
          </ul>
        </li>
        <li class="has-children" >
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Rich Text <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                class="is-submenu"
                :to="{ name: 'components-plugins-editor-summernote' }"
                ><Icon icon="feather:circle" />Summernote</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-editor-sun' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Sun Editor</RouterLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
