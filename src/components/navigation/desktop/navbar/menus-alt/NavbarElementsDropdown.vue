<script lang="ts">
import { defineComponent } from 'vue'

const NavbarElementsDropdown = defineComponent({
  name: 'NavbarElementsDropdown',
  components: {},
  setup() {
    // NavbarElementsDropdown - Composition API

    return {}
  },
})

export default NavbarElementsDropdown
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
        <span>Elements</span>
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
            <div data-category="elements-base-menu" class="category-item">
              <i class="lnil lnil-laptop-alt-switch"></i>
              <span>UI Elements</span>
            </div>
            <div data-category="elements-forms-menu" class="category-item">
              <i class="lnil lnil-checkmark-circle"></i>
              <span>Forms</span>
            </div>

            <img
              class="placeholder-image light-image"
              src="/assets/img/illustrations/components/buttons.svg"
              alt=""
            />
            <img
              class="placeholder-image dark-image"
              src="/assets/img/illustrations/components/buttons-dark.svg"
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
            id="elements-base-menu"
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
                  <a href="/elements-hub.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-home"></i>
                    </div>
                    <div class="meta">
                      <span>Elements Hub</span>
                    </div>
                  </a>
                  <a
                    href="/elements-colors.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-color-palette"></i>
                    </div>
                    <div class="meta">
                      <span>Colors</span>
                    </div>
                  </a>
                  <a
                    href="/elements-helpers.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-help"></i>
                    </div>
                    <div class="meta">
                      <span>Helpers</span>
                    </div>
                  </a>
                  <a
                    href="/elements-icons-lnil.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-flag"></i>
                    </div>
                    <div class="meta">
                      <span>Line Icons L</span>
                    </div>
                  </a>
                  <a
                    href="/elements-icons-lnir.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-flag"></i>
                    </div>
                    <div class="meta">
                      <span>Line Icons R</span>
                    </div>
                  </a>
                  <a
                    href="/elements-icons-fa.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-flag"></i>
                    </div>
                    <div class="meta">
                      <span>Font Awesome</span>
                    </div>
                  </a>
                  <a
                    href="/elements-icons-feather.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-flag"></i>
                    </div>
                    <div class="meta">
                      <span>Feather Icons</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-green">
                  <Icon icon="feather:circle" />
                  <span>Basic UI</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/elements-buttons.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Buttons</span>
                    </div>
                  </a>
                  <a
                    href="/elements-blocks.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-scaling"></i>
                    </div>
                    <div class="meta">
                      <span>Blocks</span>
                    </div>
                  </a>
                  <a
                    href="/elements-content.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Content</span>
                    </div>
                  </a>
                  <a href="/elements-tags.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-bookmark-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Tags</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-orange">
                  <Icon icon="feather:circle" />
                  <span>Advanced UI</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/elements-cards-basic.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Basic Cards</span>
                    </div>
                  </a>
                  <a
                    href="/elements-cards-advanced.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Advanced Cards</span>
                    </div>
                  </a>
                  <a
                    href="/elements-cards-bulma.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Bulma Cards</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-list-datatable-4.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Table</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-list-datatable-4.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Tooltips</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="elements-forms-menu" class="columns is-gapless mega-menus">
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-purple">
                  <Icon icon="feather:circle" />
                  <span>Inputs</span>
                </h4>

                <div class="column-content">
                  <a
                    href="/elements-forms-inputs.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-font"></i>
                    </div>
                    <div class="meta">
                      <span>Inputs</span>
                    </div>
                  </a>
                  <a
                    href="/elements-forms-addons.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-font"></i>
                    </div>
                    <div class="meta">
                      <span>Input Addons</span>
                    </div>
                  </a>
                  <a
                    href="/elements-forms-textarea.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-font"></i>
                    </div>
                    <div class="meta">
                      <span>Textarea</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-secondary">
                  <Icon icon="feather:circle" />
                  <span>Selects</span>
                </h4>

                <div class="column-content">
                  <a
                    href="/elements-forms-selects.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-pointer-top"></i>
                    </div>
                    <div class="meta">
                      <span>Regular</span>
                    </div>
                  </a>
                  <a
                    href="/elements-forms-custom.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-pointer-top"></i>
                    </div>
                    <div class="meta">
                      <span>Custom</span>
                    </div>
                  </a>
                  <a
                    href="/elements-forms-file.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-upload"></i>
                    </div>
                    <div class="meta">
                      <span>File Input</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-success">
                  <Icon icon="feather:circle" />
                  <span>Toggles</span>
                </h4>

                <div class="column-content">
                  <a
                    href="/elements-forms-checkboxes.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-round-box-check"></i>
                    </div>
                    <div class="meta">
                      <span>Checkboxes</span>
                    </div>
                  </a>
                  <a
                    href="/elements-forms-radios.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-checkmark-circle"></i>
                    </div>
                    <div class="meta">
                      <span>Radio Buttons</span>
                    </div>
                  </a>
                  <a
                    href="/elements-forms-switch.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-screw"></i>
                    </div>
                    <div class="meta">
                      <span>Switch</span>
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