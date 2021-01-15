<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Dashboards Personal 1 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-dashboards"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Dashboard"
      data-naver-offset="150"
      data-menu-item="#dashboards-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Personal Dashboard</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Personal Dashboard V1-->
            <div class="personal-dashboard personal-dashboard-v1 is-webapp">
              <!--Header-->
              <div class="dashboard-header">
                <div class="h-avatar is-large">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="start">
                  <h3>Welcome back, Erik Kovalsky</h3>
                  <p>
                    We're very happy to see you again on your personal
                    dashboard.
                  </p>
                </div>
                <div class="end">
                  <button class="button h-button is-dark-outlined">
                    View Reports
                  </button>
                  <button class="button h-button is-primary is-elevated">
                    Manage Store
                  </button>
                </div>
              </div>

              <!--Body-->
              <div class="dashboard-body">
                <div class="columns is-multiline">
                  <!--Card-->
                  <div class="column is-6">
                    <div class="dashboard-card">
                      <h4 class="dark-inverted">Your Quick Stats</h4>

                      <div class="quick-stats">
                        <div class="quick-stats-inner">
                          <!--Stat-->
                          <div class="quick-stat">
                            <div class="media-flex-center">
                              <div class="h-icon is-purple is-rounded">
                                <i class="lnil lnil-analytics-alt-1"></i>
                              </div>
                              <div class="flex-meta">
                                <span>2,870</span>
                                <span>Sales this month</span>
                              </div>
                            </div>
                          </div>
                          <!--Stat-->
                          <div class="quick-stat">
                            <div class="media-flex-center">
                              <div class="h-icon is-orange is-rounded">
                                <i class="lnil lnil-handshake"></i>
                              </div>
                              <div class="flex-meta">
                                <span>131</span>
                                <span>New users</span>
                              </div>
                            </div>
                          </div>
                          <!--Stat-->
                          <div class="quick-stat">
                            <div class="media-flex-center">
                              <div class="h-icon is-green is-rounded">
                                <i class="lnil lnil-diamond-alt"></i>
                              </div>
                              <div class="flex-meta">
                                <span>$398,49</span>
                                <span>Earned today</span>
                              </div>
                            </div>
                          </div>
                          <!--Stat-->
                          <div class="quick-stat">
                            <div class="media-flex-center">
                              <div class="h-icon is-info is-rounded">
                                <i class="lnil lnil-bank"></i>
                              </div>
                              <div class="flex-meta">
                                <span>$6542,31</span>
                                <span>Total balance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Card-->
                  <div class="column is-6">
                    <div class="dashboard-card">
                      <div id="customers-chart"></div>
                    </div>
                  </div>

                  <!--Card-->
                  <div class="column is-4">
                    <div class="dashboard-card is-upgrade">
                      <i class="lnil lnil-crown-alt-1"></i>
                      <div class="cta-content">
                        <h4>Hey Erik, you're doing great.</h4>
                        <p class="white-text">
                          Start using our team and project management tools
                        </p>
                        <a class="link inverted-text">Learn More</a>
                      </div>
                    </div>
                  </div>

                  <!--Card-->
                  <div class="column is-4">
                    <div class="dashboard-card is-gauge">
                      <div class="people">
                        <div class="h-avatar">
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
                        <div class="h-avatar">
                          <span
                            class="avatar is-fake is-h-purple"
                            data-user-popover="35"
                          >
                            <span>SC</span>
                          </span>
                        </div>
                        <div class="h-avatar">
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
                      <div id="team-gauge"></div>
                    </div>
                  </div>

                  <!--Card-->
                  <div class="column is-4">
                    <div class="dashboard-card">
                      <div id="profit-chart"></div>
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
@import '../../assets/scss/pages/dashboards/_personal.scss';
</style>
