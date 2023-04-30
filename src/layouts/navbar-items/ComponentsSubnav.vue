<script setup lang="ts">
type TabId = 'display' | 'layout'
const activeTab = ref<TabId>('display')
</script>

<template>
  <div class="navbar-subnavbar-inner tabs-wrapper">
    <div class="tabs-inner">
      <div class="tabs is-centered is-4">
        <ul>
          <li :class="[activeTab === 'display' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'display'"
              @click="activeTab = 'display'"
              >Display</a
            >
          </li>
          <li :class="[activeTab === 'layout' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'layout'"
              @click="activeTab = 'layout'"
              >Layout</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div v-if="activeTab === 'display'" class="tab-content is-active">
        <div class="tab-content-inner">
          <div class="center">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">General</h4>
                <ul>
                  <li>
                    <RouterLink to="/components/">
                      <i aria-hidden="true" class="lnil lnil-home"></i>
                      <span>Components Hub</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/content">
                      <i aria-hidden="true" class="lnil lnil-text-format"></i>
                      <span>Content</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/table">
                      <i aria-hidden="true" class="lnil lnil-table"></i>
                      <span>Table</span>
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
                <h4 class="column-heading">Display</h4>
                <ul>
                  <li>
                    <RouterLink to="/components/avatar/">
                      <span>VAvatar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/avatar/stack">
                      <span>VAvatarStack</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/block">
                      <span>VBlock</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/icon-box">
                      <span>VIconBox</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/icon-wrap">
                      <span>VIconWrap</span>
                      <VTag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/snack">
                      <span>VSnack</span>
                      <VTag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/tag">
                      <span>VTag</span>
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
                <h4 class="column-heading">Plugins</h4>
                <ul>
                  <li>
                    <RouterLink to="/components/plugins/notif">
                      <span>Notif</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/plugins/tippy">
                      <span>Tippy</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/plugins/billboard-js">
                      <span>VBillboardJS</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/plugins/photos-swipe">
                      <span>VPhotosSwipe</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/plugins/plyr">
                      <span>VPlyr</span>
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
                <a href="https://cssninja.io" class="column-placeholder">
                  <img class="light-image" src="/images/icons/misc/buoy.svg" alt="" />
                  <img class="dark-image" src="/images/icons/misc/buoy-dark.svg" alt="" />
                  <h3>Support</h3>
                </a>
                <a href="https://docs.cssninja.io/vuero" class="column-placeholder">
                  <img class="light-image" src="/images/icons/misc/docs.svg" alt="" />
                  <img class="dark-image" src="/images/icons/misc/docs-dark.svg" alt="" />
                  <h3>Documentation</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'layout'" class="tab-content is-active">
        <div class="tab-content-inner">
          <div class="center">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">General</h4>
                <ul>
                  <li>
                    <RouterLink to="/components/flex">
                      <span>VFlex <small>& VFlexItem</small></span>
                      <VTag label="v2.0" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/grid">
                      <span>VGrid <small>& VGridItem</small></span>
                      <VTag label="v2.0" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/breadcrumb">
                      <span>VBreadcrumb</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/tabs">
                      <span>VTabs</span>
                      <VTag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/pagination">
                      <span>VFlexPagination</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/markdown-preview">
                      <span>VMarkdownPreview</span>
                      <VTag label="v2.6" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/flextable/">
                      <span>VFlexTable</span>
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
                <h4 class="column-heading">Accordions</h4>
                <ul>
                  <li>
                    <RouterLink to="/components/accordion/">
                      <span>VAccordion</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/collapse">
                      <span>VCollapse</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/accordion/image">
                      <span>VAccordionImage</span>
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
                <h4 class="column-heading">Cards</h4>
                <ul>
                  <li>
                    <RouterLink to="/components/card/">
                      <span>VCard</span>
                      <VTag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/card/action">
                      <span>VCardAction</span>
                      <VTag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/card/advanced">
                      <span>VCardAdvanced</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/card/media">
                      <span>VCardMedia</span>
                      <VTag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/card/social">
                      <span>VCardSocial</span>
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
                <h4 class="column-heading">Placeholders</h4>
                <ul>
                  <li>
                    <RouterLink to="/components/placeholder-page">
                      <span>VPlaceholderPage</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/components/placeholder-section">
                      <span>VPlaceholderSection</span>
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
