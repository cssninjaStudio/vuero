<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, ref } from 'vue'
import { useRoute } from 'vue-router'

import { activePanel } from '/@src/state/activePanelState'

type SidebarTheme =
  | 'default'
  | 'color'
  | 'color-curved'
  | 'curved'
  | 'float'
  | 'labels'
  | 'labels-hover'

const props = defineProps({
  theme: {
    type: String as PropType<SidebarTheme>,
    default: 'default',
  },
})

const route = useRoute()
const isMobileSidebarOpen = ref(false)
const isDesktopSidebarOpen = ref(false)
</script>

<template>
  <div class="sidebar-layout">
    <div class="app-overlay"></div>

    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <NotificationsMobileDropdown />
      <UserProfileDropdown />
    </MobileNavbar>

    <!-- Mobile sidebar links -->
    <MobileSidebar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #links>
        <li>
          <RouterLink :to="{ name: 'sidebar-dashboards' }">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:activity"
            ></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'sidebar-layouts' }">
            <i aria-hidden="true" class="iconify" data-icon="feather:grid"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements' }">
            <i aria-hidden="true" class="iconify" data-icon="feather:box"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components' }">
            <i aria-hidden="true" class="iconify" data-icon="feather:cpu"></i>
          </RouterLink>
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

    <Sidebar :theme="props.theme">
      <template #links>
        <!-- Dashboards -->
        <li>
          <RouterLink :to="{ name: 'sidebar-dashboards' }">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:activity"
            ></i>
          </RouterLink>
        </li>

        <!-- Layouts -->
        <li>
          <RouterLink :to="{ name: 'sidebar-layouts' }">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:grid"
            ></i>
          </RouterLink>
        </li>

        <!-- Elements -->
        <li>
          <RouterLink :to="{ name: 'elements' }">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:box"
            ></i>
          </RouterLink>
        </li>

        <!-- Components -->
        <li>
          <RouterLink :to="{ name: 'components' }">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:cpu"
            ></i>
          </RouterLink>
        </li>

        <!-- Messaging -->
        <li>
          <RouterLink :to="{ name: 'messaging-v1' }">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:message-circle"
            ></i>
          </RouterLink>
        </li>
      </template>

      <template #bottom-links>
        <!-- Search -->
        <li class="right-panel-trigger">
          <a data-content="Search" @click="activePanel = 'search'">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather-search"
            />
          </a>
          <a class="is-hidden is-inactive" @click="activePanel = 'none'">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather-x"
            />
          </a>
        </li>

        <!-- Settings -->
        <li>
          <RouterLink
            id="open-settings"
            :to="{ name: 'sidebar-layouts-profile-settings' }"
            data-content="Settings"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:settings"
            ></i>
          </RouterLink>
        </li>

        <!-- Profile Dropdown -->
        <li>
          <UserProfileDropdown up />
        </li>
      </template>
    </Sidebar>

    <LanguagesPanel />
    <ActivityPanel />
    <SearchPanel />

    <slot :isMobileSidebarOpen="isMobileSidebarOpen"></slot>
  </div>
</template>
