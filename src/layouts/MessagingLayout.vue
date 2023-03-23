<script setup lang="ts">
import type { SidebarTheme } from '/@src/components/navigation/desktop/Sidebar.vue'
import { usePanels } from '/@src/stores/panels'

const props = withDefaults(
  defineProps<{
    theme?: SidebarTheme
  }>(),
  {
    theme: 'default',
  }
)

const panels = usePanels()
const isMobileSidebarOpen = ref(false)
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
          <RouterLink to="/sidebar/dashboards">
            <i aria-hidden="true" class="iconify" data-icon="feather:activity"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/sidebar/layouts">
            <i aria-hidden="true" class="iconify" data-icon="feather:grid"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/">
            <i aria-hidden="true" class="iconify" data-icon="feather:box"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/">
            <i aria-hidden="true" class="iconify" data-icon="feather:cpu"></i>
          </RouterLink>
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
            tabindex="0"
            role="button"
            @keydown.space.prevent="panels.setActive('search')"
            @click="panels.setActive('search')"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i aria-hidden="true" class="iconify" data-icon="feather:settings"></i>
          </a>
        </li>
      </template>
    </MobileSidebar>

    <Sidebar :theme="props.theme">
      <template #links>
        <!-- Dashboards -->
        <li>
          <RouterLink to="/sidebar/dashboards">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:activity"
            ></i>
          </RouterLink>
        </li>

        <!-- Layouts -->
        <li>
          <RouterLink to="/sidebar/layouts">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:grid"
            ></i>
          </RouterLink>
        </li>

        <!-- Elements -->
        <li>
          <RouterLink to="/elements/">
            <i aria-hidden="true" class="iconify sidebar-svg" data-icon="feather:box"></i>
          </RouterLink>
        </li>

        <!-- Components -->
        <li>
          <RouterLink to="/components/">
            <i aria-hidden="true" class="iconify sidebar-svg" data-icon="feather:cpu"></i>
          </RouterLink>
        </li>

        <!-- Messaging -->
        <li>
          <RouterLink to="/messaging-v1">
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
        <li class="right-panel-trigger is-hidden-tablet">
          <a
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
        <li class="is-hidden-tablet">
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

    <LanguagesPanel />
    <ActivityPanel />
    <SearchPanel />

    <slot :is-mobile-sidebar-open="isMobileSidebarOpen"></slot>
  </div>
</template>
