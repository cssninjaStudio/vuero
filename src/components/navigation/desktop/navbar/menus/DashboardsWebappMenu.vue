<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref<'dashboards' | 'templates'>('dashboards')
</script>

<template>
  <div id="dashboards-webapp-menu" class="webapp-subnavbar-inner tabs-wrapper">
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
        id="dashboard-pages-tab"
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
                    <RouterLink :to="{ name: 'webapp-dashboards-personal-1' }">
                      <i class="lnil lnil-analytics-alt-1"></i>
                      <span>Personal V1</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-personal-2' }">
                      <i class="lnil lnil-pie-chart"></i>
                      <span>Personal V2</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-personal-3' }">
                      <i class="lnil lnil-stats-up"></i>
                      <span>Personal V3</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-lifestyle-1' }">
                      <i class="lnil lnil-cardiology"></i>
                      <span>Influencer</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-lifestyle-2' }">
                      <i class="lnil lnil-cloud-sun"></i>
                      <span>Hobbies</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-lifestyle-3' }">
                      <i class="lnil lnil-hospital-alt-3"></i>
                      <span>Health</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-lifestyle-4' }">
                      <i class="lnil lnil-books"></i>
                      <span>Writer</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Finance</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-finance-1' }">
                      <i class="lnil lnil-analytics-alt-1"></i>
                      <span>Analytics</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-finance-2' }">
                      <i class="lnil lnil-stats-up"></i>
                      <span>Stocks</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-finance-3' }">
                      <i class="lnil lnil-credit-card"></i>
                      <span>Sales</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-banking-1' }">
                      <i class="lnil lnil-bank"></i>
                      <span>Banking V1</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-banking-2' }">
                      <i class="lnil lnil-bank"></i>
                      <span>Banking V2</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-banking-3' }">
                      <i class="lnil lnil-bank"></i>
                      <span>Banking V3</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Business</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-business-1' }">
                      <i class="lnil lnil-plane-alt"></i>
                      <span>Flights Booking</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-business-2' }">
                      <i class="lnil lnil-apartment"></i>
                      <span>Company Board</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-business-3' }">
                      <i class="lnil lnil-users-alt"></i>
                      <span>HR Board</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-ecommerce-1' }">
                      <i class="lnil lnil-cart"></i>
                      <span>Ecommerce V1</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Apps</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-apps-1' }">
                      <i class="lnil lnil-pizza"></i>
                      <span>Food Delivery</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-apps-2' }">
                      <i class="lnil lnil-envelope"></i>
                      <span>Inbox</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'admin-messaging-chat' }">
                      <i class="lnil lnil-bubble"></i>
                      <span>Messaging V1</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-messaging-chat' }">
                      <i class="lnil lnil-bubble"></i>
                      <span>Messaging V2</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="templates-pages-tab"
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
                    <RouterLink :to="{ name: 'admin-blank-page-1' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Regular Sidebar</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'admin-blank-page-2' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Curved Sidebar</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'admin-blank-page-3' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Colored Sidebar</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'admin-blank-page-4' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Curved Colored</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Navbars</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'webapp-blank-page-1' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Regular Navbar</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-blank-page-2' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Fading Navbar</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-blank-page-3' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Colored Navbar</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-blank-page-4' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Drop Navbar</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-blank-page-5' }">
                      <i class="lnil lnil-layout"></i>
                      <span>Colored Drop</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Widgets</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-charts-apex' }">
                      <i class="lnil lnil-pie-chart-alt"></i>
                      <span>Apex Charts</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'webapp-dashboards-charts-billboardjs' }"
                    >
                      <i class="lnil lnil-bar-chart"></i>
                      <span>Billboard JS</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-dashboards-widgets-ui' }">
                      <i class="lnil lnil-layout-alt-1"></i>
                      <span>UI Widgets</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'webapp-dashboards-widgets-creative' }"
                    >
                      <i class="lnil lnil-layout-alt-2"></i>
                      <span>Creative Widgets</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'webapp-dashboards-widgets-list' }"
                    >
                      <i class="lnil lnil-layout-alt-1"></i>
                      <span>List Widgets</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'webapp-dashboards-widgets-stats' }"
                    >
                      <i class="lnil lnil-layout-alt-1"></i>
                      <span>Stat Widgets</span>
                      <Icon icon="feather:circle" />
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
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-form-layouts-1' }">
                      <span>Form V1</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-form-layouts-2' }">
                      <span>Form V2</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-form-layouts-3' }">
                      <span>Form V3</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'webapp-form-layouts-4' }">
                      <span>Form V4</span>
                      <Icon icon="feather:circle" />
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
