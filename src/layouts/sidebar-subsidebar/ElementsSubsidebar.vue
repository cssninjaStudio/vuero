<script setup lang="ts">
import { defineEmit } from 'vue'

const emit = defineEmit(['close'])
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <h3 class="no-mb">Elements</h3>
      <div class="panel-close" @click="emit('close')">
        <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
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

        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link">
              Icons
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:chevron-right"
              />
            </a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-icons-iconify' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Iconify
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-icons-line-icons' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Line Icons Light
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-icons-line-icons-regular' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Line Icons Regular
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-icons-fa' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Font Awesome 5
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="divider with-label">
          <span class="divider-label">Interaction</span>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-dropdown' }">
            V-Dropdown
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-loader' }">V-Loader</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-placeload' }">
            V-Placeload
            <V-Tag label="v1.2" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-placeload-text' }">
            V-PlaceloadText
            <V-Tag label="v1.2" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-placeload-avatar' }">
            V-PlaceloadAvatar
            <V-Tag label="v1.2" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-message' }">
            V-Message
            <V-Tag label="v1.1" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-modal' }">V-Modal</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-progress' }">
            V-Progress
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-tooltip' }">
            V-Tootlip
            <V-Tag label="v1.1" color="primary" outlined curved />
          </RouterLink>
        </li>

        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link">
              Buttons
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:chevron-right"
              />
            </a>
          </div>
          <ul>
            <li>
              <RouterLink :to="{ name: 'elements-button' }" class="is-submenu">
                V-Button
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'elements-action' }" class="is-submenu">
                V-Action
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-icon-button' }"
                class="is-submenu"
              >
                V-IconButton
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link">
              Inputs
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:chevron-right"
              />
            </a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-inputs' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Inputs
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-addons' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Input Addons
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-textarea' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Textarea
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-selects' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Selects
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-forms-file' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                >
                </i>
                File Input
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'elements-control' }" class="is-submenu">
                V-Control
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'elements-field' }" class="is-submenu">
                V-Field
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link">
              Switches
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:chevron-right"
              />
            </a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-animated-checkbox' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                V-AnimatedCheckbox
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-checkbox' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                V-Checkbox
                <V-Tag label="v1.1" color="primary" outlined curved />
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'elements-radio' }" class="is-submenu">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                V-Radio
                <V-Tag label="v1.1" color="primary" outlined curved />
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-switch-block' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                V-SwitchBlock
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-switch-segment' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                V-SwitchSegment
                <V-Tag label="v1.1" color="primary" outlined curved />
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="divider"></li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link">
              Addons
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:chevron-right"
              />
            </a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'elements-addons-calendar' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                V-Calendar &amp; V-DatePicker
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-addons-imask-input' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                V-IMaskInput
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-addons-filepond' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                V-FilePond
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-addons-credit-card' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                V-CreditCard
              </RouterLink>
            </li>

            <li>
              <RouterLink
                :to="{ name: 'elements-addons-vueform-multiselect' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                @vueform/multiselect
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-addons-vueform-slider' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                @vueform/slider
              </RouterLink>
            </li>

            <li>
              <RouterLink
                :to="{ name: 'elements-addons-ckeditor' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                CKEditor 5
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/layout/_sidebar-panel.scss';
</style>
