<script setup lang="ts">
import { activeSidebar } from '/@src/state/activeSidebarState'
</script>

<template>
  <div
    id="home-sidebar"
    :class="[activeSidebar === 'home' && 'is-active']"
    class="sidebar-panel is-generic"
  >
    <div class="subpanel-header">
      <ProjectsQuickDropdown />

      <h3 class="no-mb">Dashboards</h3>
      <div class="panel-close" @click="activeSidebar = 'none'">
        <i class="iconify" data-icon="feather:x"></i>
      </div>
    </div>
    <div class="inner" data-simplebar>
      <ul>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Personal <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards' }"
                class="is-submenu"
              >
                <i class="lnil lnil-analytics-alt-1"></i>
                <span>Personal V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-personal-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-pie-chart"></i>
                <span>Personal V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-personal-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-stats-up"></i>
                <span>Personal V3</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Finance <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-analytics' }"
                class="is-submenu"
              >
                <i class="lnil lnil-analytics-alt-1"></i>
                <span>Analytics Dashboard</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-stocks' }"
                class="is-submenu"
              >
                <i class="lnil lnil-stats-up"></i>
                <span>Stocks Dashboard</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-sales' }"
                class="is-submenu"
              >
                <i class="lnil lnil-credit-card"></i>
                <span>Sales Dashboard</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Banking <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-banking-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-bank"></i>
                <span>Banking V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-banking-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-bank"></i>
                <span>Banking V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-banking-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-bank"></i>
                <span>Banking V3</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Business <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-flights' }"
                class="is-submenu"
              >
                <i class="lnil lnil-plane-alt"></i>
                <span>Flights Booking</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-company' }"
                class="is-submenu"
              >
                <i class="lnil lnil-apartment"></i>
                <span>Company Board</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-human-ressources' }"
                class="is-submenu"
              >
                <i class="lnil lnil-users-alt"></i>
                <span>HR Board</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-course' }"
                class="is-submenu"
              >
                <i class="lnil lnil-graduate"></i>
                <span>Course Dashboard</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Lifestyle <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-influencer' }"
                class="is-submenu"
              >
                <i class="lnil lnil-cardiology"></i>
                <span>Influencer</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-hobbies' }"
                class="is-submenu"
              >
                <i class="lnil lnil-cloud-sun"></i>
                <span>Hobbies</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-health' }"
                class="is-submenu"
              >
                <i class="lnil lnil-hospital-alt-3"></i>
                <span>Health</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-writer' }"
                class="is-submenu"
              >
                <i class="lnil lnil-books"></i>
                <span>Writer</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-video' }"
                class="is-submenu"
              >
                <i class="lnil lnil-video-alt-1"></i>
                <span>Video</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Ecommerce <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-ecommerce-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-cart"></i>
                <span>Ecommerce V1</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Apps <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-food-delivery' }"
                class="is-submenu"
              >
                <i class="lnil lnil-pizza"></i>
                <span>Food Delivery</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'inbox' }" class="is-submenu">
                <i class="lnil lnil-envelope"></i>
                <span>Inbox</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'messaging-v1' }" class="is-submenu">
                <i class="lnil lnil-bubble"></i>
                <span>Messaging V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'messaging-v2' }" class="is-submenu">
                <i class="lnil lnil-bubble"></i>
                <span>Messaging V2</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="divider"></li>
        <li>
          <RouterLink :to="{ name: 'wizard-v1' }">Wizard</RouterLink>
        </li>
        <li class="divider"></li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Charts <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-charts-apex' }"
                class="is-submenu"
              >
                <i class="lnil lnil-pie-chart-alt"></i>
                <span>Apex Charts</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="is-submenu"
                :to="{ name: 'sidebar-dashboards-charts-billboardsjs' }"
              >
                <i class="lnil lnil-bar-chart"></i>
                <span>Billboard JS</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Widgets <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-widgets-sample-ui' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>UI Widgets</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="is-submenu"
                :to="{ name: 'sidebar-dashboards-widgets-sample-creative' }"
              >
                <i class="lnil lnil-layout-alt-2"></i>
                <span>Creative Widgets</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-widgets-sample-list' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>List Widgets</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-dashboards-widgets-sample-stats' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-2"></i>
                <span>Stat Widgets</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link"
              >Starters <i class="iconify" data-icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-layouts-blank-page-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout"></i>
                <span>Regular Sidebar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-layouts-blank-page-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout"></i>
                <span>Curved Sidebar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-layouts-blank-page-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout"></i>
                <span>Colored Sidebar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-layouts-blank-page-4' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout"></i>
                <span>Curved Colored</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'navbar-layouts-blank-page-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Regular Navbar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'navbar-layouts-blank-page-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Fading Navbar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'navbar-layouts-blank-page-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Colored Navbar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'navbar-layouts-blank-page-4' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Dropdown Navbar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'navbar-layouts-blank-page-5' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Colored Dropdown</span>
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../../assets/scss/layout/_sidebar-panel.scss';
</style>
