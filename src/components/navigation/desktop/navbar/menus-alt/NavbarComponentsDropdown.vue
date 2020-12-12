<script lang="ts">
import { defineComponent } from 'vue'

const NavbarComponentsDropdown = defineComponent({
  name: 'NavbarComponentsDropdown',
  components: {},
  setup() {
    // NavbarComponentsDropdown - Composition API

    return {}
  },
})

export default NavbarComponentsDropdown
</script>

<template>
  <div
    class="dropdown is-modern is-spaced dropdown-trigger has-mega-dropdown is-right"
  >
    <div class="is-trigger" aria-haspopup="true" aria-controls="dropdown-menu">
      <button
        class="button h-button is-rounded"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <span>Components</span>
        <span class="caret">
          <i data-feather="chevron-down"></i>
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
              src="/assets/img/illustrations/components/icons.svg"
              alt=""
            />
            <img
              class="placeholder-image dark-image"
              src="/assets/img/illustrations/components/icons-dark.svg"
              alt=""
            />
          </div>
        </div>

        <div class="content-wrap is-hidden">
          <button class="button is-circle back-button">
            <span class="icon is-small">
              <i data-feather="arrow-left"></i>
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
                  <i data-feather="circle"></i>
                  <span>General</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/components-avatars.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-user-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Avatars</span>
                    </div>
                  </a>
                  <a
                    href="/components-accordion-basic.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Accordion</span>
                    </div>
                  </a>
                  <a
                    href="/components-accordion-collapse.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Collapse</span>
                    </div>
                  </a>
                  <a
                    href="/components-accordion-images.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Images</span>
                    </div>
                  </a>
                  <a
                    href="/components-breadcrumb.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-air"></i>
                    </div>
                    <div class="meta">
                      <span>Breadcrumb</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-green">
                  <i data-feather="circle"></i>
                  <span>Interaction</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/components-loader.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-reload"></i>
                    </div>
                    <div class="meta">
                      <span>Loader</span>
                    </div>
                  </a>
                  <a
                    href="/components-dropdown.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-scaling"></i>
                    </div>
                    <div class="meta">
                      <span>Dropdown</span>
                    </div>
                  </a>
                  <a
                    href="/components-modal.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-scaling"></i>
                    </div>
                    <div class="meta">
                      <span>Modal Dialogs</span>
                    </div>
                  </a>
                  <a
                    href="/components-tabs-regular.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-switch"></i>
                    </div>
                    <div class="meta">
                      <span>Regular Tabs</span>
                    </div>
                  </a>
                  <a
                    href="/components-tabs-slider.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-switch"></i>
                    </div>
                    <div class="meta">
                      <span>Slider Tabs</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-orange">
                  <i data-feather="circle"></i>
                  <span>Presentation</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/components-icon-box.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Icon Box</span>
                    </div>
                  </a>
                  <a
                    href="/components-messages.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bubble"></i>
                    </div>
                    <div class="meta">
                      <span>Message</span>
                    </div>
                  </a>
                  <a
                    href="/components-progress.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-line-double"></i>
                    </div>
                    <div class="meta">
                      <span>Progress</span>
                    </div>
                  </a>
                  <a
                    href="/components-snacks.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-cupcake"></i>
                    </div>
                    <div class="meta">
                      <span>Snacks</span>
                    </div>
                  </a>
                  <a
                    href="/components-table-flex.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Base Table</span>
                    </div>
                  </a>
                  <a
                    href="/components-table-flex-compact.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Compact Table</span>
                    </div>
                  </a>
                  <a
                    href="/components-table-flex-media.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Media Table</span>
                    </div>
                  </a>
                  <a
                    href="/components-table-flex-advanced.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Advanced Table</span>
                    </div>
                  </a>
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
                  <i data-feather="circle"></i>
                  <span>Plugins</span>
                </h4>

                <div class="column-content">
                  <a
                    href="/components-plugins-alertify.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Alertify</span>
                    </div>
                  </a>
                  <a
                    href="/components-plugins-autocomplete.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Autocomplete</span>
                    </div>
                  </a>
                  <a
                    href="/components-plugins-datepicker.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Datepicker</span>
                    </div>
                  </a>
                  <a
                    href="/components-plugins-choices.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Choices JS</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-secondary">
                  <i data-feather="circle"></i>
                  <span>Plugins</span>
                </h4>

                <div class="column-content">
                  <a
                    href="/components-plugins-filepond.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Filepond</span>
                    </div>
                  </a>
                  <a
                    href="/components-plugins-lightgallery.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Light Gallery</span>
                    </div>
                  </a>
                  <a
                    href="/components-plugins-videogallery.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Video Gallery</span>
                    </div>
                  </a>
                  <a
                    href="/components-plugins-video-player.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Video Player</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-success">
                  <i data-feather="circle"></i>
                  <span>Plugins</span>
                </h4>

                <div class="column-content">
                  <a
                    href="/components-plugins-toasts.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Toast Messages</span>
                    </div>
                  </a>
                  <a
                    href="/components-plugins-webuipopover.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>WebUI Popover</span>
                    </div>
                  </a>
                  <a
                    href="/components-plugins-nouislider.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>NoUI Slider</span>
                    </div>
                  </a>
                  <a
                    href="/components-plugins-editor-summernote.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Summernote</span>
                    </div>
                  </a>
                  <a
                    href="/components-plugins-editor-sun.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-html5"></i>
                    </div>
                    <div class="meta">
                      <span>Sun Editor</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>