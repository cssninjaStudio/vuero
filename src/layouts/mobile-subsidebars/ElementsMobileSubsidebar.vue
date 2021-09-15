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
            VDropdown
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-loader' }">VLoader</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-placeload' }"
            >VPlaceload</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-placeload-text' }"
            >VPlaceloadText</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-placeload-avatar' }"
            >VPlaceloadAvatar</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-message' }"> VMessage </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-modal' }">VModal</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-progress' }">
            VProgress
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-tooltip' }"> VTootlip </RouterLink>
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
                VButton
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'elements-action' }" class="is-submenu">
                VAction
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'elements-icon-button' }"
                class="is-submenu"
              >
                VIconButton
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
                VControl
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'elements-field' }" class="is-submenu">
                VField
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
                VAnimatedCheckbox
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
                VCheckbox
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'elements-radio' }" class="is-submenu">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VRadio
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
                VSwitchBlock
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
                VSwitchSegment
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
                VCalendar &amp; VDatePicker
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
                VIMaskInput
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
                VFilePond
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
                VCreditCard
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
@import '../../scss/layout/_sidebar-mobile.scss';
</style>
