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
        <span>Elements</span>
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
            <div class="category-item" @click="selectedCategory = 'forms'">
              <i class="lnil lnil-checkmark-circle"></i>
              <span>Forms</span>
            </div>

            <img
              class="placeholder-image light-image"
              src="/@src/assets/illustrations/components/buttons.svg"
              alt=""
            />
            <img
              class="placeholder-image dark-image"
              src="/@src/assets/illustrations/components/buttons-dark.svg"
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
            id="elements-base-menu"
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
                    :to="{ name: 'elements' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-home"></i>
                    </div>
                    <div class="meta">
                      <span>Elements Hub</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-colors' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-color-palette"></i>
                    </div>
                    <div class="meta">
                      <span>Colors</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-helpers' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-help"></i>
                    </div>
                    <div class="meta">
                      <span>Helpers</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-icons-line-icons' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-flag"></i>
                    </div>
                    <div class="meta">
                      <span>Line Icons L</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-icons-line-icons-regular' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-flag"></i>
                    </div>
                    <div class="meta">
                      <span>Line Icons R</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-icons-fa' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-flag"></i>
                    </div>
                    <div class="meta">
                      <span>Font Awesome</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-icons-iconify' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-flag"></i>
                    </div>
                    <div class="meta">
                      <span>Iconify</span>
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
                  <span>Basic UI</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <RouterLink
                    :to="{ name: 'elements-buttons' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Buttons</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-content' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Content</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-tags' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bookmark-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Tags</span>
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
                  <span>Advanced UI</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <RouterLink
                    :to="{ name: 'elements-cards-basic' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Cards</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'navbar-layouts-list-datatable-4' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Table</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-tabs-regular' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-switch"></i>
                    </div>
                    <div class="meta">
                      <span>Regular Tabs</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-tabs-slider' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-switch"></i>
                    </div>
                    <div class="meta">
                      <span>Slider Tabs</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'navbar-layouts-list-datatable-4' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Tooltips</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <div
            id="elements-forms-menu"
            :class="[selectedCategory === 'forms' && 'is-active']"
            class="columns is-gapless mega-menus"
          >
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-purple">
                  <i class="iconify" data-icon="feather:circle"></i>
                  <span>Inputs</span>
                </h4>

                <div class="column-content">
                  <RouterLink
                    :to="{ name: 'elements-forms-inputs' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-font"></i>
                    </div>
                    <div class="meta">
                      <span>Inputs</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-forms-addons' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-font"></i>
                    </div>
                    <div class="meta">
                      <span>Input Addons</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-forms-textarea' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-font"></i>
                    </div>
                    <div class="meta">
                      <span>Textarea</span>
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
                  <span>Selects</span>
                </h4>

                <div class="column-content">
                  <RouterLink
                    :to="{ name: 'elements-forms-selects' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-pointer-top"></i>
                    </div>
                    <div class="meta">
                      <span>Regular</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-forms-file' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-upload"></i>
                    </div>
                    <div class="meta">
                      <span>File Input</span>
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
                  <span>Toggles</span>
                </h4>

                <div class="column-content">
                  <RouterLink
                    :to="{ name: 'elements-forms-checkboxes' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-round-box-check"></i>
                    </div>
                    <div class="meta">
                      <span>Checkboxes</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-forms-radios' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-checkmark-circle"></i>
                    </div>
                    <div class="meta">
                      <span>Radio Buttons</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'elements-forms-switch' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-screw"></i>
                    </div>
                    <div class="meta">
                      <span>Switch</span>
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
