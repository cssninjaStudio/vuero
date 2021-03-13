<script setup lang="ts">
import { ref } from 'vue'
import useDropdown from '/@src/composable/useDropdown'
const { dropdownElement, isOpen, toggle } = useDropdown()
const selectedCategory = ref('')
</script>

<template>
  <div
    ref="dropdownElement"
    :class="[isOpen && 'is-active']"
    class="dropdown is-modern is-spaced dropdown-trigger has-mega-dropdown is-right"
  >
    <div class="is-trigger" aria-haspopup="true" aria-controls="dropdown-menu">
      <button
        class="button v-button is-rounded"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click="toggle"
      >
        <span>Components</span>
        <span class="caret">
          <i class="iconify" data-icon="feather:chevron-down"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div
          class="category-selector"
          :class="[selectedCategory !== '' && 'is-hidden']"
        >
          <div class="title-wrap">
            <h4>Select a category</h4>
          </div>
          <div class="category-selector-inner">
            <div class="category-item" @click="selectedCategory = 'base'">
              <i class="lnil lnil-laptop-alt-switch"></i>
              <span>UI Elements</span>
            </div>
            <div class="category-item" @click="selectedCategory = 'plugins'">
              <i class="lnil lnil-plug"></i>
              <span>Plugins</span>
            </div>

            <img
              class="placeholder-image light-image"
              src="/@src/assets/illustrations/components/icons.svg"
              alt=""
            />
            <img
              class="placeholder-image dark-image"
              src="/@src/assets/illustrations/components/icons-dark.svg"
              alt=""
            />
          </div>
        </div>

        <div
          class="content-wrap"
          :class="[selectedCategory === '' && 'is-hidden']"
        >
          <button
            class="button is-circle back-button"
            @click="selectedCategory = ''"
          >
            <span class="icon is-small">
              <i class="iconify" data-icon="feather:arrow-left"></i>
            </span>
          </button>

          <div
            id="components-base-menu"
            :class="[selectedCategory === 'base' && 'is-active']"
            class="columns is-gapless mega-menus"
          >
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-info">
                  <i class="iconify" data-icon="feather:circle"></i>
                  <span>General</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <RouterLink
                    :to="{ name: 'components-avatars' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-user-alt"></i>
                    </div>
                    <div class="meta">
                      <span>V-Avatar</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-accordion' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>V-Accordion</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-collapse' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>V-Collapse</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-accordion-image' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>V-ImageAccordion</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-block' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-air"></i>
                    </div>
                    <div class="meta">
                      <span>V-Block</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-breadcrumb' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-air"></i>
                    </div>
                    <div class="meta">
                      <span>V-Breadcrumb</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-button' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-air"></i>
                    </div>
                    <div class="meta">
                      <span>V-Button</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-green">
                  <i class="iconify" data-icon="feather:circle"></i>
                  <span>Interaction</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <RouterLink
                    :to="{ name: 'components-loader' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-reload"></i>
                    </div>
                    <div class="meta">
                      <span>V-Loader</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-dropdown' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-scaling"></i>
                    </div>
                    <div class="meta">
                      <span>V-Dropdown</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-modal' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-scaling"></i>
                    </div>
                    <div class="meta">
                      <span>V-Modal</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-orange">
                  <i class="iconify" data-icon="feather:circle"></i>
                  <span>Presentation</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <RouterLink
                    :to="{ name: 'components-icon-box' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>V-IconBox</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-messages' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bubble"></i>
                    </div>
                    <div class="meta">
                      <span>V-Message</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-progress' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-line-double"></i>
                    </div>
                    <div class="meta">
                      <span>V-Progress</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-tag' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-cupcake"></i>
                    </div>
                    <div class="meta">
                      <span>V-Tag</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-snacks' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-cupcake"></i>
                    </div>
                    <div class="meta">
                      <span>V-Snack</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-flex-table' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>V-FlexTable Base</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-flex-table-compact' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>V-FlexTable Compact</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-flex-table-media' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>V-FlexTable Media</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-flex-table-advanced' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>V-FlexTable Advanced</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <div
            id="components-plugins-menu"
            :class="[selectedCategory === 'plugins' && 'is-active']"
            class="columns is-gapless mega-menus"
          >
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-purple">
                  <i class="iconify" data-icon="feather:circle"></i>
                  <span>Plugins</span>
                </h4>

                <div class="column-content">
                  <RouterLink
                    :to="{ name: 'components-plugins-simple-datatables' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>V-Datatable</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-v-calendar' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>V-Calendar</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-secondary">
                  <i class="iconify" data-icon="feather:circle"></i>
                  <span>Plugins</span>
                </h4>

                <div class="column-content">
                  <RouterLink
                    :to="{ name: 'components-plugins-notif' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Notyf</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-photo-swipe' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Photo Swipe</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-vue-plyr' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Vue-Plyr</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-success">
                  <i class="iconify" data-icon="feather:circle"></i>
                  <span>Plugins</span>
                </h4>

                <div class="column-content">
                  <RouterLink
                    :to="{ name: 'components-plugins-vue-multiselect' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Vue-Multiselect</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-vue-slider' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Vue-Slider</span>
                    </div>
                  </RouterLink>

                  <RouterLink
                    :to="{ name: 'components-plugins-vue-tippy' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>V-Tippy</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-ckeditor' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>CKEditor</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
