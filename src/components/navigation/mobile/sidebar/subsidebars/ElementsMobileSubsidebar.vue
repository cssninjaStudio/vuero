<script setup lang="ts">
import { isMobileSidebarOpen } from '/@src/composition/state/ui/mobileSidebarState'
import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'
</script>

<template>
  <div
    :class="[
      isMobileSidebarOpen && activeSidebar === 'elements' && 'is-active',
    ]"
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
          <RouterLink :to="{ name: 'elements-blocks' }">Blocks</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-content' }">Content</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-tags' }"
            >Tags &amp; Badges</RouterLink
          >
        </li>

        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Icons <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-icons-lnil' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Line Icons
                Light</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-icons-lnir' }"
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
                :to="{ name: 'elements-icons-feather' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Feather
                Icons</RouterLink
              >
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Cards <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-cards-basic' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Basic
                Cards</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-cards-advanced' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Advanced
                Cards</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-cards-bulma' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Bulma
                Cards</RouterLink
              >
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
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
        <li v-has-children class="has-children">
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
        <li class="divider"></li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Forms <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-inputs' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Inputs</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-addons' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>Input
                Addons</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-textarea' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Textarea</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-selects' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Selects</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-custom' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Custom</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-file' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i>File
                Input</RouterLink
              >
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Toggles <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-checkboxes' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Checkboxes</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-radios' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Radios</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-switch' }"
                class="is-submenu"
                ><i class="iconify" data-icon="feather:circle"></i
                >Switches</RouterLink
              >
            </li>
          </ul>
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
