<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Dashboards Charts Apex - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-apex-charts"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Apex Charts"
      data-naver-offset="150"
      data-menu-item="#dashboards-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Apex Charts</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner apex-dashboard p-t-30">
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
  </WebappLayout>
</template>
