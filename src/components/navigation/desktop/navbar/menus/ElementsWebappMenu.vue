<script setup lang="ts">
import { ref } from 'vue'
import { activeSubnav } from '/@src/state/activeNavbarState'

type TabId = 'basic' | 'forms'
const activeTab = ref<TabId>('basic')
</script>

<template>
  <div
    id="elements-navbar-menu"
    :class="[activeSubnav === 'elements' && 'is-active']"
    class="navbar-subnavbar-inner tabs-wrapper"
  >
    <div class="tabs-inner">
      <div class="tabs is-centered is-2">
        <ul>
          <li :class="[activeTab === 'basic' && 'is-active']">
            <a @click="activeTab = 'basic'">Basic UI</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div
        id="elements-basic-pages-tab"
        class="tab-content"
        :class="[activeTab === 'basic' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">General</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements' }">
                      <i class="lnil lnil-home"></i>
                      <span>Elements Hub</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-colors' }">
                      <i class="lnil lnil-color-palette"></i>
                      <span>Colors</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-helpers' }">
                      <i class="lnil lnil-help"></i>
                      <span>Helpers</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Icons</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-icons-line-icons' }">
                      <span>Line Icons Light</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'elements-icons-line-icons-regular' }"
                    >
                      <span>Line Icons Regular</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-icons-fa' }">
                      <span>Font Awesome 5</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-icons-iconify' }">
                      <span>Iconify</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Base</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-buttons' }">
                      <span>Buttons</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-content' }">
                      <span>Content</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-tags' }">
                      <span>Tags</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Advanced</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-cards-basic' }">
                      <span>Cards</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-table' }">
                      <span>Table</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-tabs-regular' }">
                      <span>Regular Tabs</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-tabs-slider' }">
                      <span>Slider Tabs</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-tooltips' }">
                      <span>Tooltips</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../../scss/abstracts/_variables.scss';
@import '../../../../../scss/abstracts/_mixins.scss';
@import '../../../../../scss/layout/_navbar.scss';
@import '../../../../../scss/layout/_responsive.scss';
</style>
