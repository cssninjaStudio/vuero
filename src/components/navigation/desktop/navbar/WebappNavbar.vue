<template>
  <div class="webapp-navbar">
    <div class="webapp-navbar-inner">
      <div class="left">
        <RouterLink :to="{ name: 'index' }" class="brand">
          <img class="light-image" src="/@images/logos/logo/logo.svg" alt="" />
          <img
            class="dark-image"
            src="/@images/logos/logo/logo-light.svg"
            alt=""
          />
        </RouterLink>
        <div class="separator"></div>
        <!-- <ProjectsQuickDropdown /> -->
        <h1 id="webapp-page-title" class="title is-5">Welcome</h1>
      </div>
      <div class="center">
        <div id="webapp-navbar-menu" class="centered-links">
          <a
            id="dashboards-navbar-menu"
            class="centered-link centered-link-toggle"
            data-menu-id="dashboards-webapp-menu"
          >
            <Icon icon="feather:activity" />
            <span>Dashboards</span>
          </a>
          <a
            id="layouts-navbar-menu"
            class="centered-link centered-link-toggle"
            data-menu-id="layouts-webapp-menu"
          >
            <Icon icon="feather:grid" />
            <span>Layouts</span>
          </a>
          <a
            id="elements-navbar-menu"
            class="centered-link centered-link-toggle"
            data-menu-id="elements-webapp-menu"
          >
            <Icon icon="feather:box" />
            <span>Elements</span>
          </a>
          <a
            id="components-navbar-menu"
            class="centered-link centered-link-toggle"
            data-menu-id="components-webapp-menu"
          >
            <Icon icon="feather:cpu" />
            <span>Components</span>
          </a>
          <RouterLink
            :to="{ name: 'webapp-messaging-chat' }"
            class="centered-link"
          >
            <Icon icon="feather:message-circle" />
            <span>Chat</span>
          </RouterLink>
          <a class="centered-link centered-link-search">
            <Icon icon="feather:search" />
            <span>Search</span>
          </a>
        </div>
        <div id="webapp-navbar-search" class="centered-search is-hidden">
          <div class="field">
            <div class="control has-icon">
              <input
                type="text"
                class="input is-rounded search-input"
                placeholder="Search records..."
              />
              <div class="form-icon">
                <Icon icon="feather:search" />
              </div>
              <div id="webapp-navbar-search-close" class="form-icon is-right">
                <Icon icon="feather:x" />
              </div>
              <div class="search-results has-slimscroll"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <!-- <Toolbar /> -->
        <div
          class="dropdown profile-dropdown dropdown-trigger is-spaced is-right"
        >
          <img
            src="https://via.placeholder.com/150x150"
            data-demo-src="/@images/avatars/photos/8.jpg"
            alt=""
          />
          <span class="status-indicator"></span>

          <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-head">
                <div class="h-avatar is-large">
                  <img
                    class="avatar"
                    src="https://via.placeholder.com/150x150"
                    data-demo-src="/@images/avatars/photos/8.jpg"
                    alt=""
                  />
                </div>
                <div class="meta">
                  <span>Erik Kovalsky</span>
                  <span>Product Manager</span>
                </div>
              </div>
              <RouterLink
                :to="{ name: 'admin-profile-view' }"
                class="dropdown-item is-media"
              >
                <div class="icon">
                  <i class="lnil lnil-user-alt"></i>
                </div>
                <div class="meta">
                  <span>Profile</span>
                  <span>View your profile</span>
                </div>
              </RouterLink>
              <a class="dropdown-item is-media layout-switcher">
                <div class="icon">
                  <i class="lnil lnil-layout"></i>
                </div>
                <div class="meta">
                  <span>Layout</span>
                  <span>Switch to admin/webapp</span>
                </div>
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item is-media">
                <div class="icon">
                  <i class="lnil lnil-briefcase"></i>
                </div>
                <div class="meta">
                  <span>Projects</span>
                  <span>All my projects</span>
                </div>
              </a>
              <a href="#" class="dropdown-item is-media">
                <div class="icon">
                  <i class="lnil lnil-users-alt"></i>
                </div>
                <div class="meta">
                  <span>Team</span>
                  <span>Manage your team</span>
                </div>
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item is-media">
                <div class="icon">
                  <i class="lnil lnil-cog"></i>
                </div>
                <div class="meta">
                  <span>Settings</span>
                  <span>Account settings</span>
                </div>
              </a>
              <hr class="dropdown-divider" />
              <div class="dropdown-item is-button">
                <button
                  class="button h-button is-primary is-raised is-fullwidth logout-button"
                >
                  <span class="icon is-small">
                    <Icon icon="feather:log-out" />
                  </span>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="webapp-subnavbar">
    <!--src/partials/navbar/webapp/menus/-->
    <!-- <DashboardsWebappMenu /> -->

    <!--src/partials/navbar/webapp/menus/-->
    <!-- <LayoutsWebappMenu /> -->

    <!--src/partials/navbar/webapp/menus/-->
    <!-- <ElementsWebappMenu /> -->

    <!--src/partials/navbar/webapp/menus/-->
    <!-- <ComponentsWebappMenu /> -->
  </div>
</template>
