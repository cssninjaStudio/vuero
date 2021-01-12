<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('Dashboard Personal 3 - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <GenericSidebar />
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
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
              <h1 class="title is-4">Dashboard</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Personal Dashboard V3-->
            <div class="personal-dashboard personal-dashboard-v3">
              <div class="columns">
                <div class="column is-8">
                  <div class="columns is-multiline is-flex-tablet-p">
                    <div class="column is-6">
                      <div class="dashboard-card is-welcome">
                        <div class="welcome-title">
                          <h3 class="dark-inverted">Hi Erik K.</h3>
                          <p>
                            You have 6 interviews to conduct during this week.
                            Your current progress is great.
                          </p>
                        </div>
                        <div class="welcome-progress">
                          <div id="welcome-gauge" class="gauge"></div>
                          <div class="meta">
                            <span>Your Progress</span>
                            <span class="dark-inverted">Outstanding 🎉</span>
                          </div>
                        </div>
                        <div class="button-wrap">
                          <button
                            class="button h-button is-primary is-fullwidth is-big is-raised"
                          >
                            View Schedule
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="column is-6">
                      <div class="stats-wrapper">
                        <div class="columns is-multiline is-flex-tablet-p">
                          <div class="column is-6">
                            <div class="dashboard-card">
                              <div class="media-flex-center">
                                <div class="h-icon is-info is-rounded">
                                  <Icon icon="feather:clock" />
                                </div>
                                <div class="flex-meta">
                                  <span>62K</span>
                                  <span>Minutes</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="dashboard-card">
                              <div class="media-flex-center">
                                <div class="h-icon is-purple is-rounded">
                                  <Icon icon="feather:radio" />
                                </div>
                                <div class="flex-meta">
                                  <span>263</span>
                                  <span>Interviews</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="dashboard-card">
                              <div class="media-flex-center">
                                <div class="h-icon is-green is-rounded">
                                  <Icon icon="feather:user-check" />
                                </div>
                                <div class="flex-meta">
                                  <span>49</span>
                                  <span>Approved</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="dashboard-card">
                              <div class="media-flex-center">
                                <div class="h-icon is-orange is-rounded">
                                  <Icon icon="feather:frown" />
                                </div>
                                <div class="flex-meta">
                                  <span>214</span>
                                  <span>Rejected</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="people">
                          <div class="left">
                            <span class="dark-inverted">Total Interviews</span>
                            <span
                              ><a class="is-dark-primary">23 interviews</a> this
                              month</span
                            >
                          </div>
                          <div class="right">
                            <div class="avatar-stack">
                              <div class="h-avatar">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/5.jpg"
                                  alt=""
                                  data-user-popover="9"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="h-avatar">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/18.jpg"
                                  alt=""
                                  data-user-popover="7"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="h-avatar">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/26.jpg"
                                  alt=""
                                  data-user-popover="23"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="h-avatar">
                                <span class="avatar is-more">
                                  <span class="inner">
                                    <span>+20</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="column is-6 h-hidden-mobile h-hidden-tablet-p">
                      <img
                        src="/@images/illustrations/dashboards/personal/interviews.svg"
                        alt=""
                      />
                    </div>

                    <div class="column is-6">
                      <div class="dashboard-card">
                        <div id="interviews-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="column is-4">
                  <div class="widget picker-widget">
                    <div class="widget-toolbar">
                      <div class="left">
                        <a class="action-icon">
                          <Icon icon="feather:chevron-left" />
                        </a>
                      </div>
                      <div class="center">
                        <h3>October 2020</h3>
                      </div>
                      <div class="right">
                        <a class="action-icon">
                          <Icon icon="feather:chevron-right" />
                        </a>
                      </div>
                    </div>
                    <table class="calendar">
                      <thead>
                        <tr>
                          <td>Mon</td>
                          <td>Tue</td>
                          <td>Wed</td>
                          <td>Thu</td>
                          <td>Fri</td>
                          <td>Sat</td>
                          <td>Sun</td>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td class="prev-month">29</td>
                          <td class="prev-month">30</td>
                          <td class="prev-month">31</td>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                          <td>4</td>
                        </tr>

                        <tr>
                          <td>5</td>
                          <td>6</td>
                          <td>7</td>
                          <td>8</td>
                          <td>9</td>
                          <td>10</td>
                          <td>11</td>
                        </tr>

                        <tr>
                          <td>12</td>
                          <td>13</td>
                          <td>14</td>
                          <td>15</td>
                          <td>16</td>
                          <td>17</td>
                          <td class="current-day">18</td>
                        </tr>

                        <tr>
                          <td>19</td>
                          <td>20</td>
                          <td>21</td>
                          <td>22</td>
                          <td>23</td>
                          <td>24</td>
                          <td>25</td>
                        </tr>

                        <tr>
                          <td>26</td>
                          <td>27</td>
                          <td>28</td>
                          <td>29</td>
                          <td>30</td>
                          <td>31</td>
                          <td class="next-month">1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <a href="#" class="dashboard-card is-interview">
                    <div class="media-flex-center">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/32.jpg"
                          data-user-popover="28"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Jonathan K.</span>
                        <span>08:00 - 09:00</span>
                      </div>
                      <div class="flex-end">
                        <Icon icon="feather:chevron-right" />
                      </div>
                    </div>
                  </a>
                  <a href="#" class="dashboard-card is-interview">
                    <div class="media-flex-center">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/19.jpg"
                          data-user-popover="17"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Greta K.</span>
                        <span>10:30 - 11:00</span>
                      </div>
                      <div class="flex-end">
                        <Icon icon="feather:chevron-right" />
                      </div>
                    </div>
                  </a>
                  <a href="#" class="dashboard-card is-interview">
                    <div class="media-flex-center">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/12.jpg"
                          data-user-popover="2"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Joshua S.</span>
                        <span>02:30 - 03:00</span>
                      </div>
                      <div class="flex-end">
                        <Icon icon="feather:chevron-right" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
