<script lang="ts">
import { defineComponent } from 'vue'

const GenericSidebar = defineComponent({
  name: 'GenericSidebar',
  components: {},
  setup() {
    // GenericSidebar - Composition API

    return {}
  },
})

export default GenericSidebar
</script>

<template>
  <div id="home-sidebar" class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <ProjectsQuickDropdown />

      <h3 class="no-mb">Dashboards</h3>
      <div class="panel-close">
        <Icon icon="feather:x" />
      </div>
    </div>
    <div class="inner" data-simplebar>
      <ul>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Personal <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-dashboards-personal-1.html">
                <i class="lnil lnil-analytics-alt-1"></i>
                <span>Personal V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-personal-2.html">
                <i class="lnil lnil-pie-chart"></i>
                <span>Personal V2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-personal-3.html">
                <i class="lnil lnil-stats-up"></i>
                <span>Personal V3</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Finance <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-dashboards-finance-1.html">
                <i class="lnil lnil-analytics-alt-1"></i>
                <span>Analytics Dashboard</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-finance-2.html">
                <i class="lnil lnil-stats-up"></i>
                <span>Stocks Dashboard</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-finance-3.html">
                <i class="lnil lnil-credit-card"></i>
                <span>Sales Dashboard</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Banking <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-dashboards-banking-1.html">
                <i class="lnil lnil-bank"></i>
                <span>Banking V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-banking-2.html">
                <i class="lnil lnil-bank"></i>
                <span>Banking V2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-banking-3.html">
                <i class="lnil lnil-bank"></i>
                <span>Banking V3</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Business <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-dashboards-business-1.html">
                <i class="lnil lnil-plane-alt"></i>
                <span>Flights Booking</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-business-2.html">
                <i class="lnil lnil-apartment"></i>
                <span>Company Board</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-business-3.html">
                <i class="lnil lnil-users-alt"></i>
                <span>HR Board</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Lifestyle <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-dashboards-lifestyle-1.html">
                <i class="lnil lnil-cardiology"></i>
                <span>Influencer</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-lifestyle-2.html">
                <i class="lnil lnil-cloud-sun"></i>
                <span>Hobbies</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-lifestyle-3.html">
                <i class="lnil lnil-hospital-alt-3"></i>
                <span>Health</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-lifestyle-4.html">
                <i class="lnil lnil-books"></i>
                <span>Writer</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Ecommerce <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-dashboards-ecommerce-1.html">
                <i class="lnil lnil-cart"></i>
                <span>Ecommerce V1</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Apps <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-dashboards-apps-1.html">
                <i class="lnil lnil-pizza"></i>
                <span>Food Delivery</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-apps-2.html">
                <i class="lnil lnil-envelope"></i>
                <span>Inbox</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-messaging-chat.html">
                <i class="lnil lnil-bubble"></i>
                <span>Messaging V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/webapp-messaging-chat.html">
                <i class="lnil lnil-bubble"></i>
                <span>Messaging V2</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="divider"></li>
        <li>
          <a href="/wizard-v1.html">Wizard</a>
        </li>
        <li class="divider"></li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Charts <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-dashboards-charts-apex.html">
                <i class="lnil lnil-pie-chart-alt"></i>
                <span>Apex Charts</span>
              </a>
            </li>
            <li>
              <a
                class="is-submenu"
                href="/admin-dashboards-charts-billboardjs.html"
              >
                <i class="lnil lnil-bar-chart"></i>
                <span>Billboard JS</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Widgets <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-dashboards-widgets-ui.html">
                <i class="lnil lnil-layout-alt-1"></i>
                <span>UI Widgets</span>
              </a>
            </li>
            <li>
              <a
                class="is-submenu"
                href="/admin-dashboards-widgets-creative.html"
              >
                <i class="lnil lnil-layout-alt-2"></i>
                <span>Creative Widgets</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-widgets-list.html">
                <i class="lnil lnil-layout-alt-1"></i>
                <span>List Widgets</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-dashboards-widgets-stats.html">
                <i class="lnil lnil-layout-alt-2"></i>
                <span>Stat Widgets</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Form Layouts <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/admin-form-layouts-1.html">
                <i class="lnil lnil-passport"></i>
                <span>Form Layout V1</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-form-layouts-2.html">
                <i class="lnil lnil-passport"></i>
                <span>Form Layout V2</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-form-layouts-3.html">
                <i class="lnil lnil-passport"></i>
                <span>Form Layout V3</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="/admin-form-layouts-4.html">
                <i class="lnil lnil-passport"></i>
                <span>Form Layout V4</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Starters <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="admin-blank-page-1.html">
                <i class="lnil lnil-layout"></i>
                <span>Regular Sidebar</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="admin-blank-page-2.html">
                <i class="lnil lnil-layout"></i>
                <span>Curved Sidebar</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="admin-blank-page-3.html">
                <i class="lnil lnil-layout"></i>
                <span>Colored Sidebar</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="admin-blank-page-4.html">
                <i class="lnil lnil-layout"></i>
                <span>Curved Colored</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="webapp-blank-page-1.html">
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Regular Navbar</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="webapp-blank-page-2.html">
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Fading Navbar</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="webapp-blank-page-3.html">
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Colored Navbar</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="webapp-blank-page-4.html">
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Dropdown Navbar</span>
              </a>
            </li>
            <li>
              <a class="is-submenu" href="webapp-blank-page-5.html">
                <i class="lnil lnil-layout-alt-1"></i>
                <span>Colored Dropdown</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>