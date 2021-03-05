<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { popovers } from '/@src/data/users/userPopovers'

import useDropdown from '/@src/composition/use/useDropdown'
import {
  activeSubnav,
  toggleSubnav,
} from '/@src/composition/state/webappNavState'
import { useWindowScroll } from '@vueuse/core'

const route = useRoute()
const { dropdownElement, isOpen, toggle } = useDropdown()
const { y } = useWindowScroll()

const filter = ref('')
const filteredData = computed(() => {
  if (!filter.value) {
    return []
  }

  return Object.values(popovers).filter((user) => {
    return (
      user.fullName.match(new RegExp(filter.value, 'i')) ||
      user.position.match(new RegExp(filter.value, 'i'))
    )
  })
})

const isScrolling = computed(() => {
  return y.value > 30
})
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
  <div :class="[isScrolling && 'is-scrolled']" class="webapp-navbar">
    <div class="webapp-navbar-inner">
      <div class="left">
        <RouterLink :to="{ name: 'index' }" class="brand">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>
        <div class="separator"></div>
        <ProjectsQuickDropdown />
        <h1 id="webapp-page-title" class="title is-5">Welcome</h1>
      </div>
      <div class="center">
        <div
          id="webapp-navbar-menu"
          class="centered-drops"
          :class="[activeSubnav === 'search' && 'is-hidden']"
        >
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
          <div class="centered-button centered-link-search">
            <button class="button" @click="toggleSubnav('search')">
              <span class="icon is-small">
                <i class="iconify" data-icon="feather:search"></i>
              </span>
            </button>
          </div>
        </div>
        <div
          id="webapp-navbar-search"
          class="centered-search"
          :class="[activeSubnav !== 'search' && 'is-hidden']"
        >
          <div class="field">
            <div class="control has-icon">
              <input
                v-model="filter"
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
                @click="toggleSubnav('search')"
              >
                <i class="iconify" data-icon="feather:x"></i>
              </div>
              <div
                v-if="filteredData.length > 0"
                class="search-results has-slimscroll is-active"
              >
                <div
                  v-for="user in filteredData"
                  :key="user.id"
                  class="search-result"
                >
                  <V-Avatar
                    :picture="user.avatar"
                    :initials="user.initials"
                    :color="user.color"
                  />
                  <div class="meta">
                    <span>{{ user.username }}</span>
                    <span>{{ user.position }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <Toolbar />
        <WebappLayoutSwitcher />

        <div
          ref="dropdownElement"
          :class="[isOpen && 'is-active']"
          class="dropdown profile-dropdown dropdown-trigger is-spaced is-right"
        >
          <img
            src="/images/avatars/photos/8.jpg"
            alt=""
            @error.once="
              $event.target.src = 'https://via.placeholder.com/150x150'
            "
            @click="toggle"
          />
          <span class="status-indicator"></span>

          <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-head">
                <div class="v-avatar is-large">
                  <img
                    class="avatar"
                    src="/images/avatars/photos/8.jpg"
                    alt=""
                    @error.once="
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
                :to="{ name: 'admin-layouts-profile-view' }"
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
                  class="button v-button is-primary is-raised is-fullwidth logout-button"
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
</template>

<style lang="scss">
@import '../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../assets/scss/abstracts/_mixins.scss';
@import '../../../../assets/scss/layout/_navbar.scss';
@import '../../../../assets/scss/layout/_responsive.scss';
</style>
