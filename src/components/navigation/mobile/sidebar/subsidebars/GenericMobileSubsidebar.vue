<script setup lang="ts">
import { isMobileSidebarOpen } from '/@src/composition/state/ui/mobileSidebarState'
import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'
</script>

<template>
  <div
    :class="[isMobileSidebarOpen && activeSidebar === 'home' && 'is-active']"
    class="mobile-subsidebar"
  >
    <div class="inner">
      <div class="sidebar-title">
        <h3>Dashboards</h3>
      </div>

      <ul class="submenu" data-simplebar>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Personal <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-personal-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-analytics-alt-1"></i>
                <span>Personal V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-personal-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-pie-chart"></i>
                <span>Personal V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-personal-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-stats-up"></i>
                <span>Personal V3</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Finance <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-finance-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-analytics-alt-1"></i>
                <span>Analytics Dashboard</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-finance-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-stats-up"></i>
                <span>Stocks Dashboard</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-finance-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-credit-card"></i>
                <span>Sales Dashboard</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Banking <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-banking-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-bank"></i>
                <span>Banking V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-banking-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-bank"></i>
                <span>Banking V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-banking-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-bank"></i>
                <span>Banking V3</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Business <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-business-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-plane-alt"></i>
                <span>Flights Booking</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-business-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-apartment"></i>
                <span>Company Board</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-business-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-users-alt"></i>
                <span>HR Board</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Lifestyle <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-lifestyle-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-cardiology"></i>
                <span>Influencer</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-lifestyle-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-cloud-sun"></i>
                <span>Hobbies</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-lifestyle-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-hospital-alt-3"></i>
                <span>Health</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-lifestyle-4' }"
                class="is-submenu"
              >
                <i class="lnil lnil-books"></i>
                <span>Writer</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Ecommerce <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-ecommerce-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-cart"></i>
                <span>Ecommerce V1</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Apps <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-apps-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-pizza"></i>
                <span>Food Delivery</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-apps-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-envelope"></i>
                <span>Inbox</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-messaging-chat' }"
                class="is-submenu"
              >
                <i class="lnil lnil-bubble"></i>
                <span>Messaging V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'webapp-messaging-chat' }"
                class="is-submenu"
              >
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
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Charts <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-charts-apex' }"
                class="is-submenu"
              >
                <i class="lnil lnil-pie-chart-alt"></i>
                <span>Apex Charts</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="is-submenu"
                :to="{ name: 'admin-dashboards-charts-billboardsjs' }"
              >
                <i class="lnil lnil-bar-chart"></i>
                <span>Billboard JS</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Widgets <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-widgets-ui' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>UI Widgets</span>
              </RouterLink>
            </li>
            <li>
              <a
                class="is-submenu"
                :to="{ name: 'admin-dashboards-widgets-creative' }"
              >
                <i class="lnil lnil-layout-alt-2"></i>
                <span>Creative Widgets</span>
              </a>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-widgets-list' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>List Widgets</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-dashboards-widgets-stats' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-2"></i>
                <span>Stat Widgets</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Form Layouts <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-form-layouts-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-passport"></i>
                <span>Form Layout V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-form-layouts-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-passport"></i>
                <span>Form Layout V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-form-layouts-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-passport"></i>
                <span>Form Layout V3</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-form-layouts-4' }"
                class="is-submenu"
              >
                <i class="lnil lnil-passport"></i>
                <span>Form Layout V4</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li v-has-children class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Starters <Icon icon="feather:chevron-right"
            /></a>
          </div>
          <ul>
            <li>
              <RouterLink
                :to="{ name: 'admin-blank-page-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout"></i>
                <span>Regular Sidebar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-blank-page-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout"></i>
                <span>Curved Sidebar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-blank-page-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout"></i>
                <span>Colored Sidebar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'admin-blank-page-4' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout"></i>
                <span>Curved Colored</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'webapp-blank-page-1' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Regular Navbar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'webapp-blank-page-2' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Fading Navbar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'webapp-blank-page-3' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Colored Navbar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'webapp-blank-page-4' }"
                class="is-submenu"
              >
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Dropdown Navbar</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'webapp-blank-page-5' }"
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
@import '../../../../../assets/scss/layout/_sidebar-mobile.scss';
</style>
