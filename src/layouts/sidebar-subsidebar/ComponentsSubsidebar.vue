<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <h3 class="no-mb">Components</h3>
      <div class="panel-close" @click="emit('close')">
        <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
      </div>
    </div>
    <div class="inner" data-simplebar>
      <ul>
        <li>
          <RouterLink :to="{ name: 'components' }">Components Hub</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-content' }">Content</RouterLink>
        </li>

        <li>
          <RouterLink :to="{ name: 'components-table' }">Table</RouterLink>
        </li>

        <li class="divider with-label">
          <span class="divider-label">Display</span>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-avatar' }">VAvatar</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-avatar-stack' }">
            VAvatarStack
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-block' }">VBlock</RouterLink>
        </li>

        <li>
          <RouterLink :to="{ name: 'components-icon-box' }">
            VIconBox
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-icon-wrap' }">
            VIconWrap
            <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-snack' }">
            VSnack <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-tag' }">VTag</RouterLink>
        </li>

        <li class="divider with-label">
          <span class="divider-label">Layout</span>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-flex' }">
            VFlex <small>& VFlexItem</small>
            <VTag label="v2.0" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-grid' }">
            VGrid <small>& VGridItem</small>
            <VTag label="v2.0" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-breadcrumb' }">
            VBreadcrumb
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-tabs' }">
            VTabs <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-flex-pagination' }">
            VFlexPagination
          </RouterLink>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link">
              VFlexTable
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:chevron-right"
              />
            </a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-flex-table' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Base Table
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-flex-table-compact' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Compact Table
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-flex-table-media' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Media Table
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-flex-table-advanced' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Advanced Table</RouterLink
              >
            </li>
          </ul>
        </li>

        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link">
              Accordions
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:chevron-right"
              />
            </a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VAccordion
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-collapse' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VCollapse
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-accordion-image' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VAccordionImage
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link">
              Cards
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:chevron-right"
              />
            </a>
          </div>
          <ul>
            <li>
              <RouterLink :to="{ name: 'components-card' }" class="is-submenu">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VCard
                <VTag label="v1.1" color="primary" outlined curved />
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-card-action' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VCardAction
                <VTag label="v1.1" color="primary" outlined curved />
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-card-advanced' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VCardAdvanced
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-card-media' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VCardMedia
                <VTag label="v1.1" color="primary" outlined curved />
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-card-social' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VCardSocial
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link">
              Placeholders
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:chevron-right"
              />
            </a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-placeholder-page' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VPlaceholderPage
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-placeholder-section' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VPlaceholderSection
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="divider"></li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link">
              Plugins
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:chevron-right"
              />
            </a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-notif' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Notyf
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-tippy' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                Tippy
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-billboard-js' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VBillboardJS
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-photos-swipe' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VPhotosSwipe
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-plyr' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VPlyr
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'components-plugins-simple-datatables' }"
                class="is-submenu"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                VSimpleDatatables
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/layout/_sidebar-panel.scss';
</style>
