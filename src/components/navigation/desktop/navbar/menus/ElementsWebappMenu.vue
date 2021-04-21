<script setup lang="ts">
import { ref } from 'vue'
import { activeSubnav } from '/@src/state/activeNavbarState'

type TabId = 'interaction' | 'advanced'
const activeTab = ref<TabId>('interaction')
</script>

<template>
  <div
    id="elements-navbar-menu"
    :class="[activeSubnav === 'elements' && 'is-active']"
    class="navbar-subnavbar-inner tabs-wrapper"
  >
    <div class="tabs-inner">
      <div class="tabs is-centered is-4">
        <ul>
          <li :class="[activeTab === 'interaction' && 'is-active']">
            <a @click="activeTab = 'interaction'">Interaction</a>
          </li>
          <li :class="[activeTab === 'advanced' && 'is-active']">
            <a @click="activeTab = 'advanced'">Advanced</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div v-if="activeTab === 'interaction'" class="tab-content is-active">
        <div class="tab-content-inner">
          <div class="center">
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
                    <RouterLink :to="{ name: 'elements-icons-iconify' }">
                      <span>Iconify</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
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
                </ul>
              </div>

              <div class="column is-3">
                <h4 class="column-heading">Basic interaction</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-dropdown' }">
                      <span>V-Dropdown</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-loader' }">
                      <span>V-Loader</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-message' }">
                      <span>V-Message</span>
                      <V-Tag label="v1.1" color="primary" outlined curved />
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-modal' }">
                      <span>V-Modal</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-progress' }">
                      <span>V-Progress</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-tooltip' }">
                      <span>V-Tooltip</span>
                      <V-Tag label="v1.1" color="primary" outlined curved />
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              <div class="column is-3">
                <h4 class="column-heading">Buttons</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-button' }">
                      <span>V-Button</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-action' }">
                      <span>V-Action</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-icon-button' }">
                      <span>V-IconButton</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'advanced'" class="tab-content is-active">
        <div class="tab-content-inner">
          <div class="center">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Inputs</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-inputs' }">
                      <span>Text inputs</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-addons' }">
                      <span>Input Addons</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-textarea' }">
                      <span>Textarea</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-selects' }">
                      <span>Selects</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-file' }">
                      <span>File Input</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              <div class="column is-3">
                <h4 class="column-heading">Forms</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-control' }">
                      <span>V-Control</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-field' }">
                      <span>V-Field</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              <div class="column is-3">
                <h4 class="column-heading">Switches</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-animated-checkbox' }">
                      <span>V-AnimatedCheckbox</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-checkbox' }">
                      <span>V-Checkbox</span>
                      <V-Tag label="v1.1" color="primary" outlined curved />
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-radio' }">
                      <span>V-Radio</span>
                      <V-Tag label="v1.1" color="primary" outlined curved />
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-switch-block' }">
                      <span>V-SwitchBlock</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-switch-segment' }">
                      <span>V-SwitchSegment</span>
                      <V-Tag label="v1.1" color="primary" outlined curved />
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              <div class="column is-3">
                <h4 class="column-heading">Addons</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-addons-calendar' }">
                      <span>V-Calendar</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-addons-imask-input' }">
                      <span>V-IMaskInput</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-addons-filepond' }">
                      <span>V-FilePond</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'elements-addons-vueform-multiselect' }"
                    >
                      <span>@vueform/multiselect</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'elements-addons-vueform-slider' }"
                    >
                      <span>@vueform/slider</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-addons-ckeditor' }">
                      <span>CKEditor 5</span>
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
    <!-- <div class="container">
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
                    <RouterLink :to="{ name: 'elements-button' }">
                      <span>Buttons</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-content' }">
                      <span>Content</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-tag' }">
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
                    <RouterLink :to="{ name: 'components-card' }">
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
                    <RouterLink :to="{ name: 'components-tabs' }">
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
                    <RouterLink :to="{ name: 'elements-tooltip' }">
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
    </div> -->
  </div>
</template>

<style lang="scss">
@import '../../../../../scss/abstracts/_variables.scss';
@import '../../../../../scss/abstracts/_mixins.scss';
@import '../../../../../scss/layout/_navbar.scss';
@import '../../../../../scss/layout/_responsive.scss';
</style>
