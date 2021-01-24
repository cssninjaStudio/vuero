<script setup lang="ts">
import { ref } from 'vue'
import { activeSubnav } from '/@src/composition/state/ui/webappNavState'

const activeTab = ref<'components' | 'plugins'>('components')
</script>

<template>
  <div
    id="components-webapp-menu"
    :class="[activeSubnav === 'components' && 'is-active']"
    class="webapp-subnavbar-inner tabs-wrapper"
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
                    <RouterLink :to="{ name: 'components-accordion-basic' }">
                      <span>V-Accordion</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-accordion-collapse' }">
                      <span>V-Collapse</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-accordion-images' }">
                      <span>V-ImageAccordion</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-vblock' }">
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
                    <RouterLink :to="{ name: 'components-vbutton' }">
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
                      <span>Modal Dialogs</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-tabs-regular' }">
                      <span>Regular Tabs</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-tabs-slider' }">
                      <span>Slider Tabs</span>
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
                      <span>Message</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-progress' }">
                      <span>Progress</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-snacks' }">
                      <span>Snacks</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Flex Table</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-table-flex' }">
                      <span>Base Table</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-table-flex-compact' }">
                      <span>Compact Table</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-table-flex-media' }">
                      <span>Media Table</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-table-flex-advanced' }"
                    >
                      <span>Advanced Table</span>
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
                    <RouterLink :to="{ name: 'components-plugins-alertify' }">
                      <span>Alertify</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-autocomplete' }"
                    >
                      <span>Autocomplete</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-datepicker' }">
                      <span>Datepicker</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-choices' }">
                      <span>Choices JS</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-filepond' }">
                      <span>Filepond</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-lightgallery' }"
                    >
                      <span>Light Gallery</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-videogallery' }"
                    >
                      <span>Video Gallery</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-video-player' }"
                    >
                      <span>Video Player</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-toasts' }">
                      <span>Toast Messages</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-webuipopover' }"
                    >
                      <span>WebUI Popovers</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-nouislider' }">
                      <span>NoUI Slider</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-editor-summernote' }"
                    >
                      <span>Summernote</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-editor-sun' }">
                      <span>Sun Editor</span>
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
