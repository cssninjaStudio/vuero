<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'none'
})

useTitle('Grid Cards 2 - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="grid-cards"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="214"
      data-menu-item="#layouts-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              @click="toggleSidebar('layouts')"
            >
              <span class="menu-toggle has-chevron">
                <span
                  :class="[activeSidebar !== 'none' && 'active']"
                  class="icon-box-toggle"
                >
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">Card Grid</h1>
            </div>

            <Toolbar />
          </div>

          <div class="card-grid-toolbar">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".column"
              />
              <div class="form-icon">
                <i class="iconify" data-icon="feather:search"></i>
              </div>
            </div>

            <div class="buttons">
              <div class="field h-hidden-mobile">
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>All Projects</span>
                    </div>
                    <div class="select-icon">
                      <i class="iconify" data-icon="feather:chevron-down"></i>
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Web Apps</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Mobile Apps</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Dashboards</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Landing Pages</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="button h-button is-primary is-raised">
                <span class="icon">
                  <i class="fas fa-plus"></i>
                </span>
                <span>New Project</span>
              </button>
            </div>
          </div>

          <div class="page-content-inner">
            <CardsGridV2 />
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
