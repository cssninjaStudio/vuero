<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('Onboarding Page 5 - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-onboarding"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
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
              <h1 class="title is-4">Onboarding</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <div class="standard-onboarding">
              <div class="title-wrap">
                <p>Looks like you're new here</p>
                <h2>Welcome to Vuero. What would you like to do?</h2>
              </div>

              <div class="onboarding-wrap">
                <div class="onboarding-wrap-inner">
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set6-1.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set6-1-dark.svg"
                      alt=""
                    />
                    <h3>Configure Shop</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Recte dicis; Ita enim vivunt quidam, ut eorum vita
                      refellatur oratio. Sed tament.
                    </p>
                    <div class="button-wrap">
                      <a class="button h-button is-primary is-elevated"
                        >Configure</a
                      >
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set6-2.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set6-2-dark.svg"
                      alt=""
                    />
                    <h3>Configure Warehouse</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Recte dicis; Ita enim vivunt quidam, ut eorum vita
                      refellatur oratio. Sed tament.
                    </p>
                    <div class="button-wrap">
                      <a class="button h-button is-primary is-elevated"
                        >Configure</a
                      >
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set6-3.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set6-3-dark.svg"
                      alt=""
                    />
                    <h3>Manage Products</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Recte dicis; Ita enim vivunt quidam, ut eorum vita
                      refellatur oratio. Sed tament.
                    </p>
                    <div class="button-wrap">
                      <a class="button h-button is-primary is-elevated"
                        >Manage</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_onboarding.scss';
</style>