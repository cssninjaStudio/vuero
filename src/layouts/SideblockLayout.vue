<script setup lang="ts">
import { ref, watchPostEffect, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import type { SideblockTheme } from '/@src/stores/layoutSwitcher'
import { usePanels } from '/@src/stores/panels'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const props = withDefaults(
  defineProps<{
    theme?: SideblockTheme
    defaultSideblock?: string
    closeOnChange?: boolean
    openOnMounted?: boolean
    nowrap?: boolean
  }>(),
  {
    defaultSideblock: 'dashboard',
    theme: 'default',
  }
)

const viewWrapper = useViewWrapper()
const panels = usePanels()
const route = useRoute()
const isMobileSideblockOpen = ref(false)
const isDesktopSideblockOpen = ref(props.openOnMounted)
const activeMobileSubsidebar = ref(props.defaultSideblock)

/**
 * watchPostEffect callback will be executed each time dependent reactive values has changed
 */
watchPostEffect(() => {
  viewWrapper.setPushedBlock(isDesktopSideblockOpen.value ?? false)
})
onMounted(() => {
  viewWrapper.setPushed(false)
})
watch(
  () => route.fullPath,
  () => {
    isMobileSideblockOpen.value = false

    if (props.closeOnChange && isDesktopSideblockOpen.value) {
      isDesktopSideblockOpen.value = false
    }
  }
)
</script>

<template>
  <div class="sidebar-layout">
    <div class="app-overlay"></div>

    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="isMobileSideblockOpen"
      @toggle="isMobileSideblockOpen = !isMobileSideblockOpen"
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
      :is-open="isMobileSideblockOpen"
      @toggle="isMobileSideblockOpen = !isMobileSideblockOpen"
    >
      <template #links>
        <li>
          <a
            :class="[activeMobileSubsidebar === 'dashboard' && 'is-active']"
            aria-label="Display dashboard content"
            tabindex="0"
            @keydown.space.prevent="activeMobileSubsidebar = 'dashboard'"
            @click="activeMobileSubsidebar = 'dashboard'"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:activity"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="Dsiplay layout content"
            :class="[activeMobileSubsidebar === 'layout' && 'is-active']"
            tabindex="0"
            @keydown.space.prevent="activeMobileSubsidebar = 'layout'"
            @click="activeMobileSubsidebar = 'layout'"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:grid"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="Dsiplay element content"
            :class="[activeMobileSubsidebar === 'elements' && 'is-active']"
            tabindex="0"
            @keydown.space.prevent="activeMobileSubsidebar = 'elements'"
            @click="activeMobileSubsidebar = 'elements'"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:box"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="Dsiplay components content"
            :class="[activeMobileSubsidebar === 'components' && 'is-active']"
            tabindex="0"
            @keydown.space.prevent="activeMobileSubsidebar = 'components'"
            @click="activeMobileSubsidebar = 'components'"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:cpu"></i>
          </a>
        </li>
        <li>
          <RouterLink :to="{ name: 'messaging-v1' }">
            <i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i>
          </RouterLink>
        </li>
      </template>

      <template #bottom-links>
        <li>
          <a
            aria-label="Display search panel"
            tabindex="0"
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
    <transition name="slide-x">
      <LayoutsMobileSubsidebar
        v-if="isMobileSideblockOpen && activeMobileSubsidebar === 'layout'"
      />
      <DashboardsMobileSubsidebar
        v-else-if="isMobileSideblockOpen && activeMobileSubsidebar === 'dashboard'"
      />
      <ComponentsMobileSubsidebar
        v-else-if="isMobileSideblockOpen && activeMobileSubsidebar === 'components'"
      />
      <ElementsMobileSubsidebar
        v-else-if="isMobileSideblockOpen && activeMobileSubsidebar === 'elements'"
      />
    </transition>

    <!-- Desktop navigation -->
    <CircularMenu />

    <transition name="slide-x">
      <Sideblock v-if="isDesktopSideblockOpen" :theme="props.theme">
        <template #header>
          <RouterLink :to="{ name: 'index' }" class="sidebar-block-logo">
            <AnimatedLogo width="36px" />
          </RouterLink>
          <h3>Vuero</h3>
        </template>
        <template #links>
          <li>
            <a class="single-link" href="/admin-dashboards-personal-1.html">
              <span class="icon">
                <i data-feather="grid"></i>
              </span>
              Dashboard
            </a>
          </li>
          <li>
            <a class="single-link" href="/admin-dashboards-personal-1.html">
              <span class="icon">
                <i data-feather="briefcase"></i>
              </span>
              Projects
            </a>
          </li>
          <li>
            <a class="single-link" href="/admin-dashboards-personal-1.html">
              <span class="icon">
                <i data-feather="message-circle"></i>
              </span>
              Messages
              <span class="badge">3</span>
            </a>
          </li>
          <li>
            <a class="single-link" href="/admin-dashboards-personal-1.html">
              <span class="icon">
                <i data-feather="book"></i>
              </span>
              Collections
            </a>
          </li>
          <li>
            <a class="single-link" href="/admin-dashboards-personal-1.html">
              <span class="icon">
                <i data-feather="users"></i>
              </span>
              Users
            </a>
          </li>
          <li class="has-children">
            <div class="collapse-wrap">
              <a href="javascript:void(0);" class="parent-link">
                <div class="icon">
                  <i data-feather="briefcase"></i>
                </div>
                Reports
                <i data-feather="chevron-right"></i
              ></a>
            </div>
            <ul>
              <li>
                <a class="is-submenu" href="/admin-dashboards-personal-1.html">
                  <i class="lnil lnil-analytics-alt-1"></i>
                  <span>Financial report</span>
                </a>
              </li>
              <li>
                <a class="is-submenu" href="/admin-dashboards-personal-2.html">
                  <i class="lnil lnil-pie-chart"></i>
                  <span>Social report</span>
                </a>
              </li>
              <li>
                <a class="is-submenu" href="/admin-dashboards-personal-3.html">
                  <i class="lnil lnil-stats-up"></i>
                  <span>Growth report</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a class="single-link" href="/wizard-v1.html">
              <span class="icon">
                <i data-feather="mail"></i>
              </span>
              Inbox
            </a>
          </li>
          <li class="divider"></li>
          <li class="has-children">
            <div class="collapse-wrap">
              <a href="javascript:void(0);" class="parent-link">
                <div class="icon">
                  <i data-feather="settings"></i>
                </div>
                Settings
                <i data-feather="chevron-right"></i
              ></a>
            </div>
            <ul>
              <li>
                <a class="is-submenu" href="/admin-dashboards-personal-1.html">
                  <i class="lnil lnil-home"></i>
                  <span>General</span>
                </a>
              </li>
              <li>
                <a class="is-submenu" href="/admin-dashboards-personal-2.html">
                  <i class="lnil lnil-lock-alt"></i>
                  <span>Security</span>
                </a>
              </li>
              <li>
                <a class="is-submenu" href="/admin-dashboards-personal-3.html">
                  <i class="lnil lnil-coin"></i>
                  <span>Transactions</span>
                </a>
              </li>
            </ul>
          </li>
        </template>

        <template #bottom-links>
          <UserProfileDropdown up />
          <LayoutSwitcher />

          <a
            class="search-link"
            aria-label="Display search panel"
            data-content="Search"
            tabindex="0"
            @keydown.space.prevent="panels.setActive('search')"
            @click="panels.setActive('search')"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather-search"
            />
          </a>
        </template>
      </Sideblock>
    </transition>

    <LanguagesPanel />
    <ActivityPanel />
    <SearchPanel />
    <TaskPanel />

    <VViewWrapper full>
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
              @keydown.space.prevent="isDesktopSideblockOpen = !isDesktopSideblockOpen"
              @click="isDesktopSideblockOpen = !isDesktopSideblockOpen"
            >
              <span class="menu-toggle has-chevron">
                <span
                  :class="[isDesktopSideblockOpen && 'active']"
                  class="icon-box-toggle"
                >
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
