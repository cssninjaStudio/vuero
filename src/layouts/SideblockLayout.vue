<script setup lang="ts">
import type { SideblockTheme } from '/@src/components/navigation/desktop/Sideblock.vue'
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
const openSideblockLinks = ref('')
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
      :is-open="isMobileSideblockOpen"
      @toggle="isMobileSideblockOpen = !isMobileSideblockOpen"
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
    </Transition>

    <!-- Desktop navigation -->
    <CircularMenu />

    <Transition name="slide-x">
      <Sideblock v-if="isDesktopSideblockOpen" :theme="props.theme">
        <template #header>
          <RouterLink to="/" class="sidebar-block-logo">
            <AnimatedLogo width="36px" />
          </RouterLink>
          <h3>Vuero</h3>
        </template>
        <template #links>
          <li>
            <RouterLink to="/sidebar/dashboards" class="single-link">
              <span class="icon">
                <i class="iconify" data-icon="feather:grid"></i>
              </span>
              Dashboard
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/sidebar/dashboards/personal-2" class="single-link">
              <span class="icon">
                <i class="iconify" data-icon="feather:briefcase"></i>
              </span>
              Projects
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/sidebar/dashboards/human-ressources" class="single-link">
              <span class="icon">
                <i class="iconify" data-icon="feather:message-circle"></i>
              </span>
              Messages
              <span class="badge">3</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/sidebar/dashboards/personal-3" class="single-link">
              <span class="icon">
                <i class="iconify" data-icon="feather:book"></i>
              </span>
              Collections
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/sidebar/layouts/profile-view" class="single-link">
              <span class="icon">
                <i class="iconify" data-icon="feather:users"></i>
              </span>
              Users
            </RouterLink>
          </li>

          <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="reports">
            <template #header>
              <div class="icon">
                <i class="iconify" data-icon="feather:briefcase"></i>
              </div>
              Reports
              <i
                aria-hidden="true"
                class="iconify rtl-hidden"
                data-icon="feather:chevron-right"
              />
              <i
                aria-hidden="true"
                class="iconify ltr-hidden"
                data-icon="feather:chevron-left"
              />
            </template>
            <RouterLink to="/sidebar/dashboards/analytics" class="is-submenu">
              <i class="lnil lnil-analytics-alt-1"></i>
              <span>Financial report</span>
            </RouterLink>
            <RouterLink to="/sidebar/dashboards/company" class="is-submenu">
              <i class="lnil lnil-pie-chart"></i>
              <span>Stocks report</span>
            </RouterLink>
            <RouterLink to="/sidebar/layouts/list-view-3" class="is-submenu">
              <i class="lnil lnil-stats-up"></i>
              <span>Growth report</span>
            </RouterLink>
          </VCollapseLinks>
          <li>
            <RouterLink to="/inbox" class="single-link">
              <span class="icon">
                <i class="iconify" data-icon="feather:mail"></i>
              </span>
              Inbox
            </RouterLink>
          </li>
          <li class="divider"></li>

          <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="settings">
            <template #header>
              <div class="icon">
                <i aria-hidden="true" class="iconify" data-icon="feather:settings"></i>
              </div>
              Settings
              <i
                aria-hidden="true"
                class="iconify rtl-hidden"
                data-icon="feather:chevron-right"
              />
              <i
                aria-hidden="true"
                class="iconify ltr-hidden"
                data-icon="feather:chevron-left"
              />
            </template>
            <RouterLink to="/sidebar/layouts" class="is-submenu">
              <i class="lnil lnil-home"></i>
              <span>General</span>
            </RouterLink>
            <RouterLink to="/sidebar/dashboards/stocks" class="is-submenu">
              <i class="lnil lnil-lock-alt"></i>
              <span>Security</span>
            </RouterLink>
            <RouterLink to="/sidebar/dashboards/sales" class="is-submenu">
              <i class="lnil lnil-coin"></i>
              <span>Transactions</span>
            </RouterLink>
          </VCollapseLinks>

          <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="starters">
            <template #header>
              <div class="icon">
                <i aria-hidden="true" class="iconify" data-icon="feather:zap"></i>
              </div>
              Starters
              <i
                aria-hidden="true"
                class="iconify rtl-hidden"
                data-icon="feather:chevron-right"
              />
              <i
                aria-hidden="true"
                class="iconify ltr-hidden"
                data-icon="feather:chevron-left"
              />
            </template>

            <RouterLink to="/starters/sidebar-blank-page-1" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout"></i>
              <span>Regular Sidebar</span>
            </RouterLink>
            <RouterLink to="/starters/sidebar-blank-page-2" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout"></i>
              <span>Curved Sidebar</span>
            </RouterLink>
            <RouterLink to="/starters/sidebar-blank-page-3" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout"></i>
              <span>Colored Sidebar</span>
            </RouterLink>
            <RouterLink to="/starters/sidebar-blank-page-4" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout"></i>
              <span>Curved Colored</span>
            </RouterLink>
            <RouterLink to="/starters/sidebar-blank-page-4" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout"></i>
              <span>Curved Colored Sidebar</span>
            </RouterLink>
            <RouterLink to="/starters/sidebar-blank-page-5" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout"></i>
              <span>Labels Sidebar</span>
            </RouterLink>
            <RouterLink to="/starters/sidebar-blank-page-6" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout"></i>
              <span>Labels Hover Sidebar</span>
            </RouterLink>
            <RouterLink to="/starters/sidebar-blank-page-7" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout"></i>
              <span>Float Sidebar</span>
            </RouterLink>

            <hr class="navbar-divider" />

            <RouterLink to="/starters/sideblock-blank-page-1" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout"></i>
              <span>Regular Sideblock</span>
              <VTag
                class="ml-2"
                label="v2.2"
                color="primary"
                size="tiny"
                outlined
                curved
              />
            </RouterLink>
            <RouterLink to="/starters/sideblock-blank-page-2" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout"></i>
              <span>Curved Sideblock</span>
              <VTag
                class="ml-2"
                label="v2.2"
                color="primary"
                size="tiny"
                outlined
                curved
              />
            </RouterLink>
            <RouterLink to="/starters/sideblock-blank-page-3" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout"></i>
              <span>Colored Sideblock</span>
              <VTag
                class="ml-2"
                label="v2.2"
                color="primary"
                size="tiny"
                outlined
                curved
              />
            </RouterLink>
            <RouterLink to="/starters/sideblock-blank-page-4" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout"></i>
              <span>Curved Colored</span>
              <VTag
                class="ml-2"
                label="v2.2"
                color="primary"
                size="tiny"
                outlined
                curved
              />
            </RouterLink>

            <hr class="navbar-divider" />

            <RouterLink to="/starters/navbar-blank-page-1" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
              <span>Regular Navbar</span>
            </RouterLink>
            <RouterLink to="/starters/navbar-blank-page-2" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
              <span>Fading Navbar</span>
            </RouterLink>
            <RouterLink to="/starters/navbar-blank-page-3" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
              <span>Colored Navbar</span>
            </RouterLink>
            <RouterLink to="/starters/navbar-blank-page-4" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
              <span>Dropdown Navbar</span>
            </RouterLink>
            <RouterLink to="/starters/navbar-blank-page-5" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
              <span>Colored Dropdown</span>
            </RouterLink>
            <RouterLink to="/starters/navbar-blank-page-6" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
              <span>Clean Navbar</span>
            </RouterLink>
            <RouterLink to="/starters/navbar-blank-page-7" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
              <span>Clean Center Navbar</span>
            </RouterLink>
            <RouterLink to="/starters/navbar-blank-page-8" class="is-submenu">
              <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
              <span>Clean Fade Navbar</span>
            </RouterLink>
          </VCollapseLinks>
        </template>

        <template #bottom-links>
          <UserProfileDropdown up />
          <LayoutSwitcher />

          <a
            class="search-link"
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
        </template>
      </Sideblock>
    </Transition>

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
              role="button"
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
