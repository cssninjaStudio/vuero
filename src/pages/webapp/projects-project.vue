<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { ref } from 'vue'

import { activePanel } from '/@src/composition/state/ui/activePanelState'
import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'project' | 'team' | 'tasks'>('project')

useTitle('Projects Project - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-project"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Project"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Project</h1>
            </div>

            <Toolbar />
          </div>

          <ProjectViewV1
            :active-tab="activeTab"
            class="page-content-inner is-webapp"
          />
        </div>
      </div>
    </div>

    <TaskPanel />
  </WebappLayout>
</template>
