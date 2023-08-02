<script setup lang="ts">
type TabId = 'dashboards' | 'templates'
const activeTab = ref<TabId>('dashboards')
</script>

<template>
  <div class="navbar-subnavbar-inner tabs-wrapper">
    <div class="tabs-inner">
      <div class="tabs is-centered is-3">
        <ul>
          <li :class="[activeTab === 'dashboards' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'dashboards'"
              @click="activeTab = 'dashboards'"
            >Dashboards</a>
          </li>
          <li :class="[activeTab === 'templates' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'templates'"
              @click="activeTab = 'templates'"
            >Templates</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div
        class="tab-content"
        :class="[activeTab === 'dashboards' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">
                  Personal
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/dashboards">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-analytics-alt-1"
                      />
                      <span>Personal V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/personal-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-pie-chart"
                      />
                      <span>Personal V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/personal-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-stats-up"
                      />
                      <span>Personal V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/hobbies">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-cloud-sun"
                      />
                      <span>Hobbies</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/health">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-hospital-alt-3"
                      />
                      <span>Health</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/writer">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-books"
                      />
                      <span>Writer</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/soccer">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-tshirt"
                      />
                      <span>Soccer</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  Finance
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/dashboards/analytics">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-analytics-alt-1"
                      />
                      <span>Analytics</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/stocks">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-stats-up"
                      />
                      <span>Stocks</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/sales">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-credit-card"
                      />
                      <span>Sales</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/banking-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-bank"
                      />
                      <span>Banking V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/banking-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-bank"
                      />
                      <span>Banking V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/banking-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-bank"
                      />
                      <span>Banking V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  Business
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/dashboards/influencer">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-cardiology"
                      />
                      <span>Influencer</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/flights">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-plane-alt"
                      />
                      <span>Flights Booking</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/company">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-apartment"
                      />
                      <span>Company Board</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/human-ressources">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-users-alt"
                      />
                      <span>HR Board</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/course">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-graduate"
                      />
                      <span>Course Board</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/ecommerce-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-cart"
                      />
                      <span>Ecommerce V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/jobs">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-briefcase"
                      />
                      <span>Jobs</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  Apps
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/dashboards/food-delivery">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-pizza"
                      />
                      <span>Food Delivery</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="navbar-maps-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-map"
                      />
                      <span>Maps V1</span>
                      <VTag
                        label="v1.2"
                        color="primary"
                        outlined
                        curved
                      />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="navbar-maps-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-map"
                      />
                      <span>Maps V2</span>
                      <VTag
                        label="v1.2"
                        color="primary"
                        outlined
                        curved
                      />
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/inbox">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-envelope"
                      />
                      <span>Inbox</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/messaging-v1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-bubble"
                      />
                      <span>Messaging V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/messaging-v2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-bubble"
                      />
                      <span>Messaging V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="tab-content"
        :class="[activeTab === 'templates' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">
                  Sidebars
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                      <span>Regular Sidebar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                      <span>Curved Sidebar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                      <span>Colored Sidebar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-4">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                      <span>Curved Colored</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-5">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                      <span>Labels Sidebar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-6">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                      <span>Labels Hover Sidebar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/sidebar-blank-page-7">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout"
                      />
                      <span>Float Sidebar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  Navbars
                </h4>
                <ul
                  class="has-slimscroll"
                  simplebar
                >
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-1">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>Regular Navbar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-2">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>Fading Navbar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-3">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>Colored Navbar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-4">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>Drop Navbar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-5">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>Colored Drop</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-6">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>Clean Navbar</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-7">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>Clean Center</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/starters/navbar-blank-page-8">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>Clean Fade</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  Widgets
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/navbar/dashboards/charts-apex">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-pie-chart-alt"
                      />
                      <span>Apex Charts</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/charts-billboardsjs">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-bar-chart"
                      />
                      <span>Billboard JS</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/widgets-sample-ui">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>UI Widgets</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/widgets-sample-creative">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-2"
                      />
                      <span>Creative Widgets</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/widgets-sample-list">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>List Widgets</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/dashboards/widgets-sample-stats">
                      <i
                        aria-hidden="true"
                        class="lnil lnil-layout-alt-1"
                      />
                      <span>Stat Widgets</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">
                  Wizard
                </h4>
                <ul>
                  <li>
                    <RouterLink to="/wizard-v1">
                      <span>Wizard V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/form-layouts-1">
                      <span>Form V1</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/form-layouts-2">
                      <span>Form V2</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/form-layouts-3">
                      <span>Form V3</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/navbar/layouts/form-layouts-4">
                      <span>Form V4</span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      />
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
