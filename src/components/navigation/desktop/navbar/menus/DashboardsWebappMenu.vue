<script setup lang="ts">
import { ref } from 'vue'
import { activeSubnav } from '/@src/state/navbarState'

type TabId = 'dashboards' | 'templates'
const activeTab = ref<TabId>('dashboards')
</script>

<template>
  <div
    :class="[activeSubnav === 'home' && 'is-active']"
    class="navbar-subnavbar-inner tabs-wrapper"
  >
    <div class="tabs-inner">
      <div class="tabs is-centered is-3">
        <ul>
          <li :class="[activeTab === 'dashboards' && 'is-active']">
            <a @click="activeTab = 'dashboards'">Dashboards</a>
          </li>
          <li :class="[activeTab === 'templates' && 'is-active']">
            <a @click="activeTab = 'templates'">Templates</a>
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
                <h4 class="column-heading">Personal</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards' }">
                      <i class="lnil lnil-analytics-alt-1"></i>
                      <span>Personal V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-personal-2' }">
                      <i class="lnil lnil-pie-chart"></i>
                      <span>Personal V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-personal-3' }">
                      <i class="lnil lnil-stats-up"></i>
                      <span>Personal V3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-hobbies' }">
                      <i class="lnil lnil-cloud-sun"></i>
                      <span>Hobbies</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-health' }">
                      <i class="lnil lnil-hospital-alt-3"></i>
                      <span>Health</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-writer' }">
                      <i class="lnil lnil-books"></i>
                      <span>Writer</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Finance</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-analytics' }">
                      <i class="lnil lnil-analytics-alt-1"></i>
                      <span>Analytics</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-stocks' }">
                      <i class="lnil lnil-stats-up"></i>
                      <span>Stocks</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-sales' }">
                      <i class="lnil lnil-credit-card"></i>
                      <span>Sales</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-banking-1' }">
                      <i class="lnil lnil-bank"></i>
                      <span>Banking V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-banking-2' }">
                      <i class="lnil lnil-bank"></i>
                      <span>Banking V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-banking-3' }">
                      <i class="lnil lnil-bank"></i>
                      <span>Banking V3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Business</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-influencer' }">
                      <i class="lnil lnil-cardiology"></i>
                      <span>Influencer</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-flights' }">
                      <i class="lnil lnil-plane-alt"></i>
                      <span>Flights Booking</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-company' }">
                      <i class="lnil lnil-apartment"></i>
                      <span>Company Board</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'navbar-dashboards-human-ressources' }"
                    >
                      <i class="lnil lnil-users-alt"></i>
                      <span>HR Board</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-course' }">
                      <i class="lnil lnil-graduate"></i>
                      <span>Course Board</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-ecommerce-1' }">
                      <i class="lnil lnil-cart"></i>
                      <span>Ecommerce V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Apps</h4>
                <ul>
                  <li>
                    <RouterLink
                      :to="{ name: 'navbar-dashboards-food-delivery' }"
                    >
                      <i class="lnil lnil-pizza"></i>
                      <span>Food Delivery</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'inbox' }">
                      <i class="lnil lnil-envelope"></i>
                      <span>Inbox</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'messaging-v1' }">
                      <i class="lnil lnil-bubble"></i>
                      <span>Messaging V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'messaging-v2' }">
                      <i class="lnil lnil-bubble"></i>
                      <span>Messaging V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
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
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Sidebars</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'sidebar-layouts-blank-page-1' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Regular Sidebar</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'sidebar-layouts-blank-page-2' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Curved Sidebar</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'sidebar-layouts-blank-page-3' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Colored Sidebar</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'sidebar-layouts-blank-page-4' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Curved Colored</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Navbars</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'navbar-layouts-blank-page-1' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Regular Navbar</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-layouts-blank-page-2' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Fading Navbar</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-layouts-blank-page-3' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Colored Navbar</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-layouts-blank-page-4' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Drop Navbar</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-layouts-blank-page-5' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Colored Drop</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Widgets</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'navbar-dashboards-charts-apex' }">
                      <i class="lnil lnil-pie-chart-alt"></i>
                      <span>Apex Charts</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'navbar-dashboards-charts-billboardsjs' }"
                    >
                      <i class="lnil lnil-bar-chart"></i>
                      <span>Billboard JS</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'navbar-dashboards-widgets-sample-ui' }"
                    >
                      <i class="lnil lnil-layout-alt-1"></i>
                      <span>UI Widgets</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{
                        name: 'navbar-dashboards-widgets-sample-creative',
                      }"
                    >
                      <i class="lnil lnil-layout-alt-2"></i>
                      <span>Creative Widgets</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'navbar-dashboards-widgets-sample-list' }"
                    >
                      <i class="lnil lnil-layout-alt-1"></i>
                      <span>List Widgets</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'navbar-dashboards-widgets-sample-stats' }"
                    >
                      <i class="lnil lnil-layout-alt-1"></i>
                      <span>Stat Widgets</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Wizard</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'wizard-v1' }">
                      <span>Wizard V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-layouts-form-layouts-1' }">
                      <span>Form V1</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-layouts-form-layouts-2' }">
                      <span>Form V2</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-layouts-form-layouts-3' }">
                      <span>Form V3</span>
                      <i class="iconify" data-icon="feather:circle"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'navbar-layouts-form-layouts-4' }">
                      <span>Form V4</span>
                      <i class="iconify" data-icon="feather:circle"></i>
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
@import '../../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../../assets/scss/abstracts/_mixins.scss';
@import '../../../../../assets/scss/layout/_navbar.scss';
@import '../../../../../assets/scss/layout/_responsive.scss';
</style>
