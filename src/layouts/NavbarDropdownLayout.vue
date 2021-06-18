<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, defineProps, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { popovers } from '/@src/data/users/userPopovers'
import { pageTitle } from '/@src/state/navbarLayoutState'

type NavbarDropdownTheme = 'default' | 'colored' | 'fade'

const props = defineProps({
  theme: {
    type: String as PropType<NavbarDropdownTheme>,
    default: 'default',
  },
  nowrap: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()
const displaySearch = ref(false)
const isMobileSidebarOpen = ref(false)
const activeMobileSubsidebar = ref('dashboard')

const filter = ref('')
const filteredUsers = computed(() => {
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

watch(
  () => route.fullPath,
  () => {
    isMobileSidebarOpen.value = false
  }
)
</script>

<template>
  <div class="navbar-layout">
    <div class="app-overlay"></div>

    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #brand>
        <RouterLink :to="{ name: 'index' }" class="navbar-item is-brand">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>

        <div class="brand-end">
          <NotificationsMobileDropdown />
          <UserProfileDropdown />
        </div>
      </template>
    </MobileNavbar>

    <!-- Mobile sidebar links -->
    <MobileSidebar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #links>
        <li>
          <a
            :class="[activeMobileSubsidebar === 'dashboard' && 'is-active']"
            @click="activeMobileSubsidebar = 'dashboard'"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:activity"
            ></i>
          </a>
        </li>
        <li>
          <a
            :class="[activeMobileSubsidebar === 'layout' && 'is-active']"
            @click="activeMobileSubsidebar = 'layout'"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:grid"></i>
          </a>
        </li>
        <li
          :class="[activeMobileSubsidebar === 'elements' && 'is-active']"
          @click="activeMobileSubsidebar = 'elements'"
        >
          <a>
            <i aria-hidden="true" class="iconify" data-icon="feather:box"></i>
          </a>
        </li>
        <li
          :class="[activeMobileSubsidebar === 'components' && 'is-active']"
          @click="activeMobileSubsidebar = 'components'"
        >
          <a>
            <i aria-hidden="true" class="iconify" data-icon="feather:cpu"></i>
          </a>
        </li>
        <li>
          <RouterLink :to="{ name: 'messaging-v1' }">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:message-circle"
            ></i>
          </RouterLink>
        </li>
      </template>

      <template #bottom-links>
        <li>
          <a @click="activePanel = 'search'">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:search"
            ></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:settings"
            ></i>
          </a>
        </li>
      </template>
    </MobileSidebar>

    <!-- Mobile subsidebar links -->
    <transition name="slide-x">
      <LayoutsMobileSubsidebar
        v-if="isMobileSidebarOpen && activeMobileSubsidebar === 'layout'"
      />
      <DashboardsMobileSubsidebar
        v-else-if="
          isMobileSidebarOpen && activeMobileSubsidebar === 'dashboard'
        "
      />
      <ComponentsMobileSubsidebar
        v-else-if="
          isMobileSidebarOpen && activeMobileSubsidebar === 'components'
        "
      />
      <ElementsMobileSubsidebar
        v-else-if="isMobileSidebarOpen && activeMobileSubsidebar === 'elements'"
      />
    </transition>

    <Navbar :theme="props.theme">
      <!-- Custom navbar title -->
      <template #title>
        <RouterLink :to="{ name: 'index' }" class="brand">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>

        <div class="separator"></div>

        <ProjectsQuickDropdown />
        <h1 class="title is-5">{{ pageTitle }}</h1>
      </template>

      <!-- Custom navbar toolbar -->
      <template #toolbar>
        <Toolbar class="desktop-toolbar" />
        <LayoutSwitcher />

        <UserProfileDropdown />
      </template>

      <!-- Custom navbar links -->
      <template #links>
        <div class="centered-drops" :class="[displaySearch && 'is-hidden']">
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
            <button class="button" @click="displaySearch = true">
              <span class="icon is-small">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:search"
                ></i>
              </span>
            </button>
          </div>
        </div>
        <div class="centered-search" :class="[!displaySearch && 'is-hidden']">
          <div class="field">
            <div class="control has-icon">
              <input
                v-model="filter"
                type="text"
                class="input is-rounded search-input"
                placeholder="Search records..."
              />
              <div class="form-icon">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:search"
                ></i>
              </div>
              <div
                id="navbar-navbar-search-close"
                class="form-icon is-right"
                @click="displaySearch = false"
              >
                <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
              </div>
              <div
                v-if="filteredUsers.length > 0"
                class="search-results has-slimscroll is-active"
              >
                <div
                  v-for="user in filteredUsers"
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
      </template>
    </Navbar>

    <LanguagesPanel />
    <ActivityPanel />
    <TaskPanel />

    <div class="view-wrapper has-top-nav">
      <div class="page-content-wrapper">
        <template v-if="props.nowrap">
          <slot></slot>
        </template>
        <div v-else class="page-content is-relative">
          <div class="is-navbar-lg">
            <div class="page-title has-text-centered">
              <!-- Mobile Page Title -->
              <div class="title-wrap">
                <h1 class="title is-4">{{ pageTitle }}</h1>
              </div>

              <Toolbar class="mobile-toolbar" />
            </div>

            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
