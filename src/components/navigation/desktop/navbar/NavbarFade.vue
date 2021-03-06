<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { popovers } from '/@src/data/users/userPopovers'

import useDropdown from '/@src/composable/useDropdown'
import { activeSubnav, toggleSubnav } from '/@src/state/navbarState'

const route = useRoute()
const { dropdownElement, isOpen, toggle } = useDropdown()

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

const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

watch(
  () => route.path,
  () => {
    activeSubnav.value = 'closed'
  }
)
</script>

<template>
  <div
    :class="[isScrolling && 'is-scrolled']"
    class="navbar-navbar is-transparent"
  >
    <div class="navbar-navbar-inner">
      <div class="left">
        <RouterLink :to="{ name: 'index' }" class="brand">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>
        <div class="separator"></div>
        <ProjectsQuickDropdown />
        <h1 class="title is-5">Welcome</h1>
      </div>
      <div class="center">
        <div
          class="centered-links"
          :class="[activeSubnav === 'search' && 'is-hidden']"
        >
          <a
            class="centered-link centered-link-toggle"
            :class="[
              (activeSubnav === 'home' ||
                route.path.startsWith('/navbar/dashboards')) &&
                'is-active',
            ]"
            @click="toggleSubnav('home')"
          >
            <i class="iconify" data-icon="feather:activity"></i>
            <span>Dashboards</span>
          </a>
          <a
            class="centered-link centered-link-toggle"
            :class="[
              (activeSubnav === 'layouts' ||
                route.path.startsWith('/navbar/layouts')) &&
                'is-active',
            ]"
            @click="toggleSubnav('layouts')"
          >
            <i class="iconify" data-icon="feather:grid"></i>
            <span>Layouts</span>
          </a>
          <a
            class="centered-link centered-link-toggle"
            :class="[activeSubnav === 'elements' && 'is-active']"
            @click="toggleSubnav('elements')"
          >
            <i class="iconify" data-icon="feather:box"></i>
            <span>Elements</span>
          </a>
          <a
            class="centered-link centered-link-toggle"
            :class="[activeSubnav === 'components' && 'is-active']"
            @click="toggleSubnav('components')"
          >
            <i class="iconify" data-icon="feather:cpu"></i>
            <span>Components</span>
          </a>
          <a
            class="centered-link centered-link-search"
            @click="toggleSubnav('search')"
          >
            <i class="iconify" data-icon="feather:search"></i>
            <span>Search</span>
          </a>
        </div>
        <div
          class="centered-search"
          :class="[activeSubnav !== 'search' && 'is-hidden']"
        >
          <div class="field">
            <div class="control has-icon">
              <input
                v-model="filter"
                type="text"
                class="input is-rounded"
                placeholder="Search records..."
              />
              <div class="form-icon">
                <i class="iconify" data-icon="feather:search"></i>
              </div>
              <div class="form-icon is-right" @click="activeSubnav = 'closed'">
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
        <NavbarLayoutSwitcher />

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
                :to="{ name: 'sidebar-layouts-profile-view' }"
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

  <div
    :class="[
      activeSubnav !== 'closed' && activeSubnav !== 'search' && 'is-active',
    ]"
    class="navbar-subnavbar"
  >
    <!--src/partials/navbar/navbar/menus/-->
    <DashboardsWebappMenu />

    <!--src/partials/navbar/navbar/menus/-->
    <LayoutsWebappMenu />

    <!--src/partials/navbar/navbar/menus/-->
    <ElementsWebappMenu />

    <!--src/partials/navbar/navbar/menus/-->
    <ComponentsWebappMenu />
  </div>
</template>

<style lang="scss">
@import '../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../assets/scss/abstracts/_mixins.scss';
@import '../../../../assets/scss/layout/_navbar.scss';
@import '../../../../assets/scss/layout/_responsive.scss';
</style>
