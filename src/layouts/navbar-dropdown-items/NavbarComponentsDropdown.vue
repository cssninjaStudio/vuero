<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const dropdownElement = ref()
const selectedCategory = ref('')
const route = useRoute()

watch([() => route.fullPath, dropdownElement], () => {
  if (dropdownElement.value) {
    dropdownElement.value.close?.()
  }
})
</script>

<template>
  <V-Dropdown
    ref="dropdownElement"
    class="has-mega-dropdown"
    modern
    spaced
    right
  >
    <template #button="{ toggle }">
      <div
        class="dropdown-trigger is-trigger"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <V-Button
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          icon-caret="feather:chevron-down"
          rounded
          @click="toggle"
        >
          Components
        </V-Button>
      </div>
    </template>

    <template #content>
      <div
        class="category-selector"
        :class="[selectedCategory !== '' && 'is-hidden']"
      >
        <div class="title-wrap">
          <h4>Select a category</h4>
        </div>
        <div class="category-selector-inner">
          <!-- Display Item -->
          <div class="category-item" @click="selectedCategory = 'display'">
            <i aria-hidden="true" class="lnil lnil-boarding-pass-alt"></i>
            <span>Display</span>
          </div>
          <!-- Layout Item -->
          <div class="category-item" @click="selectedCategory = 'layout'">
            <i aria-hidden="true" class="lnil lnil-scaling"></i>
            <span>Layout</span>
          </div>
          <!-- Plugins Item -->
          <div class="category-item" @click="selectedCategory = 'plugins'">
            <i aria-hidden="true" class="lnil lnil-plug"></i>
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
        <!--Back button-->
        <button
          class="button is-circle back-button"
          @click="selectedCategory = ''"
        >
          <span class="icon is-small">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:arrow-left"
            ></i>
          </span>
        </button>

        <!--Display-->
        <div
          :class="[selectedCategory === 'display' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Display/General-->
          <div class="column is-6">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-info">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                <span>General</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  :to="{ name: 'components' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-home"></i>
                  </div>
                  <div class="meta">
                    <span>Components Hub</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-content' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout"></i>
                  </div>
                  <div class="meta">
                    <span>Content</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-table' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Table</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Display/Display-->
          <div class="column is-6">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-orange">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                <span>Display</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  :to="{ name: 'components-avatar' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-user-alt"></i>
                  </div>
                  <div class="meta">
                    <span>V-Avatar</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'components-avatar-stack' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-users-alt"></i>
                  </div>
                  <div class="meta">
                    <span>V-AvatarStack</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-block' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-keyboard"></i>
                  </div>
                  <div class="meta">
                    <span>V-Block</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-icon-box' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-round-box-minus"></i>
                  </div>
                  <div class="meta">
                    <span>V-IconBox</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-icon-wrap' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-circle-minus"></i>
                  </div>
                  <div class="meta">
                    <span>V-IconWrap</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-snack' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-bookmark-alt"></i>
                  </div>
                  <div class="meta">
                    <span>V-Snack</span>
                    <V-Tag
                      label="v1.1"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-tag' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-tag"></i>
                  </div>
                  <div class="meta">
                    <span>V-Tag</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!--Layout-->
        <div
          :class="[selectedCategory === 'layout' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Layout/Layout-->
          <div class="column is-6">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-info">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                <span>Layout</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  :to="{ name: 'components-accordion' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-slideshow"></i>
                  </div>
                  <div class="meta">
                    <span>V-Accordion</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-accordion-image' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-slideshow"></i>
                  </div>
                  <div class="meta">
                    <span>V-AccordionImage</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-breadcrumb' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-more"></i>
                  </div>
                  <div class="meta">
                    <span>V-Breadcrumb</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-collapse' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-slideshow"></i>
                  </div>
                  <div class="meta">
                    <span>V-Collapse</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-flex-pagination' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-more"></i>
                  </div>
                  <div class="meta">
                    <span>V-FlexPagination</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-flex-table' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-table"></i>
                  </div>
                  <div class="meta">
                    <span>V-FlexTable</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-placeholder-page' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-question-circle"></i>
                  </div>
                  <div class="meta">
                    <span>V-PlaceholderPage</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-placeholder-section' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-question-circle"></i>
                  </div>
                  <div class="meta">
                    <span>V-PlaceholderSection</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-tabs' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-list-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>V-Tabs</span>

                    <V-Tag
                      label="v1.1"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Layout/Cards-->
          <div class="column is-6">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-green">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                <span>Cards</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  :to="{ name: 'components-card' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt"></i>
                  </div>
                  <div class="meta">
                    <span>V-Card</span>
                    <V-Tag
                      label="v1.1"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-card-action' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
                  </div>
                  <div class="meta">
                    <span>V-CardAction</span>
                    <V-Tag
                      label="v1.1"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-card-advanced' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout"></i>
                  </div>
                  <div class="meta">
                    <span>V-CardAdvanced</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-card-media' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-image"></i>
                  </div>
                  <div class="meta">
                    <span>V-CardMedia</span>
                    <V-Tag
                      label="v1.1"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'components-card-social' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>V-CardSocial</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!--Plugins-->
        <div
          :class="[selectedCategory === 'plugins' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Plugins/Plugins-->
          <div class="column is-12">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-green">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                <span>Plugins</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  :to="{ name: 'components-plugins-notif' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-plug"></i>
                  </div>
                  <div class="meta">
                    <span>Notif</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-plugins-tippy' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-plug"></i>
                  </div>
                  <div class="meta">
                    <span>Tippy</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-plugins-billboard-js' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-plug"></i>
                  </div>
                  <div class="meta">
                    <span>V-BillboardJS</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-plugins-photos-swipe' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-plug"></i>
                  </div>
                  <div class="meta">
                    <span>V-PhotosSwipe</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-plugins-plyr' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-plug"></i>
                  </div>
                  <div class="meta">
                    <span>V-Plyr</span>
                  </div>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'components-plugins-simple-datatables' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-plug"></i>
                  </div>
                  <div class="meta">
                    <span>V-SimpleDatatables</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </V-Dropdown>
</template>
