<script setup lang="ts">
import type { SidebarTheme } from '/@src/components/navigation/desktop/Sidebar.vue'
import { usePanels } from '/@src/stores/panels'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const props = withDefaults(
  defineProps<{
    theme?: SidebarTheme
    defaultSidebar?: string
    closeOnChange?: boolean
    openOnMounted?: boolean
    nowrap?: boolean
  }>(),
  {
    defaultSidebar: 'dashboard',
    theme: 'default',
  }
)

const viewWrapper = useViewWrapper()
const panels = usePanels()
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
 * watchPostEffect callback will be executed each time dependent reactive values has changed
 */
watchPostEffect(() => {
  viewWrapper.setPushed(isDesktopSidebarOpen.value ?? false)
})
watch(
  () => route.fullPath,
  () => {
    isMobileSidebarOpen.value = false

    if (props.closeOnChange && isDesktopSidebarOpen.value) {
      isDesktopSidebarOpen.value = false
    }
  }
)
</script>

<template>
  <div class="sidebar-layout">
    <div class="app-overlay"></div>

    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #brand>
        <RouterLink to="/" class="navbar-item is-brand">
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
            aria-label="Display dashboard content"
            tabindex="0"
            role="button"
            @keydown.space.prevent="activeMobileSubsidebar = 'dashboard'"
            @click="activeMobileSubsidebar = 'dashboard'"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:activity"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="Display layout content"
            :class="[activeMobileSubsidebar === 'layout' && 'is-active']"
            tabindex="0"
            role="button"
            @keydown.space.prevent="activeMobileSubsidebar = 'layout'"
            @click="activeMobileSubsidebar = 'layout'"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:grid"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="Display element content"
            :class="[activeMobileSubsidebar === 'elements' && 'is-active']"
            tabindex="0"
            role="button"
            @keydown.space.prevent="activeMobileSubsidebar = 'elements'"
            @click="activeMobileSubsidebar = 'elements'"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:box"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="Display components content"
            :class="[activeMobileSubsidebar === 'components' && 'is-active']"
            tabindex="0"
            role="button"
            @keydown.space.prevent="activeMobileSubsidebar = 'components'"
            @click="activeMobileSubsidebar = 'components'"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:cpu"></i>
          </a>
        </li>
        <li>
          <RouterLink to="/messaging-v1">
            <i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i>
          </RouterLink>
        </li>
      </template>

      <template #bottom-links>
        <li>
          <a
            aria-label="Display search panel"
            tabindex="0"
            role="button"
            @keydown.space.prevent="panels.setActive('search')"
            @click="panels.setActive('search')"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
          </a>
        </li>
        <li>
          <a aria-label="View settings" href="#">
            <i aria-hidden="true" class="iconify" data-icon="feather:settings"></i>
          </a>
        </li>
      </template>
    </MobileSidebar>

    <!-- Mobile subsidebar links -->
    <Transition name="slide-x">
      <KeepAlive>
        <LayoutsMobileSubsidebar
          v-if="isMobileSidebarOpen && activeMobileSubsidebar === 'layout'"
        />
        <DashboardsMobileSubsidebar
          v-else-if="isMobileSidebarOpen && activeMobileSubsidebar === 'dashboard'"
        />
        <ComponentsMobileSubsidebar
          v-else-if="isMobileSidebarOpen && activeMobileSubsidebar === 'components'"
        />
        <ElementsMobileSubsidebar
          v-else-if="isMobileSidebarOpen && activeMobileSubsidebar === 'elements'"
        />
      </KeepAlive>
    </Transition>

    <!-- Desktop navigation -->
    <CircularMenu />

    <Sidebar :theme="props.theme" :is-open="isDesktopSidebarOpen">
      <template #links>
        <!-- Dashboards -->
        <li>
          <a
            :class="[activeMobileSubsidebar === 'dashboard' && 'is-active']"
            data-content="Dashboards"
            aria-label="View dashboards"
            tabindex="0"
            role="button"
            @keydown.space.prevent="switchSidebar('dashboard')"
            @click="switchSidebar('dashboard')"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:activity"
            ></i>
          </a>
        </li>

        <!-- Layouts -->
        <li>
          <a
            :class="[activeMobileSubsidebar === 'layout' && 'is-active']"
            data-content="Layouts"
            aria-label="View layouts"
            tabindex="0"
            role="button"
            @keydown.space.prevent="switchSidebar('layout')"
            @click="switchSidebar('layout')"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:grid"
            ></i>
          </a>
        </li>

        <!-- Elements -->
        <li>
          <a
            :class="[activeMobileSubsidebar === 'elements' && 'is-active']"
            data-content="Elements"
            aria-label="View elements"
            tabindex="0"
            role="button"
            @keydown.space.prevent="switchSidebar('elements')"
            @click="switchSidebar('elements')"
          >
            <i aria-hidden="true" class="iconify sidebar-svg" data-icon="feather:box"></i>
          </a>
        </li>

        <!-- Components -->
        <li>
          <a
            :class="[activeMobileSubsidebar === 'components' && 'is-active']"
            data-content="Components"
            aria-label="View components"
            tabindex="0"
            role="button"
            @keydown.space.prevent="switchSidebar('components')"
            @click="switchSidebar('components')"
          >
            <i aria-hidden="true" class="iconify sidebar-svg" data-icon="feather:cpu"></i>
          </a>
        </li>

        <!-- Messaging -->
        <li>
          <RouterLink id="open-messages" to="/messaging-v1" data-content="Messaging">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:message-circle"
            ></i>
          </RouterLink>
        </li>
      </template>

      <template #bottom-links>
        <!-- Switch Sidebar  Layouts -->
        <li class="is-hidden-touch">
          <LayoutSwitcher />
        </li>

        <!-- Search -->
        <li class="right-panel-trigger is-hidden-touch">
          <a
            aria-label="Display search panel"
            data-content="Search"
            tabindex="0"
            role="button"
            @keydown.space.prevent="panels.setActive('search')"
            @click="panels.setActive('search')"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather-search"
            />
          </a>
          <a
            aria-label="Close all panels"
            class="is-hidden is-inactive"
            tabindex="0"
            role="button"
            @keydown.space.prevent="panels.close()"
            @click="panels.close()"
          >
            <i aria-hidden="true" class="iconify sidebar-svg" data-icon="feather-x" />
          </a>
        </li>

        <!-- Settings -->
        <li class="is-hidden-touch">
          <RouterLink
            id="open-settings"
            to="/sidebar/layouts/profile-settings"
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

    <Transition name="slide-x">
      <KeepAlive>
        <ComponentsSubsidebar
          v-if="isDesktopSidebarOpen && activeMobileSubsidebar === 'components'"
          @close="isDesktopSidebarOpen = false"
        />
        <ElementsSubsidebar
          v-else-if="isDesktopSidebarOpen && activeMobileSubsidebar === 'elements'"
          @close="isDesktopSidebarOpen = false"
        />
        <DashboardsSubsidebar
          v-else-if="isDesktopSidebarOpen && activeMobileSubsidebar === 'dashboard'"
          @close="isDesktopSidebarOpen = false"
        />
        <LayoutsSubsidebar
          v-else-if="isDesktopSidebarOpen && activeMobileSubsidebar === 'layout'"
          @close="isDesktopSidebarOpen = false"
        />
      </KeepAlive>
    </Transition>

    <LanguagesPanel />
    <ActivityPanel />
    <SearchPanel />
    <TaskPanel />

    <VViewWrapper>
      <VPageContentWrapper>
        <template v-if="props.nowrap">
          <slot></slot>
        </template>
        <VPageContent v-else class="is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="vuero-hamburger nav-trigger push-resize"
              tabindex="0"
              role="button"
              @keydown.space.prevent="isDesktopSidebarOpen = !isDesktopSidebarOpen"
              @click="isDesktopSidebarOpen = !isDesktopSidebarOpen"
            >
              <span class="menu-toggle has-chevron">
                <span :class="[isDesktopSidebarOpen && 'active']" class="icon-box-toggle">
                  <span class="rotate">
                    <i aria-hidden="true" class="icon-line-top"></i>
                    <i aria-hidden="true" class="icon-line-center"></i>
                    <i aria-hidden="true" class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">{{ viewWrapper.pageTitle }}</h1>
            </div>

            <Toolbar class="desktop-toolbar">
              <ToolbarNotification />

              <a
                class="toolbar-link right-panel-trigger"
                aria-label="View activity panel"
                tabindex="0"
                role="button"
                @keydown.space.prevent="panels.setActive('activity')"
                @click="panels.setActive('activity')"
              >
                <i aria-hidden="true" class="iconify" data-icon="feather:grid"></i>
              </a>
            </Toolbar>
          </div>

          <slot></slot>
        </VPageContent>
      </VPageContentWrapper>
    </VViewWrapper>
  </div>
</template>
