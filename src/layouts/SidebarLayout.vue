<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, ref } from 'vue'

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
const isMobileSidebarOpen = ref(false)
const activeMobileSubsidebar = ref('dashboard')
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
    <MobileSidebar :is-open="isMobileSidebarOpen">
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

    <CircularMenu />

    <Sidebar :theme="props.theme" />
    <LanguagesPanel />
    <ActivityPanel />
    <SearchPanel />

    <slot></slot>
  </div>
</template>
