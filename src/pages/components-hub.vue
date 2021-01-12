<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Components - Hub - Vuero')
</script>

<template>
  <DefaultLayout>
    <ComponentsSidebar />
    <ComponentsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-home"
      class="view-wrapper"
      data-sidebar-open
      data-naver-offset="342"
      data-menu-item="#components-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              data-sidebar="components-sidebar"
            >
              <span class="menu-toggle has-chevron">
                <span class="icon-box-toggle">
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">Components</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner card-hub">
            <div class="columns">
              <div class="column is-12">
                <div class="hub-wrapper">
                  <div class="hub-header has-text-centered">
                    <div class="h-avatar is-xl">
                      <img
                        class="avatar"
                        src="/@images/avatars/svg/huro-2.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/photo/demo/misc/buoy.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <h3 class="title is-4 is-narrow is-thin">
                      Vuero Components
                    </h3>
                    <p class="light-text">
                      This is the Vuero components library with detailed code
                      examples.
                    </p>
                  </div>

                  <div class="hub-body">
                    <div class="body-inner">
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Avatars
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero avatar styles. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/avatar.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/avatar-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'components-avatars' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Accordions
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero accordion styles. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/accordion.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/accordion-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink
                            :to="{ name: 'components-accordion-basic' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Breadcrumbs
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero breadcrumb styles.
                              Code examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/breadcrumb.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/breadcrumb-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'components-breadcrumb' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Dropdowns
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero dropdown styles. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/dropdown.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/dropdown-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'components-dropdown' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Icon Box
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero icon boxes styles.
                              Code examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/icon-box.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/icon-box-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'components-icon-box' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Messages
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero messages styles. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/message.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/message-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'components-messages' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">Modals</h3>
                            <p class="light-text">
                              Get familiar with the Vuero modal styles. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/modal.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/modal-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'components-modal' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Progress
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero progress bar styles.
                              Code examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/progress.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/progress-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'components-progress' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">Tabs</h3>
                            <p class="light-text">
                              Get familiar with the Vuero nav tabs styles. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/tabs.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/tabs-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'components-tabs-regular' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Flex Table
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero flex table styles.
                              Code examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/table.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/table-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'components-table-flex' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">Snacks</h3>
                            <p class="light-text">
                              Get familiar with the Vuero snacks styles. Code
                              examples included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/snacks.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/snacks-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink :to="{ name: 'components-snacks' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                      <!--Component-->
                      <div class="hub-card">
                        <div class="hub-card-body">
                          <div class="inner-content">
                            <h3 class="title is-5 is-narrow is-thin">
                              Plugins
                            </h3>
                            <p class="light-text">
                              Get familiar with the Vuero plugins. Code examples
                              included.
                            </p>
                          </div>
                          <img
                            class="light-image"
                            src="/@images/illustrations/components/plugins.svg"
                            alt=""
                          />
                          <img
                            class="dark-image"
                            src="/@images/illustrations/components/plugins-dark.svg"
                            alt=""
                          />
                        </div>
                        <div class="hub-card-foot">
                          <RouterLink
                            :to="{ name: 'components-plugins-autocomplete' }"
                            >Get Started</RouterLink
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="hub-footer">
                    <p><a class="action-link">Online Documentation</a></p>
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
