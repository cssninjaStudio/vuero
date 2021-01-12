<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('Utility Promotion - Admin - Vuero')
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
              <h1 class="title is-4">Promotion</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Pronotion Page-->
            <div class="promotion-page-wrapper">
              <div class="wrapper-outer">
                <div class="wrapper-inner">
                  <div class="action-box">
                    <div class="box-content">
                      <img
                        class="light-image is-larger"
                        src="/@images/illustrations/placeholders/promotion.svg"
                        alt=""
                      />
                      <img
                        class="dark-image is-larger"
                        src="/@images/illustrations/placeholders/promotion-dark.svg"
                        alt=""
                      />
                      <h3 class="dark-inverted">
                        Empower your team to do greater things collaboratively
                      </h3>
                      <div class="price">
                        <span class="dark-inverted">99</span>
                        <span>Per Month</span>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          Skip
                        </button>
                        <button class="button h-button is-primary is-raised">
                          Upgrade
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="side-wrapper">
                  <div class="side-inner">
                    <div class="side-title">
                      <h3 class="dark-inverted">Features to make it better</h3>
                      <p>Take a look at some incredible features</p>
                    </div>

                    <div class="action-list">
                      <div class="media-flex">
                        <div
                          class="icon-wrap is-dark-primary is-dark-bg-3 is-dark-card-bordered"
                        >
                          <Icon icon="feather:check" />
                        </div>
                        <div class="flex-meta">
                          <span>Includes 8 team seats</span>
                          <p>
                            Each team member on your account can create projects
                            and tasks.
                          </p>
                        </div>
                      </div>
                      <div class="media-flex">
                        <div
                          class="icon-wrap is-dark-primary is-dark-bg-3 is-dark-card-bordered"
                        >
                          <Icon icon="feather:check" />
                        </div>
                        <div class="flex-meta">
                          <span>Integrations</span>
                          <p>
                            Add up to 5 addons to your main application to help
                            you manage.
                          </p>
                        </div>
                      </div>
                      <div class="media-flex">
                        <div
                          class="icon-wrap is-dark-primary is-dark-bg-3 is-dark-card-bordered"
                        >
                          <Icon icon="feather:check" />
                        </div>
                        <div class="flex-meta">
                          <span>Scale</span>
                          <p>
                            Your application grows in parallel of your business,
                            without any effort.
                          </p>
                        </div>
                      </div>
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
