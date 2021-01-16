<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Grid Tiles 2 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="grid-cards"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Tile Grids"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Tile Grid</h1>
            </div>

            <Toolbar />
          </div>

          <div class="tile-grid-toolbar is-webapp">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".column"
              />
              <div class="form-icon">
                <Icon icon="feather:search" />
              </div>
            </div>

            <div class="buttons">
              <div class="field h-hidden-mobile">
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>All Files</span>
                    </div>
                    <div class="select-icon">
                      <Icon icon="feather:chevron-down" />
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Recently updated</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>My Files</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Team Files</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Deprecated</span>
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
                <span>Add File</span>
              </button>
            </div>
          </div>

          <div class="page-content-inner is-webapp">
            <TilesGridV2 />
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
