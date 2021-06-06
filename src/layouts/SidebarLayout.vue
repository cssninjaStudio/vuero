<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, defineProps, ref, watchEffect, watch } from 'vue'
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
  defaultSidebar: {
    type: String,
    default: 'dashboard',
  },
  closeOnChange: {
    type: Boolean,
    default: false,
  },
  openOnMounted: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()
const isMobileSidebarOpen = ref(false)
const isDesktopSidebarOpen = ref(props.openOnMounted)
const activeMobileSubsidebar = ref(props.defaultSidebar)

function switchSidebar(id: string) {
  if (id === activeMobileSubsidebar.value) {
    isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value
  } else {
    isDesktopSidebarOpen.value = true
    activeMobileSubsidebar.value = id
  }
}

/**
 * watchEffect callback will be executed each time dependent reactive values has changed
 */
watchEffect(
  () => {
    const isOpen = isDesktopSidebarOpen.value
    const wrappers = document.querySelectorAll('.view-wrapper')

    wrappers.forEach((wrapper) => {
      if (isOpen === false) {
        wrapper.classList.remove('is-pushed-full')
      } else if (!wrapper.classList.contains('is-pushed-full')) {
        wrapper.classList.add('is-pushed-full')
      }
    })
  },
  { flush: 'post' }
)
watch(route, () => {
  if (props.closeOnChange && isDesktopSidebarOpen.value) {
    isDesktopSidebarOpen.value = false
  }
})
</script>

<template>
  <div class="default-layout">
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
          <a
            :class="[activeMobileSubsidebar === 'dashboard' && 'is-active']"
            @click="activeMobileSubsidebar = 'dashboard'"
          >
            <i class="iconify" data-icon="feather:activity"></i>
          </a>
        </li>
        <li>
          <a
            :class="[activeMobileSubsidebar === 'layout' && 'is-active']"
            @click="activeMobileSubsidebar = 'layout'"
          >
            <i class="iconify" data-icon="feather:grid"></i>
          </a>
        </li>
        <li
          :class="[activeMobileSubsidebar === 'elements' && 'is-active']"
          @click="activeMobileSubsidebar = 'elements'"
        >
          <a>
            <i class="iconify" data-icon="feather:box"></i>
          </a>
        </li>
        <li
          :class="[activeMobileSubsidebar === 'components' && 'is-active']"
          @click="activeMobileSubsidebar = 'components'"
        >
          <a>
            <i class="iconify" data-icon="feather:cpu"></i>
          </a>
        </li>
        <li>
          <RouterLink :to="{ name: 'messaging-v1' }">
            <i class="iconify" data-icon="feather:message-circle"></i>
          </RouterLink>
        </li>
      </template>

      <template #bottom-links>
        <li>
          <a @click="activePanel = 'search'">
            <i class="iconify" data-icon="feather:search"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconify" data-icon="feather:settings"></i>
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

    <!-- Desktop navigation -->
    <CircularMenu />

    <Sidebar :theme="props.theme">
      <template #links>
        <!-- Dashboards -->
        <li>
          <a
            :class="[activeMobileSubsidebar === 'dashboard' && 'is-active']"
            @click="switchSidebar('dashboard')"
            data-content="Dashboards"
          >
            <i class="iconify sidebar-svg" data-icon="feather:activity"></i>
          </a>
        </li>

        <!-- Layouts -->
        <li>
          <a
            :class="[activeMobileSubsidebar === 'layout' && 'is-active']"
            @click="switchSidebar('layout')"
            data-content="Layouts"
          >
            <i class="iconify sidebar-svg" data-icon="feather:grid"></i>
          </a>
        </li>

        <!-- Elements -->
        <li>
          <a
            :class="[activeMobileSubsidebar === 'elements' && 'is-active']"
            @click="switchSidebar('elements')"
            data-content="Elements"
          >
            <i class="iconify sidebar-svg" data-icon="feather:box"></i>
          </a>
        </li>

        <!-- Components -->
        <li>
          <a
            :class="[activeMobileSubsidebar === 'components' && 'is-active']"
            @click="switchSidebar('components')"
            data-content="Components"
          >
            <i class="iconify sidebar-svg" data-icon="feather:cpu"></i>
          </a>
        </li>

        <!-- Messaging -->
        <li>
          <RouterLink
            id="open-messages"
            :to="{ name: 'messaging-v1' }"
            data-content="Messaging"
          >
            <i
              class="iconify sidebar-svg"
              data-icon="feather:message-circle"
            ></i>
          </RouterLink>
        </li>
      </template>

      <template #bottom-links>
        <!-- Switch Sidebar  Layouts -->
        <SidebarLayoutSwitcher />

        <!-- Search -->
        <li class="right-panel-trigger">
          <a data-content="Search" @click="activePanel = 'search'"
            ><i class="iconify sidebar-svg" data-icon="feather-search" />
          </a>
          <a class="is-hidden is-inactive" @click="activePanel = 'none'">
            <i class="iconify sidebar-svg" data-icon="feather-x"
          /></a>
        </li>

        <!-- Settings -->
        <li>
          <RouterLink
            id="open-settings"
            :to="{ name: 'sidebar-layouts-profile-settings' }"
            data-content="Settings"
          >
            <i class="iconify sidebar-svg" data-icon="feather:settings"></i>
          </RouterLink>
        </li>

        <!-- Profile Dropdown -->
        <SidebarItemProfileDropdown />
      </template>
    </Sidebar>

    <transition name="slide-x">
      <ComponentsSubsidebar
        v-if="isDesktopSidebarOpen && activeMobileSubsidebar === 'components'"
      />
      <ElementsSubsidebar
        v-else-if="
          isDesktopSidebarOpen && activeMobileSubsidebar === 'elements'
        "
      />
      <DashboardsSubsidebar
        v-else-if="
          isDesktopSidebarOpen && activeMobileSubsidebar === 'dashboard'
        "
      />
      <LayoutsSubsidebar
        v-else-if="isDesktopSidebarOpen && activeMobileSubsidebar === 'layout'"
      />
    </transition>

    <LanguagesPanel />
    <ActivityPanel />
    <SearchPanel />

    <slot></slot>
  </div>
</template>
