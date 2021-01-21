<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

import useDropdown from '/@src/composition/use/useDropdown'
import {
  activeSubnav,
  toggleSubnav,
} from '/@src/composition/state/ui/webappNavState'

const route = useRoute()
const { dropdownElement, isOpen, open } = useDropdown()

const otherLayoutLink = computed(() => {
  if (route.fullPath.startsWith('/admin')) {
    return route.fullPath.replace('admin', 'webapp')
  } else {
    return route.fullPath.replace('webapp', 'admin')
  }
})

watch(
  () => route.path,
  () => {
    activeSubnav.value = 'closed'
  }
)
</script>

<template>
  <div class="webapp-navbar is-colored">
    <div class="webapp-navbar-inner">
      <div class="left">
        <RouterLink :to="{ name: 'index' }" class="brand">
          <img
            class="light-image"
            src="/images/logos/logo/logo-light.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/images/logos/logo/logo-light.svg"
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
            :class="[activeSubnav === 'home' && 'is-active']"
            class="centered-link centered-link-toggle"
            @click="toggleSubnav('home')"
          >
            <i class="iconify" data-icon="feather:activity"></i>
            <span>Dashboards</span>
          </a>
          <a
            id="layouts-navbar-menu"
            :class="[activeSubnav === 'layouts' && 'is-active']"
            class="centered-link centered-link-toggle"
            @click="toggleSubnav('layouts')"
          >
            <i class="iconify" data-icon="feather:grid"></i>
            <span>Layouts</span>
          </a>
          <a
            id="elements-navbar-menu"
            :class="[activeSubnav === 'elements' && 'is-active']"
            class="centered-link centered-link-toggle"
            @click="toggleSubnav('elements')"
          >
            <i class="iconify" data-icon="feather:box"></i>
            <span>Elements</span>
          </a>
          <a
            id="components-navbar-menu"
            :class="[activeSubnav === 'components' && 'is-active']"
            class="centered-link centered-link-toggle"
            @click="toggleSubnav('components')"
          >
            <i class="iconify" data-icon="feather:cpu"></i>
            <span>Components</span>
          </a>
          <RouterLink :to="{ name: 'messaging-v2' }" class="centered-link">
            <i class="iconify" data-icon="feather:message-circle"></i>
            <span>Chat</span>
          </RouterLink>
          <a
            class="centered-link centered-link-search"
            @click="toggleSubnav('search')"
          >
            <i class="iconify" data-icon="feather:search"></i>
            <span>Search</span>
          </a>
        </div>
        <div
          id="webapp-navbar-search"
          class="centered-search"
          :class="[activeSubnav !== 'search' && 'is-hidden']"
        >
          <div class="field">
            <div class="control has-icon">
              <input
                type="text"
                class="input is-rounded search-input"
                placeholder="Search records..."
              />
              <div class="form-icon">
                <i class="iconify" data-icon="feather:search"></i>
              </div>
              <div
                id="webapp-navbar-search-close"
                class="form-icon is-right"
                @click="activeSubnav = 'closed'"
              >
                <i class="iconify" data-icon="feather:x"></i>
              </div>
              <div class="search-results has-slimscroll"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <!-- <Toolbar /> -->
        <div
          ref="dropdownElement"
          :class="[isOpen && 'is-active']"
          class="dropdown profile-dropdown dropdown-trigger is-spaced is-right"
        >
          <img
            src="/images/avatars/photos/8.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            @click="open"
          />
          <span class="status-indicator"></span>

          <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-head">
                <div class="h-avatar is-large">
                  <img
                    class="avatar"
                    src="/images/avatars/photos/8.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
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
              <RouterLink
                :to="otherLayoutLink"
                class="dropdown-item is-media layout-switcher"
              >
                <div class="icon">
                  <i class="lnil lnil-layout"></i>
                </div>
                <div class="meta">
                  <span>Layout</span>
                  <span>Switch to admin/webapp</span>
                </div>
              </RouterLink>
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
                    <i class="iconify" data-icon="feather:log-out"></i>
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

  <div
    :class="[activeSubnav !== 'closed' && 'is-active']"
    class="webapp-subnavbar"
  >
    <!--src/partials/navbar/webapp/menus/-->
    <DashboardsWebappMenu />

    <!--src/partials/navbar/webapp/menus/-->
    <LayoutsWebappMenu />

    <!--src/partials/navbar/webapp/menus/-->
    <ElementsWebappMenu />

    <!--src/partials/navbar/webapp/menus/-->
    <ComponentsWebappMenu />
  </div>
</template>

<style lang="scss">
@import '../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../assets/scss/abstracts/_mixins.scss';
@import '../../../../assets/scss/layout/_navbar.scss';
@import '../../../../assets/scss/layout/_responsive.scss';
</style>
