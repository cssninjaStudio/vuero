<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('Utility Account Confirm - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
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
              <h1 class="title is-4">Confirm Account</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Confirm Accpount-->
            <div class="confirm-account-wrapper">
              <div class="wrapper-inner">
                <div class="action-box">
                  <div class="box-content">
                    <img
                      class="light-image"
                      src="/@images/illustrations/placeholders/launch.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/placeholders/launch-dark.svg"
                      alt=""
                    />
                    <h3 class="dark-inverted">Please confirm your account</h3>
                    <p>
                      Hey Erik, It would be really cool if you could give us a
                      hand on this project. There are a lot of tasks popping out
                      every day and I feel the team is getting a bit
                      overwhelmed. We'd love to have you board.
                    </p>
                    <div class="buttons">
                      <button class="button h-button is-primary is-raised">
                        Confirm Account
                      </button>
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
