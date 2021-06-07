<template>
  <div class="mobile-subsidebar is-activity">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Components</h3>
      </div>

      <ul class="submenu">
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
          <RouterLink :to="{ name: 'components-avatar' }">V-Avatar</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-avatar-stack' }">
            V-AvatarStack
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-block' }">V-Block</RouterLink>
        </li>

        <li>
          <RouterLink :to="{ name: 'components-icon-box' }">
            V-IconBox
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-icon-wrap' }">
            V-IconWrap
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-snack' }"> V-Snack </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-tag' }">V-Tag</RouterLink>
        </li>

        <li class="divider with-label">
          <span class="divider-label">Layout</span>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-breadcrumb' }">
            V-Breadcrumb
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-tabs' }"> V-Tabs </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-flex-pagination' }">
            V-FlexPagination
          </RouterLink>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link">
              V-FlexTable
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
                V-Accordion
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
                V-Collapse
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
                V-AccordionImage
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
                V-Card
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
                V-CardAction
                <V-Tag label="v1.1" color="primary" outlined curved />
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
                V-CardAdvanced
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
                V-CardMedia
                <V-Tag label="v1.1" color="primary" outlined curved />
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
                V-CardSocial
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
                V-PlaceholderPage
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
                V-PlaceholderSection
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
                V-BillboardJS
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
                V-PhotosSwipe
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
                V-Plyr
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
                V-SimpleDatatables
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/layout/_sidebar-mobile.scss';
</style>
