<script setup lang="ts">
import useDropdown from '/@src/composition/use/useDropdown'
const { dropdownElement, isOpen, open } = useDropdown()
</script>

<template>
  <div
    ref="dropdownElement"
    :class="[isOpen && 'is-active']"
    class="dropdown is-modern is-spaced dropdown-trigger has-mega-dropdown is-right"
  >
    <div class="is-trigger" aria-haspopup="true" aria-controls="dropdown-menu">
      <button
        class="button h-button is-rounded"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click="open"
      >
        <span>Components</span>
        <span class="caret">
          <Icon icon="feather:chevron-down" />
        </span>
      </button>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div class="category-selector">
          <div class="title-wrap">
            <h4>Select a category</h4>
          </div>
          <div class="category-selector-inner">
            <div data-category="components-base-menu" class="category-item">
              <i class="lnil lnil-laptop-alt-switch"></i>
              <span>UI Elements</span>
            </div>
            <div data-category="components-plugins-menu" class="category-item">
              <i class="lnil lnil-plug"></i>
              <span>Plugins</span>
            </div>

            <img
              class="placeholder-image light-image"
              src="/@images/illustrations/components/icons.svg"
              alt=""
            />
            <img
              class="placeholder-image dark-image"
              src="/@images/illustrations/components/icons-dark.svg"
              alt=""
            />
          </div>
        </div>

        <div class="content-wrap is-hidden">
          <button class="button is-circle back-button">
            <span class="icon is-small">
              <Icon icon="feather:arrow-left" />
            </span>
          </button>

          <div
            id="components-base-menu"
            class="columns is-gapless mega-menus is-active"
          >
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-info">
                  <Icon icon="feather:circle" />
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
                      <span>Avatars</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-accordion-basic' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Accordion</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-accordion-collapse' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Collapse</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-accordion-images' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Images</span>
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
                      <span>Breadcrumb</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-green">
                  <Icon icon="feather:circle" />
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
                      <span>Loader</span>
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
                      <span>Dropdown</span>
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
                      <span>Modal Dialogs</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-tabs-regular' }"
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
                    :to="{ name: 'components-tabs-slider' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-switch"></i>
                    </div>
                    <div class="meta">
                      <span>Slider Tabs</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-orange">
                  <Icon icon="feather:circle" />
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
                      <span>Icon Box</span>
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
                      <span>Message</span>
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
                      <span>Progress</span>
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
                      <span>Snacks</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-table-flex' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Base Table</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-table-flex-compact' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Compact Table</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-table-flex-media' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Media Table</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-table-flex-advanced' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Advanced Table</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <div
            id="components-plugins-menu"
            class="columns is-gapless mega-menus"
          >
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-purple">
                  <Icon icon="feather:circle" />
                  <span>Plugins</span>
                </h4>

                <div class="column-content">
                  <RouterLink
                    :to="{ name: 'components-plugins-alertify' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Alertify</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-autocomplete' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Autocomplete</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-datepicker' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Datepicker</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-choices' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Choices JS</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-secondary">
                  <Icon icon="feather:circle" />
                  <span>Plugins</span>
                </h4>

                <div class="column-content">
                  <RouterLink
                    :to="{ name: 'components-plugins-filepond' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Filepond</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-lightgallery' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Light Gallery</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-videogallery' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Video Gallery</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-video-player' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Video Player</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-success">
                  <Icon icon="feather:circle" />
                  <span>Plugins</span>
                </h4>

                <div class="column-content">
                  <RouterLink
                    :to="{ name: 'components-plugins-toasts' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Toast Messages</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-webuipopover' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>WebUI Popover</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-nouislider' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>NoUI Slider</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-editor-summernote' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Summernote</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'components-plugins-editor-sun' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Sun Editor</span>
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
