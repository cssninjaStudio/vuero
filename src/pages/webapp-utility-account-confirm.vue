<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Utility Account Confirm - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-onboarding"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Confirm Account"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
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
  </WebappLayout>
</template>
