<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Dashboards</h3>
      </div>

      <ul class="submenu" data-simplebar>
        <VCollapseLinks>
          <template #header>
            Personal
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink to="/sidebar/dashboards" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-analytics-alt-1"></i>
            <span>Personal V1</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/personal-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-pie-chart"></i>
            <span>Personal V2</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/personal-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-stats-up"></i>
            <span>Personal V3</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Finance
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink to="/sidebar/dashboards/analytics" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-analytics-alt-1"></i>
            <span>Analytics Dashboard</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/stocks" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-stats-up"></i>
            <span>Stocks Dashboard</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/sales" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-credit-card"></i>
            <span>Sales Dashboard</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Banking
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink to="/sidebar/dashboards/banking-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-bank"></i>
            <span>Banking V1</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/banking-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-bank"></i>
            <span>Banking V1</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/banking-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-bank"></i>
            <span>Banking V2</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/banking-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-bank"></i>
            <span>Banking V3</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Business
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink to="/sidebar/dashboards/flights" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
            <span>Flights Booking</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/company" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-apartment"></i>
            <span>Company Board</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/human-ressources" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-users-alt"></i>
            <span>HR Board</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/course" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-graduate"></i>
            <span>Course Dashboard</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/jobs" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-briefcase"></i>
            <span>Jobs Dashboard</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Lifestyle
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink to="/sidebar/dashboards/influencer" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-cardiology"></i>
            <span>Influencer</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/hobbies" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-cloud-sun"></i>
            <span>Hobbies</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/health" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-hospital-alt-3"></i>
            <span>Health</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/writer" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-books"></i>
            <span>Writer</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/video" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-video-alt-1"></i>
            <span>Video</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/soccer" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-tshirt"></i>
            <span>Soccer Dashboard</span>
          </RouterLink>
        </VCollapseLinks>
        <VCollapseLinks>
          <template #header>
            Ecommerce
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink to="/sidebar/dashboards/ecommerce-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-cart"></i>
            <span>Ecommerce V1</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Apps
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink to="/sidebar/dashboards/food-delivery" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-pizza"></i>
            <span>Food Delivery</span>
          </RouterLink>
          <RouterLink to="/sidebar/maps-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-map"></i>
            <span>Maps V1</span>
          </RouterLink>
          <RouterLink to="/sidebar/maps-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-map"></i>
            <span>Maps V2</span>
          </RouterLink>
          <RouterLink to="/inbox" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-envelope"></i>
            <span>Inbox</span>
          </RouterLink>
          <RouterLink to="/messaging-v1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-bubble"></i>
            <span>Messaging V1</span>
          </RouterLink>
          <RouterLink to="/messaging-v2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-bubble"></i>
            <span>Messaging V2</span>
          </RouterLink>
        </VCollapseLinks>

        <li class="divider"></li>

        <li>
          <RouterLink to="/wizard-v1">Wizard</RouterLink>
        </li>

        <li class="divider"></li>

        <VCollapseLinks>
          <template #header>
            Charts
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink to="/sidebar/dashboards/charts-apex" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-pie-chart-alt"></i>
            <span>Apex Charts</span>
          </RouterLink>
          <RouterLink class="is-submenu" to="/sidebar/dashboards/charts-billboardsjs">
            <i aria-hidden="true" class="lnil lnil-bar-chart"></i>
            <span>Billboard JS</span>
          </RouterLink>
        </VCollapseLinks>
        <VCollapseLinks>
          <template #header>
            Widgets
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink to="/sidebar/dashboards/widgets-sample-ui" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>UI Widgets</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/widgets-sample-creative" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
            <span>Creative Widgets</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/widgets-sample-list" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>List Widgets</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/widgets-sample-stats" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
            <span>Stat Widgets</span>
          </RouterLink>
        </VCollapseLinks>
        <VCollapseLinks>
          <template #header>
            Starters
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink to="/starters/sidebar-blank-page-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Regular Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Colored Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-4" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Colored</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-4" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Colored Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-5" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Labels Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-6" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Labels Hover Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-7" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Float Sidebar</span>
          </RouterLink>

          <hr class="navbar-divider" />

          <RouterLink to="/starters/sideblock-blank-page-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Regular Sideblock</span>
            <VTag label="v2.2" color="primary" size="tiny" outlined curved />
          </RouterLink>
          <RouterLink to="/starters/sideblock-blank-page-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Sideblock</span>
            <VTag label="v2.2" color="primary" size="tiny" outlined curved />
          </RouterLink>
          <RouterLink to="/starters/sideblock-blank-page-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Colored Sideblock</span>
            <VTag label="v2.2" color="primary" size="tiny" outlined curved />
          </RouterLink>
          <RouterLink to="/starters/sideblock-blank-page-4" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Colored</span>
            <VTag label="v2.2" color="primary" size="tiny" outlined curved />
          </RouterLink>

          <hr class="navbar-divider" />

          <RouterLink to="/starters/navbar-blank-page-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Regular Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Fading Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Colored Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-4" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Dropdown Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-5" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Colored Dropdown</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-6" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Clean Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-7" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Clean Center Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-8" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Clean Fade Navbar</span>
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>
