<script setup lang="ts">
import type { NavsearchItem } from '/@src/components/layouts/navsearch/navsearch.types'

import type { VAvatarProps } from '/@src/components/base/VAvatar.vue'
import type { UserPopover } from '/@src/models/users'
import { popovers } from '/@src/data/users/userPopovers'
import { useViewWrapper } from '/@src/stores/viewWrapper'

function getAvatarData(user: UserPopover): any {
  return {
    picture: user.avatar,
    initials: user.initials,
    color: user.color,
  }
}

const viewWrapper = useViewWrapper()

const search = ref('')
const suggestions = computed(() => {
  if (!search.value) {
    return []
  }

  const searchRe = new RegExp(search.value, 'i')

  return Object.values(popovers).filter((user) => {
    return (
      user.fullName.match(searchRe) || user.position.match(searchRe)
    )
  })
})

const users = ref<VAvatarProps[]>([
  {
    picture: '/demo/avatars/12.jpg',
    initials: 'JS',
    color: 'info',
  },
  {
    picture: '/demo/avatars/22.jpg',
    initials: 'JH',
    color: 'info',
  },
  {
    picture: '/demo/avatars/40.jpg',
    initials: 'SM',
    color: 'h-purple',
  },
])

const links = ref<NavsearchItem[]>([
  {
    label: 'Dashboard',
    to: '/navbar/dashboards',
  },
  {
    label: 'Projects',
    to: '/navbar/layouts/projects-projects-1',
  },
  {
    label: 'Kanban',
    to: '/navbar/layouts/kanban-board',
  },
  {
    label: 'Reports',
    to: '/navbar/dashboards/company',
  },
  {
    label: 'Settings',
    to: '/navbar/layouts/profile-settings',
  },
  {
    label: 'Map',
    to: '/navbar/maps-1',
  },
])
</script>

<template>
  <NavsearchLayout :links>
    <slot />

    <template #logo>
      <RouterLink
        to="/"
      >
        <AnimatedLogo
          width="38px"
          height="38px"
        />
      </RouterLink>
    </template>

    <template #title>
      <ProjectsQuickDropdown />
      <h1 class="title is-6">
        {{ viewWrapper.pageTitle }}
      </h1>
    </template>

    <template #title-mobile>
      <div class="is-flex is-align-items-center">
        <ProjectsQuickDropdown />

        <h1 class="title is-4">
          {{ viewWrapper.pageTitle }}
        </h1>
      </div>
    </template>

    <template #search>
      <NavsearchInput
        v-slot="{ item }"
        v-model="search"
        :suggestions
        @select="(item) => search = ''"
      >
        <VAvatar v-bind="getAvatarData(item)" />
        <div class="meta">
          <span>{{ item.username }}</span>
          <span>{{ item.position }}</span>
        </div>
      </NavsearchInput>
    </template>

    <template #subnav-start>
      <span>February 22, 2021</span>
    </template>
    <template #subnav-end>
      <VAvatarStack
        :avatars="users"
        :limit="3"
        size="small"
      />
      <ToolbarUserInvite />
    </template>

    <template #toolbar>
      <LayoutSwitcher class="is-hidden-mobile" />
      <ToolbarNotification />
      <ToolbarActivity />
      <ToolbarThemeToggle />
      <ToolbarLanguage />
      <ToolbarUserProfile right class="ml-2 is-hidden-mobile" />
    </template>

    <template #toolbar-mobile>
      <ToolbarNotificationMobile />
      <ToolbarUserProfile right />
    </template>

    <template #extra>
      <PanelLanguages />
      <PanelActivity />
      <PanelSearch />
      <PanelTask />

      <ClientOnly>
        <VReloadPrompt app-name="Vuero" />
      </ClientOnly>
    </template>
  </NavsearchLayout>
</template>
