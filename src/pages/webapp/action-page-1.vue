<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Action Page 1 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-onboarding"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Action Page"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Action Page</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Action Page-->
            <div class="action-page-wrapper action-page-v1">
              <div class="wrapper-inner">
                <div class="action-box">
                  <div class="box-content">
                    <div class="h-avatar is-big">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/16.jpg"
                        alt=""
                        data-user-popover="16"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/photo/demo/apps/9.png"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <h3 class="dark-inverted">
                      Jason G. has invited you to the
                      <span class="is-dark-primary"
                        >Banking Solution Website</span
                      >
                      project.
                    </h3>
                    <div
                      class="sender-message is-dark-card-bordered is-dark-bg-4"
                    >
                      <h4 class="dark-inverted">Message from Jason</h4>
                      <p>
                        Hey Erik, It would be really cool if you could give us a
                        hand on this project. There are a lot of tasks popping
                        out every day and I feel the team is getting a bit
                        overwhelmed. We'd love to have you board.
                      </p>
                    </div>
                    <div class="people-wrap">
                      <div class="people">
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/21.jpg"
                            alt=""
                            data-user-popover="19"
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="h-avatar is-small">
                          <span
                            class="avatar is-fake is-h-purple"
                            data-user-popover="35"
                          >
                            <span>SC</span>
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/39.jpg"
                            alt=""
                            data-user-popover="33"
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                      </div>
                      <div class="people-text">
                        <p>And 5 others are already members of this project</p>
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="button h-button is-dark-outlined">
                        Decline
                      </button>
                      <button class="button h-button is-primary is-raised">
                        Accept
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

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_subpages.scss';
</style>
