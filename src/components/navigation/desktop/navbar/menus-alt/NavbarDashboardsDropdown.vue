<script setup lang="ts">
import { ref } from 'vue'
import useDropdown from '/@src/composable/useDropdown'
const { dropdownElement, isOpen, toggle } = useDropdown()
const selectedCategory = ref('')
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
        @click="toggle"
      >
        <span>Dashboards</span>
        <span class="caret">
          <i class="iconify" data-icon="feather:chevron-down"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div
          class="category-selector"
          :class="[selectedCategory !== '' && 'is-hidden']"
        >
          <div class="title-wrap">
            <h4>Select a category</h4>
          </div>
          <div class="category-selector-inner">
            <div class="category-item" @click="selectedCategory = 'base'">
              <i class="lnil lnil-layout"></i>
              <span>Dashboards</span>
            </div>
            <div class="category-item" @click="selectedCategory = 'extras'">
              <i class="lnil lnil-grid-alt"></i>
              <span>Templates</span>
            </div>

            <img
              class="placeholder-image light-image"
              src="/@src/assets/illustrations/components/plugins.svg"
              alt=""
            />
            <img
              class="placeholder-image dark-image"
              src="/@src/assets/illustrations/components/plugins-dark.svg"
              alt=""
            />
          </div>
        </div>

        <div
          class="content-wrap"
          :class="[selectedCategory === '' && 'is-hidden']"
        >
          <button
            class="button is-circle back-button"
            @click="selectedCategory = ''"
          >
            <span class="icon is-small">
              <i class="iconify" data-icon="feather:arrow-left"></i>
            </span>
          </button>

          <div
            id="dashboards-base-menu"
            :class="[selectedCategory === 'base' && 'is-active']"
            class="columns is-gapless mega-menus"
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
                    :to="{ name: 'navbar-dashboards' }"
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
                    :to="{ name: 'navbar-dashboards-personal-2' }"
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
                    :to="{ name: 'navbar-dashboards-personal-3' }"
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
                    :to="{ name: 'navbar-dashboards-influencer' }"
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
                    :to="{ name: 'navbar-dashboards-hobbies' }"
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
                    :to="{ name: 'navbar-dashboards-health' }"
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
                    :to="{ name: 'navbar-dashboards-writer' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-books"></i>
                    </div>
                    <div class="meta">
                      <span>Writer</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'navbar-dashboards-video' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-video-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Video</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-info">
                  <i class="iconify is-vhidden" data-icon="feather:circle"></i>
                  <span class="is-vhidden">All Dashboards</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <RouterLink
                    :to="{ name: 'navbar-dashboards-analytics' }"
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
                    :to="{ name: 'navbar-dashboards-stocks' }"
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
                    :to="{ name: 'navbar-dashboards-sales' }"
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
                    :to="{ name: 'navbar-dashboards-banking-1' }"
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
                    :to="{ name: 'navbar-dashboards-banking-2' }"
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
                    :to="{ name: 'navbar-dashboards-banking-3' }"
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
                    :to="{ name: 'navbar-dashboards-flights' }"
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
                    :to="{ name: 'navbar-dashboards-company' }"
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
                    :to="{ name: 'navbar-dashboards-human-ressources' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-users-alt"></i>
                    </div>
                    <div class="meta">
                      <span>HR Board</span>
                    </div>
                  </RouterLink>
                  <RouterLink
                    :to="{ name: 'navbar-dashboards-course' }"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-graduate"></i>
                    </div>
                    <div class="meta">
                      <span>Course Board</span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-info">
                  <i class="iconify is-vhidden" data-icon="feather:circle"></i>
                  <span class="is-vhidden">All Dashboards</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <RouterLink
                    :to="{ name: 'navbar-dashboards-ecommerce-1' }"
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
                    :to="{ name: 'navbar-dashboards-food-delivery' }"
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
            :class="[selectedCategory === 'extras' && 'is-active']"
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
                    :to="{ name: 'sidebar-layouts-blank-page-1' }"
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
                    :to="{ name: 'sidebar-layouts-blank-page-2' }"
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
                    :to="{ name: 'sidebar-layouts-blank-page-3' }"
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
                    :to="{ name: 'sidebar-layouts-blank-page-4' }"
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
                    :to="{ name: 'navbar-layouts-blank-page-1' }"
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
                    :to="{ name: 'navbar-layouts-blank-page-2' }"
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
                    :to="{ name: 'navbar-layouts-blank-page-3' }"
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
                    :to="{ name: 'navbar-layouts-blank-page-4' }"
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
                    :to="{ name: 'navbar-dashboards-charts-apex' }"
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
                    :to="{ name: 'navbar-dashboards-charts-billboardsjs' }"
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
                    :to="{ name: 'navbar-dashboards-widgets-sample-ui' }"
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
                    :to="{ name: 'navbar-dashboards-widgets-sample-creative' }"
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
                    :to="{ name: 'navbar-dashboards-widgets-sample-list' }"
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
                    :to="{ name: 'navbar-dashboards-widgets-sample-stats' }"
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
                    :to="{ name: 'navbar-layouts-form-layouts-1' }"
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
                    :to="{ name: 'navbar-layouts-form-layouts-2' }"
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
                    :to="{ name: 'navbar-layouts-form-layouts-3' }"
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
                    :to="{ name: 'navbar-layouts-form-layouts-4' }"
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
