<script setup lang="ts">
import { ref } from 'vue'

type TabId = 'display' | 'display' | 'plugins'
const activeTab = ref<TabId>('display')
</script>

<template>
  <div class="navbar-subnavbar-inner tabs-wrapper">
    <div class="tabs-inner">
      <div class="tabs is-centered is-4">
        <ul>
          <li :class="[activeTab === 'display' && 'is-active']">
            <a @click="activeTab = 'display'">Display</a>
          </li>
          <li :class="[activeTab === 'layout' && 'is-active']">
            <a @click="activeTab = 'layout'">Layout</a>
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
                    <RouterLink :to="{ name: 'components' }">
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
                    <RouterLink :to="{ name: 'components-content' }">
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
                    <RouterLink :to="{ name: 'components-table' }">
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
                    <RouterLink :to="{ name: 'components-avatar' }">
                      <span>V-Avatar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-avatar-stack' }">
                      <span>V-AvatarStack</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-block' }">
                      <span>V-Block</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-icon-box' }">
                      <span>V-IconBox</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-icon-wrap' }">
                      <span>V-IconWrap</span>
                      <V-Tag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-snack' }">
                      <span>V-Snack</span>
                      <V-Tag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-tag' }">
                      <span>V-Tag</span>
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
                    <RouterLink :to="{ name: 'components-plugins-notif' }">
                      <span>Notif</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-tippy' }">
                      <span>Tippy</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-billboard-js' }"
                    >
                      <span>V-BillboardJS</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-photos-swipe' }"
                    >
                      <span>V-PhotosSwipe</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-plugins-plyr' }">
                      <span>V-Plyr</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-plugins-simple-datatables' }"
                    >
                      <span>V-SimpleDatatables</span>
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
                  <img
                    class="light-image"
                    src="/images/icons/misc/buoy.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/images/icons/misc/buoy-dark.svg"
                    alt=""
                  />
                  <h3>Support</h3>
                </a>
                <a
                  href="https://docs.cssninja.io/vuero"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="/images/icons/misc/docs.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/images/icons/misc/docs-dark.svg"
                    alt=""
                  />
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
                    <RouterLink :to="{ name: 'components-breadcrumb' }">
                      <span>V-Breadcrumb</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-tabs' }">
                      <span>V-Tabs</span>
                      <V-Tag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-flex-pagination' }">
                      <span>V-FlexPagination</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-flex-table' }">
                      <span>V-FlexTable</span>
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
                    <RouterLink :to="{ name: 'components-accordion' }">
                      <span>V-Accordion</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-collapse' }">
                      <span>V-Collapse</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-accordion-image' }">
                      <span>V-AccordionImage</span>
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
                    <RouterLink :to="{ name: 'components-card' }">
                      <span>V-Card</span>
                      <V-Tag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-card-action' }">
                      <span>V-CardAction</span>
                      <V-Tag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-card-advanced' }">
                      <span>V-CardAdvanced</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-card-media' }">
                      <span>V-CardMedia</span>
                      <V-Tag label="v1.1" color="primary" outlined curved />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'components-card-social' }">
                      <span>V-CardSocial</span>
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
                    <RouterLink :to="{ name: 'components-placeholder-page' }">
                      <span>V-PlaceholderPage</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'components-placeholder-section' }"
                    >
                      <span>V-PlaceholderSection</span>
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
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
@import '../../scss/layout/_navbar.scss';
@import '../../scss/layout/_responsive.scss';
</style>
