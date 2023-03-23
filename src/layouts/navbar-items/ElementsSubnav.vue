<script setup lang="ts">
type TabId = 'interaction' | 'advanced'
const activeTab = ref<TabId>('interaction')
</script>

<template>
  <div class="navbar-subnavbar-inner tabs-wrapper">
    <div class="tabs-inner">
      <div class="tabs is-centered is-4">
        <ul>
          <li :class="[activeTab === 'interaction' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'interaction'"
              @click="activeTab = 'interaction'"
              >Interaction</a
            >
          </li>
          <li :class="[activeTab === 'advanced' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'advanced'"
              @click="activeTab = 'advanced'"
              >Advanced</a
            >
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
                    <RouterLink to="/elements/">
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
                    <RouterLink to="/elements/colors">
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
                    <RouterLink to="/elements/helpers">
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
                    <RouterLink to="/elements/icons/iconify">
                      <span>Iconify</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/icons/line-icons-light">
                      <span>Line Icons Light</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/icons/line-icons-regular">
                      <span>Line Icons Regular</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/icons/font-awesome">
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
                    <RouterLink to="/elements/loader">
                      <span>VLoader</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/placeload/">
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
                    <RouterLink to="/elements/placeload/text">
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
                    <RouterLink to="/elements/placeload/avatar">
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
                    <RouterLink to="/elements/dropdown">
                      <span>VDropdown</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/message">
                      <span>VMessage</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/modal">
                      <span>VModal</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/progress">
                      <span>VProgress</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/tooltip">
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
                    <RouterLink to="/elements/button">
                      <span>VButton</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/action">
                      <span>VAction</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/icon-button">
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
                <h4 class="column-heading">
                  <span>Forms</span>
                  <VTag
                    label="v2.3"
                    color="primary"
                    size="tiny"
                    class="ml-2"
                    outlined
                    curved
                  />
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/elements/forms/inputs">
                      <span>VInput</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/forms/textarea">
                      <span>VTextarea</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/forms/selects">
                      <span>VSelect</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <!-- <li>
                    <RouterLink to="/elements/forms/addons">
                      <span>Input Addons</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li> -->
                  <li>
                    <RouterLink to="/elements/forms/file">
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
                <div class="column-heading">&nbsp;</div>
                <ul>
                  <li>
                    <RouterLink to="/elements/forms/field">
                      <span>VField</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/forms/control">
                      <span>VControl</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/checkbox">
                      <span>VCheckbox</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/radio">
                      <span>VRadio</span>
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
                    <RouterLink to="/elements/animated-checkbox">
                      <span>VAnimatedCheckbox</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/switch-block">
                      <span>VSwitchBlock</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/switch-segment">
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
                    <RouterLink to="/elements/addons/calendar">
                      <span>VCalendar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/addons/imask-input">
                      <span>VIMaskInput</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/addons/filepond">
                      <span>VFilePond</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/addons/vueform-multiselect">
                      <span>@vueform/multiselect</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/addons/vueform-slider">
                      <span>@vueform/slider</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/elements/addons/ckeditor">
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
@import '/@src/scss/abstracts/all';
@import '/@src/scss/layout/navbar';
@import '/@src/scss/layout/responsive';
</style>
