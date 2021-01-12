<script setup lang="ts">
import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'
</script>

<template>
  <div
    id="elements-sidebar"
    :class="[activeSidebar === 'elements' && 'is-active']"
    class="sidebar-panel is-generic"
  >
    <div class="subpanel-header">
      <h3 class="no-mb">Elements</h3>
      <div class="panel-close">
        <Icon icon="feather:x" />
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
          <RouterLink :to="{ name: 'elements-blocks' }">Blocks</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-content' }">Content</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-tags' }">Tags & Badges</RouterLink>
        </li>

        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Icons <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-icons-lnil' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Line Icons Light</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-icons-lnir' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Line Icons Regular</RouterLink
              >
            </li>
            <li>
              <RouterLink :to="{ name: 'elements-icons-fa' }" class="is-submenu"
                ><Icon icon="feather:circle" />Font Awesome 5</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-icons-feather' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Feather Icons</RouterLink
              >
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Cards <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-cards-basic' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Basic Cards</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-cards-advanced' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Advanced Cards</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-cards-bulma' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Bulma Cards</RouterLink
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
        <li class="divider"></li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Forms <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-inputs' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Inputs</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-addons' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Input Addons</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-textarea' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Textarea</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-selects' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Selects</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-custom' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Custom</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-file' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />File Input</RouterLink
              >
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Toggles <Icon icon="chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-checkboxes' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Checkboxes</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-radios' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Radios</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-switch' }"
                class="is-submenu"
                ><Icon icon="feather:circle" />Switches</RouterLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
