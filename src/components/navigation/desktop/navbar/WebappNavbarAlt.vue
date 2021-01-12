<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

import useDropdown from '/@src/composition/use/useDropdown'
import {
  activeSubnav,
  toggleSubnav,
} from '/@src/composition/state/ui/webappNavState'

const route = useRoute()
const { dropdownElement, isOpen, open } = useDropdown()

watch(
  () => route.path,
  () => {
    activeSubnav.value = 'closed'
  }
)
</script>

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
        <ProjectsQuickDropdown />
        <h1 id="webapp-page-title" class="title is-5">Welcome</h1>
      </div>
      <div class="center">
        <div id="webapp-navbar-menu" class="centered-drops">
          <div class="centered-drop">
            <NavbarDashboardsDropdown />
          </div>
          <div class="centered-drop">
            <NavbarLayoutsDropdown />
          </div>
          <div class="centered-drop">
            <NavbarElementsDropdown />
          </div>
          <div class="centered-drop">
            <NavbarComponentsDropdown />
          </div>
          <div class="centered-button">
            <RouterLink :to="{ name: 'webapp-messaging-chat' }" class="button">
              <span class="icon is-small">
                <Icon icon="feather:message-circle" />
              </span>
            </RouterLink>
          </div>
          <div class="centered-button centered-link-search">
            <button class="button">
              <span class="icon is-small">
                <Icon icon="feather:search" />
              </span>
            </button>
          </div>
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
        <Toolbar />
        <div
          ref="dropdownElement"
          :class="[isOpen && 'is-active']"
          class="dropdown profile-dropdown dropdown-trigger is-spaced is-right"
        >
          <img
            src="/@images/avatars/photos/8.jpg"
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
                    src="/@images/avatars/photos/8.jpg"
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
</template>
