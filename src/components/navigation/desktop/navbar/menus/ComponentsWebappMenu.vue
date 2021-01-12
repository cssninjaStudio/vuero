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
                      <span>Avatars</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-accordion-basic' }">
                      <span>Accordion</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-accordion-collapse' }">
                      <span>Collapse</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-accordion-images' }">
                      <span>Image Accordion</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-breadcrumb' }">
                      <span>Breadcrumb</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Interaction</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-loader' }">
                      <span>Loader</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-dropdown' }">
                      <span>Dropdown</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-modal' }">
                      <span>Modal Dialogs</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-tabs-regular' }">
                      <span>Regular Tabs</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-tabs-slider' }">
                      <span>Slider Tabs</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Presentation</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-icon-box' }">
                      <span>Icon Box</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-messages' }">
                      <span>Message</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-progress' }">
                      <span>Progress</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-snacks' }">
                      <span>Snacks</span>
                      <Icon icon="feather:circle" />
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
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-table-flex-compact' }">
                      <span>Compact Table</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-table-flex-media' }">
                      <span>Media Table</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-table-flex-advanced' }"
                    >
                      <span>Advanced Table</span>
                      <Icon icon="feather:circle" />
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
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-autocomplete' }"
                    >
                      <span>Autocomplete</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-datepicker' }">
                      <span>Datepicker</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-choices' }">
                      <span>Choices JS</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-filepond' }">
                      <span>Filepond</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-lightgallery' }"
                    >
                      <span>Light Gallery</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-videogallery' }"
                    >
                      <span>Video Gallery</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-video-player' }"
                    >
                      <span>Video Player</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-toasts' }">
                      <span>Toast Messages</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-webuipopover' }"
                    >
                      <span>WebUI Popovers</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-nouislider' }">
                      <span>NoUI Slider</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-editor-summernote' }"
                    >
                      <span>Summernote</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-editor-sun' }">
                      <span>Sun Editor</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <a href="https://cssninja.io" class="column-placeholder">
                  <img
                    class="light-image"
                    src="/@images/icons/misc/buoy.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/icons/misc/buoy-dark.svg"
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
                    src="/@images/icons/misc/docs.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/icons/misc/docs-dark.svg"
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
