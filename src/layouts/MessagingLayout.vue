<script setup lang="ts">
import type { SidebarTheme } from '/@src/components/navigation/desktop/Sidebar.vue'
import { usePanels } from '/@src/stores/panels'

const props = withDefaults(
  defineProps<{
    theme?: SidebarTheme
  }>(),
  {
    theme: 'default',
  },
)

const panels = usePanels()
const isMobileSidebarOpen = ref(false)
</script>

<template>
  <div class="sidebar-layout">
    <div class="app-overlay" />

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
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:activity"
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/sidebar/layouts">
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:grid"
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/">
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:box"
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/">
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:cpu"
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/messaging-v1">
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:message-circle"
            />
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
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:search"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:settings"
            />
          </a>
        </li>
      </template>
    </MobileSidebar>

    <Sidebar :theme="props.theme">
      <template #links>
        <!-- Dashboards -->
        <li>
          <RouterLink to="/sidebar/dashboards">
            <iconify-icon
              aria-hidden="true"
              class="iconify sidebar-svg"
              icon="lucide:activity"
            />
          </RouterLink>
        </li>

        <!-- Layouts -->
        <li>
          <RouterLink to="/sidebar/layouts">
            <iconify-icon
              aria-hidden="true"
              class="iconify sidebar-svg"
              icon="lucide:grid"
            />
          </RouterLink>
        </li>

        <!-- Elements -->
        <li>
          <RouterLink to="/elements/">
            <iconify-icon
              aria-hidden="true"
              class="iconify sidebar-svg"
              icon="lucide:box"
            />
          </RouterLink>
        </li>

        <!-- Components -->
        <li>
          <RouterLink to="/components/">
            <iconify-icon
              aria-hidden="true"
              class="iconify sidebar-svg"
              icon="lucide:cpu"
            />
          </RouterLink>
        </li>

        <!-- Messaging -->
        <li>
          <RouterLink to="/messaging-v1">
            <iconify-icon
              aria-hidden="true"
              class="iconify sidebar-svg"
              icon="lucide:message-circle"
            />
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
            <iconify-icon
              aria-hidden="true"
              class="iconify sidebar-svg"
              icon="lucide:search"
            />
          </a>
          <a
            class="is-hidden is-inactive"
            tabindex="0"
            role="button"
            @keydown.space.prevent="panels.close()"
            @click="panels.close()"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify sidebar-svg"
              icon="lucide:x"
            />
          </a>
        </li>

        <!-- Settings -->
        <li class="is-hidden-tablet">
          <RouterLink
            id="open-settings"
            to="/sidebar/layouts/profile-settings"
            data-content="Settings"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify sidebar-svg"
              icon="lucide:settings"
            />
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

    <slot :is-mobile-sidebar-open="isMobileSidebarOpen" />
  </div>
</template>
