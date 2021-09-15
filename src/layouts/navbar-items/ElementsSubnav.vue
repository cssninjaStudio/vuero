<script setup lang="ts">
import { ref } from 'vue'

type TabId = 'interaction' | 'advanced'
const activeTab = ref<TabId>('interaction')
</script>

<template>
  <div class="navbar-subnavbar-inner tabs-wrapper">
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
                      <i aria-hidden="true" class="lnil lnil-home"></i>
                      <span>Elements Hub</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-colors' }">
                      <i aria-hidden="true" class="lnil lnil-color-palette"></i>
                      <span>Colors</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-helpers' }">
                      <i aria-hidden="true" class="lnil lnil-help"></i>
                      <span>Helpers</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-icons-iconify' }">
                      <span>Iconify</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-icons-line-icons' }">
                      <span>Line Icons Light</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'elements-icons-line-icons-regular' }"
                    >
                      <span>Line Icons Regular</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-icons-fa' }">
                      <span>Font Awesome 5</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              <div class="column is-3">
                <h4 class="column-heading">Loading</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-loader' }">
                      <span>VLoader</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-placeload' }">
                      <span>VPlaceload</span>
                      <VTag label="v1.2" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-placeload-text' }">
                      <span>VPlaceloadText</span>
                      <VTag label="v1.2" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-placeload-avatar' }">
                      <span>VPlaceloadAvatar</span>
                      <VTag label="v1.2" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              <div class="column is-3">
                <h4 class="column-heading">Basic interaction</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-dropdown' }">
                      <span>VDropdown</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-message' }">
                      <span>VMessage</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-modal' }">
                      <span>VModal</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-progress' }">
                      <span>VProgress</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-tooltip' }">
                      <span>VTooltip</span>
                      <VTag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              <div class="column is-3">
                <h4 class="column-heading">Buttons</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-button' }">
                      <span>VButton</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-action' }">
                      <span>VAction</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-icon-button' }">
                      <span>VIconButton</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
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
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-addons' }">
                      <span>Input Addons</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-textarea' }">
                      <span>Textarea</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-selects' }">
                      <span>Selects</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-file' }">
                      <span>File Input</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              <div class="column is-3">
                <h4 class="column-heading">Forms</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-control' }">
                      <span>VControl</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-field' }">
                      <span>VField</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              <div class="column is-3">
                <h4 class="column-heading">Switches</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-animated-checkbox' }">
                      <span>VAnimatedCheckbox</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-checkbox' }">
                      <span>VCheckbox</span>
                      <VTag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-radio' }">
                      <span>VRadio</span>
                      <VTag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-switch-block' }">
                      <span>VSwitchBlock</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-switch-segment' }">
                      <span>VSwitchSegment</span>
                      <VTag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              <div class="column is-3">
                <h4 class="column-heading">Addons</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-addons-calendar' }">
                      <span>VCalendar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-addons-imask-input' }">
                      <span>VIMaskInput</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-addons-filepond' }">
                      <span>VFilePond</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'elements-addons-vueform-multiselect' }"
                    >
                      <span>@vueform/multiselect</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'elements-addons-vueform-slider' }"
                    >
                      <span>@vueform/slider</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-addons-ckeditor' }">
                      <span>CKEditor 5</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
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
@import '../../scss/abstracts/_mixins.scss';
@import '../../scss/layout/_navbar.scss';
@import '../../scss/layout/_responsive.scss';
</style>
