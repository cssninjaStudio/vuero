<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Dashboards</h3>
      </div>

      <ul
        class="submenu"
        data-simplebar
      >
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

          <RouterLink
            to="/sidebar/dashboards"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-analytics-alt-1"
            />
            <span>Personal V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/personal-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-pie-chart"
            />
            <span>Personal V2</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/personal-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-stats-up"
            />
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

          <RouterLink
            to="/sidebar/dashboards/analytics"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-analytics-alt-1"
            />
            <span>Analytics Dashboard</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/stocks"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-stats-up"
            />
            <span>Stocks Dashboard</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/sales"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-credit-card"
            />
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

          <RouterLink
            to="/sidebar/dashboards/banking-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bank"
            />
            <span>Banking V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/banking-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bank"
            />
            <span>Banking V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/banking-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bank"
            />
            <span>Banking V2</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/banking-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bank"
            />
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

          <RouterLink
            to="/sidebar/dashboards/flights"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-plane-alt"
            />
            <span>Flights Booking</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/company"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-apartment"
            />
            <span>Company Board</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/human-ressources"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-users-alt"
            />
            <span>HR Board</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/course"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-graduate"
            />
            <span>Course Dashboard</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/jobs"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-briefcase"
            />
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

          <RouterLink
            to="/sidebar/dashboards/influencer"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-cardiology"
            />
            <span>Influencer</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/hobbies"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-cloud-sun"
            />
            <span>Hobbies</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/health"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-hospital-alt-3"
            />
            <span>Health</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/writer"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-books"
            />
            <span>Writer</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/video"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-video-alt-1"
            />
            <span>Video</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/soccer"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-tshirt"
            />
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

          <RouterLink
            to="/sidebar/dashboards/ecommerce-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-cart"
            />
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

          <RouterLink
            to="/sidebar/dashboards/food-delivery"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-pizza"
            />
            <span>Food Delivery</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/maps-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-map"
            />
            <span>Maps V1</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/maps-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-map"
            />
            <span>Maps V2</span>
          </RouterLink>
          <RouterLink
            to="/inbox"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-envelope"
            />
            <span>Inbox</span>
          </RouterLink>
          <RouterLink
            to="/messaging-v1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bubble"
            />
            <span>Messaging V1</span>
          </RouterLink>
          <RouterLink
            to="/messaging-v2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bubble"
            />
            <span>Messaging V2</span>
          </RouterLink>
        </VCollapseLinks>

        <li class="divider" />

        <li>
          <RouterLink to="/wizard-v1">
            Wizard
          </RouterLink>
        </li>

        <li class="divider" />

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

          <RouterLink
            to="/sidebar/dashboards/charts-apex"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-pie-chart-alt"
            />
            <span>Apex Charts</span>
          </RouterLink>
          <RouterLink
            class="is-submenu"
            to="/sidebar/dashboards/charts-billboardsjs"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-bar-chart"
            />
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

          <RouterLink
            to="/sidebar/dashboards/widgets-sample-ui"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>UI Widgets</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/widgets-sample-creative"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-2"
            />
            <span>Creative Widgets</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/widgets-sample-list"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>List Widgets</span>
          </RouterLink>
          <RouterLink
            to="/sidebar/dashboards/widgets-sample-stats"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-2"
            />
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

          <RouterLink
            to="/starters/sidebar-blank-page-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Regular Sidebar</span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Curved Sidebar</span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Colored Sidebar</span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Curved Colored</span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Curved Colored Sidebar</span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-5"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Labels Sidebar</span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-6"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Labels Hover Sidebar</span>
          </RouterLink>
          <RouterLink
            to="/starters/sidebar-blank-page-7"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Float Sidebar</span>
          </RouterLink>

          <hr class="navbar-divider">

          <RouterLink
            to="/starters/sideblock-blank-page-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Regular Sideblock</span>
            <VTag
              label="v2.2"
              color="primary"
              size="tiny"
              outlined
              curved
            />
          </RouterLink>
          <RouterLink
            to="/starters/sideblock-blank-page-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Curved Sideblock</span>
            <VTag
              label="v2.2"
              color="primary"
              size="tiny"
              outlined
              curved
            />
          </RouterLink>
          <RouterLink
            to="/starters/sideblock-blank-page-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Colored Sideblock</span>
            <VTag
              label="v2.2"
              color="primary"
              size="tiny"
              outlined
              curved
            />
          </RouterLink>
          <RouterLink
            to="/starters/sideblock-blank-page-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout"
            />
            <span>Curved Colored</span>
            <VTag
              label="v2.2"
              color="primary"
              size="tiny"
              outlined
              curved
            />
          </RouterLink>

          <hr class="navbar-divider">

          <RouterLink
            to="/starters/navbar-blank-page-1"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>Regular Navbar</span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-2"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>Fading Navbar</span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-3"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>Colored Navbar</span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-4"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>Dropdown Navbar</span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-5"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>Colored Dropdown</span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-6"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>Clean Navbar</span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-7"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>Clean Center Navbar</span>
          </RouterLink>
          <RouterLink
            to="/starters/navbar-blank-page-8"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-layout-alt-1"
            />
            <span>Clean Fade Navbar</span>
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>
