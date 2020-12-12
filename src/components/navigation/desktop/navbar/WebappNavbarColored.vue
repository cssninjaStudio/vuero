<script lang="ts">
import { defineComponent } from 'vue'

const WebappNavbarColored = defineComponent({
  name: 'WebappNavbarColored',
  components: {},
  setup() {
    // @ToCheck
    // WebappNavbarColored - Composition API

    return {}
  },
})

export default WebappNavbarColored
</script>

<template>
  <div class="webapp-navbar is-colored">
    <div class="webapp-navbar-inner">
      <div class="left">
        <a href="/" class="brand">
          <img
            class="light-image"
            src="assets/img/logos/logo/logo-light.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="assets/img/logos/logo/logo-light.svg"
            alt=""
          />
        </a>
        <div class="separator"></div>
        <!-- {{> projects-quick-dropdown}} -->
        <h1 id="webapp-page-title" class="title is-5">Welcome</h1>
      </div>
      <div class="center">
        <div id="webapp-navbar-menu" class="centered-links">
          <a
            id="dashboards-navbar-menu"
            class="centered-link centered-link-toggle"
            data-menu-id="dashboards-webapp-menu"
          >
            <i data-feather="activity"></i>
            <span>Dashboards</span>
          </a>
          <a
            id="layouts-navbar-menu"
            class="centered-link centered-link-toggle"
            data-menu-id="layouts-webapp-menu"
          >
            <i data-feather="grid"></i>
            <span>Layouts</span>
          </a>
          <a
            id="elements-navbar-menu"
            class="centered-link centered-link-toggle"
            data-menu-id="elements-webapp-menu"
          >
            <i data-feather="box"></i>
            <span>Elements</span>
          </a>
          <a
            id="components-navbar-menu"
            class="centered-link centered-link-toggle"
            data-menu-id="components-webapp-menu"
          >
            <i data-feather="cpu"></i>
            <span>Components</span>
          </a>
          <a href="/webapp-messaging-chat.html" class="centered-link">
            <i data-feather="message-circle"></i>
            <span>Chat</span>
          </a>
          <a class="centered-link centered-link-search">
            <i data-feather="search"></i>
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
                <i data-feather="search"></i>
              </div>
              <div id="webapp-navbar-search-close" class="form-icon is-right">
                <i data-feather="x"></i>
              </div>
              <div class="search-results has-slimscroll"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <!-- {{> toolbar}} -->
        <div
          class="dropdown profile-dropdown dropdown-trigger is-spaced is-right"
        >
          <img
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/photos/8.jpg"
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
                    data-demo-src="assets/img/avatars/photos/8.jpg"
                    alt=""
                  />
                </div>
                <div class="meta">
                  <span>Erik Kovalsky</span>
                  <span>Product Manager</span>
                </div>
              </div>
              <a href="/admin-profile-view.html" class="dropdown-item is-media">
                <div class="icon">
                  <i class="lnil lnil-user-alt"></i>
                </div>
                <div class="meta">
                  <span>Profile</span>
                  <span>View your profile</span>
                </div>
              </a>
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
                    <i data-feather="log-out"></i>
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
    <!-- {{> dashboards-webapp-menu}} -->

    <!--src/partials/navbar/webapp/menus/-->
    <!-- {{> layouts-webapp-menu}} -->

    <!--src/partials/navbar/webapp/menus/-->
    <!-- {{> elements-webapp-menu}} -->

    <!--src/partials/navbar/webapp/menus/-->
    <!-- {{> components-webapp-menu}} -->
  </div>
</template>