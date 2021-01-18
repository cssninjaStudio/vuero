<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('List View 1 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-project"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="List View"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">List View</h1>
            </div>

            <Toolbar />
          </div>

          <div class="list-view-toolbar is-webapp">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".list-view-item"
              />
              <div class="form-icon">
                <i class="iconify" data-icon="feather:search"></i>
              </div>
            </div>

            <div class="list-info">
              <span>55 records found</span>
            </div>

            <div class="buttons">
              <button class="button h-button is-primary is-elevated">
                <span class="icon">
                  <i class="fas fa-check"></i>
                </span>
                <span>Approve</span>
              </button>
            </div>
          </div>

          <div class="page-content-inner is-webapp">
            <ViewListV1 />
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
