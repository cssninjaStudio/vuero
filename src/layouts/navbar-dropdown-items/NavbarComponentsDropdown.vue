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
  <VDropdown
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
        <VButton
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          icon-caret="feather:chevron-down"
          rounded
          @click="toggle"
        >
          Components
        </VButton>
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
                    <span>VAvatar</span>
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
                    <span>VAvatarStack</span>
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
                    <span>VBlock</span>
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
                    <span>VIconBox</span>
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
                    <span>VIconWrap</span>
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
                    <span>VSnack</span>
                    <VTag
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
                    <span>VTag</span>
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
                  :to="{ name: 'components-flex' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
                  </div>
                  <div class="meta">
                    <span>VFlex <small>& VFlexItem</small></span>

                    <VTag
                      label="v2.0"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'components-grid' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                  </div>
                  <div class="meta">
                    <span>VGrid <small>& VGridItem</small></span>

                    <VTag
                      label="v2.0"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'components-accordion' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-slideshow"></i>
                  </div>
                  <div class="meta">
                    <span>VAccordion</span>
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
                    <span>VAccordionImage</span>
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
                    <span>VBreadcrumb</span>
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
                    <span>VCollapse</span>
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
                    <span>VFlexPagination</span>
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
                    <span>VFlexTable</span>
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
                    <span>VPlaceholderPage</span>
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
                    <span>VPlaceholderSection</span>
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
                    <span>VTabs</span>

                    <VTag
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
                    <span>VCard</span>
                    <VTag
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
                    <span>VCardAction</span>
                    <VTag
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
                    <span>VCardAdvanced</span>
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
                    <span>VCardMedia</span>
                    <VTag
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
                    <span>VCardSocial</span>
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
                    <span>VBillboardJS</span>
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
                    <span>VPhotosSwipe</span>
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
                    <span>VPlyr</span>
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
                    <span>VSimpleDatatables</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </VDropdown>
</template>
