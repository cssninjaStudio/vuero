<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('Dashboard Charts Apex - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <GenericSidebar />
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-home"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="150"
      data-menu-item="#home-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              @click="toggleSidebar('home')"
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
              <h1 class="title is-4">Apex Charts</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner apex-dashboard">
            <div class="columns is-multiline">
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-1"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-2"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-4"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-5"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-6"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-7"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-8"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-9"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-10"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-11"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-12"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-13"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-14"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-15"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-16"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-17"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-18"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-19"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-20"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-21"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-22"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="apex-chart-23"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
