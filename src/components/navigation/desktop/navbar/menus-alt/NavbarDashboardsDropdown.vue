<script setup lang="ts">
import useDropdown from '/@src/composition/use/useDropdown'
const { dropdownElement, isOpen, open } = useDropdown()
</script>

<template>
  <div
    ref="dropdownElement"
    :class="[isOpen && 'is-active']"
    class="dropdown is-modern is-spaced dropdown-trigger has-mega-dropdown"
  >
    <div class="is-trigger" aria-haspopup="true" aria-controls="dropdown-menu">
      <button
        class="button v-button is-rounded"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click="open"
      >
        <span>Dashboards</span>
        <span class="caret">
          <i class="iconify" data-icon="feather:chevron-down"></i>
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
            <div data-category="dashboards-base-menu" class="category-item">
              <i class="lnil lnil-layout"></i>
              <span>Dashboards</span>
            </div>
            <div data-category="dashboards-extras-menu" class="category-item">
              <i class="lnil lnil-grid-alt"></i>
              <span>Templates</span>
            </div>

            <img
              class="placeholder-image light-image"
              src="/images/illustrations/components/plugins.svg"
              alt=""
            />
            <img
              class="placeholder-image dark-image"
              src="/images/illustrations/components/plugins-dark.svg"
              alt=""
            />
          </div>
        </div>

        <div class="content-wrap is-hidden">
          <button class="button is-circle back-button">
            <span class="icon is-small">
              <i class="iconify" data-icon="feather:arrow-left"></i>
            </span>
          </button>

          <div
            id="dashboards-base-menu"
            class="columns is-gapless mega-menus is-active"
          >
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-info">
                  <i class="iconify" data-icon="feather:circle"></i>
                  <span>All Dashboards</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-analytics-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Personal V1</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-personal-2' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-pie-chart"></i>
                    </div>
                    <div class="meta">
                      <span>Personal V2</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-personal-3' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-stats-up"></i>
                    </div>
                    <div class="meta">
                      <span>Personal V3</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-influencer' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-cardiology"></i>
                    </div>
                    <div class="meta">
                      <span>Influencer</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-hobbies' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-apartment"></i>
                    </div>
                    <div class="meta">
                      <span>Hobbies</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-health' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-hospital-alt-3"></i>
                    </div>
                    <div class="meta">
                      <span>Health</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-writer' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-books"></i>
                    </div>
                    <div class="meta">
                      <span>Writer</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-info">
                  <i class="iconify is-vhidden" data-icon="circle"></i>
                  <span class="is-vhidden">All Dashboards</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-analytics' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-analytics-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Analytics</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-stocks' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-stats-up"></i>
                    </div>
                    <div class="meta">
                      <span>Stocks</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-sales' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-credit-card"></i>
                    </div>
                    <div class="meta">
                      <span>Sales</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-banking-1' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bank"></i>
                    </div>
                    <div class="meta">
                      <span>Banking V1</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-banking-2' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bank"></i>
                    </div>
                    <div class="meta">
                      <span>Banking V2</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-banking-3' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bank"></i>
                    </div>
                    <div class="meta">
                      <span>Banking V3</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-flights' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-plane-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Flights Booking</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-company' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-apartment"></i>
                    </div>
                    <div class="meta">
                      <span>Company Board</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-human-ressources' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-users-alt"></i>
                    </div>
                    <div class="meta">
                      <span>HR Board</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-info">
                  <i class="iconify is-vhidden" data-icon="circle"></i>
                  <span class="is-vhidden">All Dashboards</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-ecommerce-1' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-cart"></i>
                    </div>
                    <div class="meta">
                      <span>Ecommerce V1</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-food-delivery' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-pizza"></i>
                    </div>
                    <div class="meta">
                      <span>Food delivery</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'inbox' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-envelope"></i>
                    </div>
                    <div class="meta">
                      <span>Inbox</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'messaging-v1' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bubble"></i>
                    </div>
                    <div class="meta">
                      <span>Messaging V1</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'messaging-v2' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bubble"></i>
                    </div>
                    <div class="meta">
                      <span>Messaging V2</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <div
            id="dashboards-extras-menu"
            class="columns is-gapless mega-menus"
          >
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-purple">
                  <i class="iconify" data-icon="feather:circle"></i>
                  <span>Navigation</span>
                </h4>

                <div class="column-content" data-simplebar="">
                  <RouterLink
                    :to="{ name: 'admin-layouts-blank-page-1' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Sidebar</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'admin-layouts-blank-page-2' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Curved Sidebar</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'admin-layouts-blank-page-3' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Colored Sidebar</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'admin-layouts-blank-page-4' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Curved Colored</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-layouts-blank-page-1' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt-2"></i>
                    </div>
                    <div class="meta">
                      <span>Navbar</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-layouts-blank-page-2' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Navbar Colored</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-layouts-blank-page-3' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Navbar Drop</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-layouts-blank-page-4' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt-2"></i>
                    </div>
                    <div class="meta">
                      <span>Colored Drop</span>
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
                  <span>Widgets</span>
                </h4>

                <div class="column-content" data-simplebar="">
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-charts-apex' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-pie-chart-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Apex Charts</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-charts-billboardsjs' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bar-chart"></i>
                    </div>
                    <div class="meta">
                      <span>Billboard JS</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-widgets-sample-ui' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-select"></i>
                    </div>
                    <div class="meta">
                      <span>UI Widgets</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-widgets-sample-creative' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layers-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Fancy Widgets</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-widgets-sample-list' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-select"></i>
                    </div>
                    <div class="meta">
                      <span>List Widgets</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-widgets-sample-stats' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-select"></i>
                    </div>
                    <div class="meta">
                      <span>Stat Widgets</span>
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
                  <span>Forms</span>
                </h4>

                <div class="column-content">
                  <RouterLink
                    :to="{ name: 'wizard-v1' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-timer"></i>
                    </div>
                    <div class="meta">
                      <span>Wizard V1</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-layouts-form-layouts-1' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-licencse"></i>
                    </div>
                    <div class="meta">
                      <span>Layout V1</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-layouts-form-layouts-2' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-licencse"></i>
                    </div>
                    <div class="meta">
                      <span>Layout V2</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-layouts-form-layouts-3' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-licencse"></i>
                    </div>
                    <div class="meta">
                      <span>Layout V3</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'webapp-layouts-form-layouts-4' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-licencse"></i>
                    </div>
                    <div class="meta">
                      <span>Layout V4</span>
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
