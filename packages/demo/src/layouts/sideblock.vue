<script setup lang="ts">
import type { SideblockItem } from '/@src/components/layouts/sideblock/sideblock.types'

const links = ref<SideblockItem[]>([
  {
    type: 'link',
    label: 'Dashboard',
    icon: 'lucide:grid',
    to: '/sidebar/dashboards',
  },
  {
    type: 'link',
    label: 'Projects',
    icon: 'lucide:briefcase',
    to: '/sidebar/dashboards/personal-2',
  },
  {
    type: 'link',
    label: 'Messages',
    icon: 'lucide:message-circle',
    badge: 3,
    to: '/sidebar/dashboards/human-ressources',
  },
  {
    type: 'link',
    label: 'Collections',
    icon: 'lucide:book',
    to: '/sidebar/dashboards/personal-3',
  },
  {
    type: 'link',
    label: 'Users',
    icon: 'lucide:users',
    to: '/sidebar/layouts/profile-view',
  },
  {
    type: 'collapse',
    label: 'Reports',
    id: 'reports',
    icon: 'lucide:briefcase',
    children: [
      {
        to: '/sidebar/dashboards/analytics',
        label: 'Financial report',
        icon: 'lnil lnil-analytics-alt-1',
      },
      {
        to: '/sidebar/dashboards/company',
        label: 'Stocks report',
        icon: 'lnil lnil-pie-chart',
      },
      {
        to: '/sidebar/layouts/list-view-3',
        label: 'Growth report',
        icon: 'lnil lnil-stats-up',
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    type: 'collapse',
    id: 'settings',
    label: 'Settings',
    icon: 'lucide:settings',
    children: [
      {
        to: '/sidebar/layouts',
        label: 'General',
        icon: 'lnil lnil-home',
      },
      {
        to: '/sidebar/dashboards/stocks',
        label: 'Security',
        icon: 'lnil lnil-lock-alt',
      },
      {
        to: '/sidebar/dashboards/sales',
        label: 'Transactions',
        icon: 'lnil lnil-coin',
      },
    ],
  },
  {
    type: 'collapse',
    id: 'starters',
    label: 'Starters',
    icon: 'lucide:zap',
    children: [
      {
        to: '/starters/sidebar-blank-page-1',
        label: 'Regular Sidebar',
        icon: 'lnil lnil-layout',
      },
      {
        to: '/starters/sidebar-blank-page-2',
        label: 'Curved Sidebar',
        icon: 'lnil lnil-layout',
      },
      {
        to: '/starters/sidebar-blank-page-3',
        label: 'Colored Sidebar',
        icon: 'lnil lnil-layout',
      },
      {
        to: '/starters/sidebar-blank-page-4',
        label: 'Curved Colored',
        icon: 'lnil lnil-layout',
      },
      {
        to: '/starters/sidebar-blank-page-4',
        label: 'Curved Colored Sidebar',
        icon: 'lnil lnil-layout',
      },
      {
        to: '/starters/sidebar-blank-page-5',
        label: 'Labels Sidebar',
        icon: 'lnil lnil-layout',
      },
      {
        to: '/starters/sidebar-blank-page-6',
        label: 'Labels Hover Sidebar',
        icon: 'lnil lnil-layout',
      },
      {
        to: '/starters/sidebar-blank-page-7',
        label: 'Float Sidebar',
        icon: 'lnil lnil-layout',
      },
      {
        to: '/starters/sideblock-blank-page-1',
        label: 'Regular Sideblock',
        icon: 'lnil lnil-layout',
      },
      {
        to: '/starters/sideblock-blank-page-2',
        label: 'Curved Sideblock',
        icon: 'lnil lnil-layout',
      },
      {
        to: '/starters/sideblock-blank-page-3',
        label: 'Colored Sideblock',
        icon: 'lnil lnil-layout',
      },
      {
        to: '/starters/sideblock-blank-page-4',
        label: 'Curved Colored',
        icon: 'lnil lnil-layout',
      },
      {
        to: '/starters/navbar-blank-page-1',
        label: 'Regular Navbar',
        icon: 'lnil lnil-layout-alt',
      },
      {
        to: '/starters/navbar-blank-page-2',
        label: 'Fading Navbar',
        icon: 'lnil lnil-layout-alt',
      },
      {
        to: '/starters/navbar-blank-page-3',
        label: 'Colored Navbar',
        icon: 'lnil lnil-layout-alt',
      },
      {
        to: '/starters/navbar-blank-page-4',
        label: 'Dropdown Navbar',
        icon: 'lnil lnil-layout-alt',
      },
      {
        to: '/starters/navbar-blank-page-5',
        label: 'Colored Dropdown',
        icon: 'lnil lnil-layout-alt',
      },
      {
        to: '/starters/navbar-blank-page-6',
        label: 'Clean Navbar',
        icon: 'lnil lnil-layout-alt',
      },
      {
        to: '/starters/navbar-blank-page-7',
        label: 'Clean Center Navbar',
        icon: 'lnil lnil-layout-alt',
      },
      {
        to: '/starters/navbar-blank-page-8',
        label: 'Clean Fade Navbar',
        icon: 'lnil lnil-layout-alt',
      },
    ],
  },
])
</script>

<template>
  <SideblockLayout :links class="my-layout">
    <!-- Propagating the context to the default slot -->
    <template #default="context">
      <slot v-bind="context" />
    </template>

    <template #logo>
      <RouterLink to="/">
        <AnimatedLogo width="36px" />
      </RouterLink>

      <h3 class="is-hidden-mobile ml-2">
        Vuero
      </h3>
    </template>

    <template #toolbar>
      <ToolbarThemeToggle />
      <ToolbarLanguage />
      <ToolbarNotification />
      <ToolbarActivity />
    </template>

    <template #toolbar-mobile>
      <ToolbarNotificationMobile />
      <ToolbarUserProfile />
    </template>

    <template #sideblock-end>
      <ToolbarUserProfile end />
      <LayoutSwitcher class="search-link" />
      <ToolbarSearch />
    </template>

    <template #extra>
      <CircularMenu />

      <PanelLanguages />
      <PanelActivity />
      <PanelSearch />
      <PanelTask />

      <ClientOnly>
        <VReloadPrompt app-name="Vuero" />
      </ClientOnly>
    </template>
  </SideblockLayout>
</template>
