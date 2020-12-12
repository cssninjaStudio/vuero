<script lang="ts">
import { defineComponent } from 'vue'

const NavbarDashboardsDropdown = defineComponent({
  name: 'NavbarDashboardsDropdown',
  components: {},
  setup() {
    // NavbarDashboardsDropdown - Composition API

    return {}
  },
})

export default NavbarDashboardsDropdown
</script>
  
<template>
  <div class="dropdown is-modern is-spaced dropdown-trigger has-mega-dropdown">
    <div class="is-trigger" aria-haspopup="true" aria-controls="dropdown-menu">
      <button
        class="button h-button is-rounded"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <span>Dashboards</span>
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
              src="/assets/img/illustrations/components/plugins.svg"
              alt=""
            />
            <img
              class="placeholder-image dark-image"
              src="/assets/img/illustrations/components/plugins-dark.svg"
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
            id="dashboards-base-menu"
            class="columns is-gapless mega-menus is-active"
          >
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-info">
                  <i data-feather="circle"></i>
                  <span>All Dashboards</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/webapp-dashboards-personal-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-analytics-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Personal V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-personal-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-pie-chart"></i>
                    </div>
                    <div class="meta">
                      <span>Personal V2</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-personal-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-stats-up"></i>
                    </div>
                    <div class="meta">
                      <span>Personal V3</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-lifestyle-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-cardiology"></i>
                    </div>
                    <div class="meta">
                      <span>Influencer</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-lifestyle-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-apartment"></i>
                    </div>
                    <div class="meta">
                      <span>Hobbies</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-lifestyle-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-hospital-alt-3"></i>
                    </div>
                    <div class="meta">
                      <span>Health</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-lifestyle-4.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-books"></i>
                    </div>
                    <div class="meta">
                      <span>Writer</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-info">
                  <i data-feather="circle" class="is-vhidden"></i>
                  <span class="is-vhidden">All Dashboards</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/webapp-dashboards-finance-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-analytics-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Analytics</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-finance-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-stats-up"></i>
                    </div>
                    <div class="meta">
                      <span>Stocks</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-finance-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-credit-card"></i>
                    </div>
                    <div class="meta">
                      <span>Sales</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-banking-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bank"></i>
                    </div>
                    <div class="meta">
                      <span>Banking V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-banking-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bank"></i>
                    </div>
                    <div class="meta">
                      <span>Banking V2</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-banking-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bank"></i>
                    </div>
                    <div class="meta">
                      <span>Banking V3</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-business-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-plane-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Flights Booking</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-business-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-apartment"></i>
                    </div>
                    <div class="meta">
                      <span>Company Board</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-business-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-users-alt"></i>
                    </div>
                    <div class="meta">
                      <span>HR Board</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column is-4">
              <div class="dropdown-item-group">
                <h4 class="column-heading is-info">
                  <i data-feather="circle" class="is-vhidden"></i>
                  <span class="is-vhidden">All Dashboards</span>
                </h4>

                <div class="column-content" data-simplebar>
                  <a
                    href="/webapp-dashboards-ecommerce-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-cart"></i>
                    </div>
                    <div class="meta">
                      <span>Ecommerce V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-apps-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-pizza"></i>
                    </div>
                    <div class="meta">
                      <span>Food delivery</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-apps-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-envelope"></i>
                    </div>
                    <div class="meta">
                      <span>Inbox</span>
                    </div>
                  </a>
                  <a
                    href="/admin-messaging-chat.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bubble"></i>
                    </div>
                    <div class="meta">
                      <span>Messaging V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-messaging-chat.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bubble"></i>
                    </div>
                    <div class="meta">
                      <span>Messaging V2</span>
                    </div>
                  </a>
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
                  <i data-feather="circle"></i>
                  <span>Navigation</span>
                </h4>

                <div class="column-content" data-simplebar="">
                  <a
                    href="admin-blank-page-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Sidebar</span>
                    </div>
                  </a>
                  <a
                    href="admin-blank-page-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Curved Sidebar</span>
                    </div>
                  </a>
                  <a
                    href="admin-blank-page-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Colored Sidebar</span>
                    </div>
                  </a>
                  <a
                    href="admin-blank-page-4.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Curved Colored</span>
                    </div>
                  </a>
                  <a
                    href="webapp-blank-page-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt-2"></i>
                    </div>
                    <div class="meta">
                      <span>Navbar</span>
                    </div>
                  </a>
                  <a
                    href="webapp-blank-page-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout"></i>
                    </div>
                    <div class="meta">
                      <span>Navbar Colored</span>
                    </div>
                  </a>
                  <a
                    href="webapp-blank-page-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Navbar Drop</span>
                    </div>
                  </a>
                  <a
                    href="webapp-blank-page-4.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layout-alt-2"></i>
                    </div>
                    <div class="meta">
                      <span>Colored Drop</span>
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
                  <span>Widgets</span>
                </h4>

                <div class="column-content" data-simplebar="">
                  <a
                    href="/webapp-dashboards-charts-apex.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-pie-chart-alt"></i>
                    </div>
                    <div class="meta">
                      <span>Apex Charts</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-charts-billboardjs.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-bar-chart"></i>
                    </div>
                    <div class="meta">
                      <span>Billboard JS</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-widgets-ui.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-select"></i>
                    </div>
                    <div class="meta">
                      <span>UI Widgets</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-widgets-creative.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-layers-alt-1"></i>
                    </div>
                    <div class="meta">
                      <span>Fancy Widgets</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-widgets-list.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-select"></i>
                    </div>
                    <div class="meta">
                      <span>List Widgets</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-dashboards-widgets-stats.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-select"></i>
                    </div>
                    <div class="meta">
                      <span>Stat Widgets</span>
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
                  <span>Forms</span>
                </h4>

                <div class="column-content">
                  <a href="/wizard-v1.html" class="dropdown-item is-media">
                    <div class="icon">
                      <i class="lnil lnil-timer"></i>
                    </div>
                    <div class="meta">
                      <span>Wizard V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-form-layouts-1.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-licencse"></i>
                    </div>
                    <div class="meta">
                      <span>Layout V1</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-form-layouts-2.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-licencse"></i>
                    </div>
                    <div class="meta">
                      <span>Layout V2</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-form-layouts-3.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-licencse"></i>
                    </div>
                    <div class="meta">
                      <span>Layout V3</span>
                    </div>
                  </a>
                  <a
                    href="/webapp-form-layouts-4.html"
                    class="dropdown-item is-media"
                  >
                    <div class="icon">
                      <i class="lnil lnil-licencse"></i>
                    </div>
                    <div class="meta">
                      <span>Layout V4</span>
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