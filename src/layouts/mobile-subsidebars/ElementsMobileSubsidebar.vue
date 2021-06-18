<template>
  <div class="mobile-subsidebar is-activity">
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
          <RouterLink :to="{ name: 'elements-placeload' }"
            >V-Placeload</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-placeload-text' }"
            >V-PlaceloadText</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-placeload-avatar' }"
            >V-PlaceloadAvatar</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-message' }">
            V-Message
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
      <div class="bottom-action"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/layout/_sidebar-mobile.scss';
</style>
