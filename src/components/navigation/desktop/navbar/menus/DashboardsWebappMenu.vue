<script lang="ts">
import { defineComponent } from 'vue'

const DashboardsWebappMenu = defineComponent({
  name: 'DashboardsWebappMenu',
  components: {},
  setup() {
    // DashboardsWebappMenu - Composition API

    return {}
  },
})

export default DashboardsWebappMenu
</script>

<template>
  <div id="dashboards-webapp-menu" class="webapp-subnavbar-inner tabs-wrapper">
    <div class="tabs-inner">
      <div class="tabs is-centered is-3">
        <ul>
          <li data-tab="dashboard-pages-tab" class="is-active">
            <a>Dashboards</a>
          </li>
          <li data-tab="templates-pages-tab"><a>Templates</a></li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div id="dashboard-pages-tab" class="tab-content is-active">
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Personal</h4>
                <ul>
                  <li>
                    <a href="/webapp-dashboards-personal-1.html">
                      <i class="lnil lnil-analytics-alt-1"></i>
                      <span>Personal V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-personal-2.html">
                      <i class="lnil lnil-pie-chart"></i>
                      <span>Personal V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-personal-3.html">
                      <i class="lnil lnil-stats-up"></i>
                      <span>Personal V3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-lifestyle-1.html">
                      <i class="lnil lnil-cardiology"></i>
                      <span>Influencer</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-lifestyle-2.html">
                      <i class="lnil lnil-cloud-sun"></i>
                      <span>Hobbies</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-lifestyle-3.html">
                      <i class="lnil lnil-hospital-alt-3"></i>
                      <span>Health</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-lifestyle-4.html">
                      <i class="lnil lnil-books"></i>
                      <span>Writer</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Finance</h4>
                <ul>
                  <li>
                    <a href="/webapp-dashboards-finance-1.html">
                      <i class="lnil lnil-analytics-alt-1"></i>
                      <span>Analytics</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-finance-2.html">
                      <i class="lnil lnil-stats-up"></i>
                      <span>Stocks</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-finance-3.html">
                      <i class="lnil lnil-credit-card"></i>
                      <span>Sales</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-banking-1.html">
                      <i class="lnil lnil-bank"></i>
                      <span>Banking V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-banking-2.html">
                      <i class="lnil lnil-bank"></i>
                      <span>Banking V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-banking-3.html">
                      <i class="lnil lnil-bank"></i>
                      <span>Banking V3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Business</h4>
                <ul>
                  <li>
                    <a href="/webapp-dashboards-business-1.html">
                      <i class="lnil lnil-plane-alt"></i>
                      <span>Flights Booking</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-business-2.html">
                      <i class="lnil lnil-apartment"></i>
                      <span>Company Board</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-business-3.html">
                      <i class="lnil lnil-users-alt"></i>
                      <span>HR Board</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-ecommerce-1.html">
                      <i class="lnil lnil-cart"></i>
                      <span>Ecommerce V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Apps</h4>
                <ul>
                  <li>
                    <a href="/webapp-dashboards-apps-1.html">
                      <i class="lnil lnil-pizza"></i>
                      <span>Food Delivery</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-apps-2.html">
                      <i class="lnil lnil-envelope"></i>
                      <span>Inbox</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/admin-messaging-chat.html">
                      <i class="lnil lnil-bubble"></i>
                      <span>Messaging V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-messaging-chat.html">
                      <i class="lnil lnil-bubble"></i>
                      <span>Messaging V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="templates-pages-tab" class="tab-content">
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Sidebars</h4>
                <ul>
                  <li>
                    <a href="admin-blank-page-1.html">
                      <i class="lnil lnil-layout"></i>
                      <span>Regular Sidebar</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="admin-blank-page-2.html">
                      <i class="lnil lnil-layout"></i>
                      <span>Curved Sidebar</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="admin-blank-page-3.html">
                      <i class="lnil lnil-layout"></i>
                      <span>Colored Sidebar</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="admin-blank-page-4.html">
                      <i class="lnil lnil-layout"></i>
                      <span>Curved Colored</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Navbars</h4>
                <ul>
                  <li>
                    <a href="webapp-blank-page-1.html">
                      <i class="lnil lnil-layout"></i>
                      <span>Regular Navbar</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="webapp-blank-page-2.html">
                      <i class="lnil lnil-layout"></i>
                      <span>Fading Navbar</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="webapp-blank-page-3.html">
                      <i class="lnil lnil-layout"></i>
                      <span>Colored Navbar</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="webapp-blank-page-4.html">
                      <i class="lnil lnil-layout"></i>
                      <span>Drop Navbar</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="webapp-blank-page-5.html">
                      <i class="lnil lnil-layout"></i>
                      <span>Colored Drop</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Widgets</h4>
                <ul>
                  <li>
                    <a href="/webapp-dashboards-charts-apex.html">
                      <i class="lnil lnil-pie-chart-alt"></i>
                      <span>Apex Charts</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-charts-billboardjs.html">
                      <i class="lnil lnil-bar-chart"></i>
                      <span>Billboard JS</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-widgets-ui.html">
                      <i class="lnil lnil-layout-alt-1"></i>
                      <span>UI Widgets</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-widgets-creative.html">
                      <i class="lnil lnil-layout-alt-2"></i>
                      <span>Creative Widgets</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-widgets-list.html">
                      <i class="lnil lnil-layout-alt-1"></i>
                      <span>List Widgets</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/webapp-dashboards-widgets-stats.html">
                      <i class="lnil lnil-layout-alt-1"></i>
                      <span>Stat Widgets</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Wizard</h4>
                <ul>
                  <li>
                    <a href="/wizard-v1.html">
                      <span>Wizard V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a class="/webapp-form-layouts-1.html">
                      <span>Form V1</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a class="/webapp-form-layouts-2.html">
                      <span>Form V2</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a class="/webapp-form-layouts-3.html">
                      <span>Form V3</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a class="/webapp-form-layouts-4.html">
                      <span>Form V4</span>
                      <i data-feather="circle"></i>
                    </a>
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