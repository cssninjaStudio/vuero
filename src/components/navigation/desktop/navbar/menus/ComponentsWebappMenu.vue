<script setup lang="ts">
import { ref } from 'vue'
import { activeSubnav } from '/@src/state/navbarState'

type TabId = 'components' | 'plugins'
const activeTab = ref<TabId>('components')
</script>

<template>
  <div
    id="components-navbar-menu"
    :class="[activeSubnav === 'components' && 'is-active']"
    class="navbar-subnavbar-inner tabs-wrapper"
  >
    <div class="tabs-inner">
      <div class="tabs is-centered is-2">
        <ul>
          <li :class="[activeTab === 'components' && 'is-active']">
            <a @click="activeTab = 'components'">UI Components</a>
          </li>
          <li :class="[activeTab === 'plugins' && 'is-active']">
            <a @click="activeTab = 'plugins'">JS Plugins</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div
        id="components-basic-pages-tab"
        class="tab-content"
        :class="[activeTab === 'components' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">General</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-avatars' }">
                      <span>V-Avatar</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-accordion' }">
                      <span>V-Accordion</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-collapse' }">
                      <span>V-Collapse</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-accordion-image' }">
                      <span>V-ImageAccordion</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-block' }">
                      <span>V-Block</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-breadcrumb' }">
                      <span>V-Breadcrumb</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-button' }">
                      <span>V-Button</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Interaction</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-loader' }">
                      <span>V-Loader</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-dropdown' }">
                      <span>V-Dropdown</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-modal' }">
                      <span>V-Modal</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Presentation</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-icon-box' }">
                      <span>V-IconBox</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-messages' }">
                      <span>V-Message</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-progress' }">
                      <span>V-Progress</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-tag' }">
                      <span>V-Tag</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-snacks' }">
                      <span>V-Snack</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Flex Table</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-flex-table' }">
                      <span>V-FlexTable Base</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-flex-table-compact' }">
                      <span>V-FlexTable Compact</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-flex-table-media' }">
                      <span>V-FlexTable Media</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-flex-table-advanced' }"
                    >
                      <span>V-FlexTable Advanced</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="components-plugins-pages-tab"
        class="tab-content"
        :class="[activeTab === 'plugins' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-notif' }">
                      <span>Notyf</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-photo-swipe' }"
                    >
                      <span>Photo Swipe</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-vue-plyr' }">
                      <span>Vue-Plyr</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <ul>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-simple-datatables' }"
                    >
                      <span>V-Datatable</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-v-calendar' }">
                      <span>V-Calendar</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-vue-multiselect' }"
                    >
                      <span>Vue-Multiselect</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-vue-slider' }">
                      <span>Vue-Slider</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink :to="{ name: 'components-plugins-vue-tippy' }">
                      <span>V-Tippy</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink :to="{ name: 'components-plugins-ckeditor' }">
                      <span>CKEditor</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <a href="https://cssninja.io" class="column-placeholder">
                  <img
                    class="light-image"
                    src="/images/icons/misc/buoy.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/images/icons/misc/buoy-dark.svg"
                    alt=""
                  />
                  <h3>Support</h3>
                </a>
                <a
                  href="https://docs.huro.cssninja.io"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="/images/icons/misc/docs.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/images/icons/misc/docs-dark.svg"
                    alt=""
                  />
                  <h3>Documentation</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../../assets/scss/abstracts/_mixins.scss';
@import '../../../../../assets/scss/layout/_navbar.scss';
@import '../../../../../assets/scss/layout/_responsive.scss';
</style>
