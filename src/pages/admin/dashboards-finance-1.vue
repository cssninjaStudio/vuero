<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('Dashboard Finance 1 - Admin - Vuero')
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
            <!--Finance Dashboard V1-->
            <div class="finance-dashboard analytics-dashboard">
              <div class="columns">
                <div class="column is-9">
                  <div class="columns is-multiline">
                    <!--Dashboard Tile-->
                    <div class="column is-4">
                      <div class="dashboard-tile">
                        <div class="tile-head">
                          <h3 class="dark-inverted">Transactions</h3>
                          <div class="h-icon is-primary is-rounded is-small">
                            <i class="fas fa-gem"></i>
                          </div>
                        </div>
                        <div class="tile-body">
                          <span class="dark-inverted">8,637</span>
                        </div>
                        <div class="tile-foot">
                          <span class="text-h-green"
                            >+6.4% <Icon icon="feather:trending-up"
                          /></span>
                          <span>since last month</span>
                        </div>
                      </div>
                    </div>
                    <!--Dashboard Tile-->
                    <div class="column is-4">
                      <div class="dashboard-tile">
                        <div class="tile-head">
                          <h3 class="dark-inverted">Subscriptions</h3>
                          <div class="h-icon is-orange is-rounded is-small">
                            <i class="fas fa-user-plus"></i>
                          </div>
                        </div>
                        <div class="tile-body">
                          <span class="dark-inverted">1,378</span>
                        </div>
                        <div class="tile-foot">
                          <span class="text-h-red"
                            >-2.1% <Icon icon="feather:trending-down"
                          /></span>
                          <span>going down</span>
                        </div>
                      </div>
                    </div>
                    <!--Dashboard Tile-->
                    <div class="column is-4">
                      <div class="dashboard-tile">
                        <div class="tile-head">
                          <h3 class="dark-inverted">Referals</h3>
                          <div class="h-icon is-green is-rounded is-small">
                            <i class="fas fa-bullhorn"></i>
                          </div>
                        </div>
                        <div class="tile-body">
                          <span class="dark-inverted">1,911</span>
                        </div>
                        <div class="tile-foot">
                          <span class="text-h-green"
                            >+4.2% <Icon icon="feather:trending-up"
                          /></span>
                          <span>going up</span>
                        </div>
                      </div>
                    </div>
                    <!--Dashboard Card-->
                    <div class="column is-8">
                      <div class="dashboard-card">
                        <div class="card-head">
                          <h3 class="dark-inverted">Revenue</h3>
                        </div>
                        <div class="revenue-stats">
                          <div class="revenue-stat">
                            <span>This Month</span>
                            <span class="current">$75,648.43</span>
                          </div>
                          <div class="revenue-stat">
                            <span>Last Month</span>
                            <span class="dark-inverted">$91,512.18</span>
                          </div>
                        </div>
                        <div id="revenue-chart"></div>
                      </div>
                    </div>
                    <!--Dashboard Card-->
                    <div class="column is-4">
                      <div class="dashboard-card">
                        <div class="card-head">
                          <h3 class="dark-inverted">Goal Overview</h3>
                        </div>

                        <div class="radial-wrap">
                          <div id="goal-gauge"></div>
                          <div class="radial-stats is-dark-bordered-12">
                            <div class="radial-stat is-dark-bordered-12">
                              <span>Completed</span>
                              <span class="dark-inverted">1,223</span>
                            </div>
                            <div class="radial-stat">
                              <span>In Progress</span>
                              <span class="dark-inverted">467</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--Dashboard Card-->
                    <div class="column is-4">
                      <div class="dashboard-card">
                        <div class="card-head">
                          <h3 class="dark-inverted">Sales</h3>
                        </div>

                        <div class="progress-block">
                          <div class="value">
                            <span class="dark-inverted">78%</span>
                          </div>
                          <progress
                            class="progress is-primary is-tiny"
                            value="78"
                            max="100"
                          >
                            78%
                          </progress>
                          <div class="progress-foot">
                            <span class="text-h-green"
                              >+6.4% <Icon icon="feather:trending-up"
                            /></span>
                            <span>since last month</span>
                          </div>

                          <div
                            id="radial-circle"
                            class="circle-chart-wrapper"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <!--Dashboard Card-->
                    <div class="column is-8">
                      <div class="dashboard-card">
                        <div class="card-head">
                          <h3 class="dark-inverted">Profit</h3>
                        </div>
                        <div id="profit-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="column is-3">
                  <!--Widget-->
                  <div class="widget contact-widget is-reversed is-straight">
                    <div class="widget-content">
                      <div class="left">
                        <div class="h-avatar is-medium">
                          <img
                            class="avatar is-squared"
                            src="/@images/avatars/photos/8.jpg"
                            alt=""
                            data-user-popover="3"
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                      </div>
                      <div class="right">
                        <h3>Erik K.</h3>
                        <div class="company">
                          <span>Vuero Ltd.</span>
                          <p>Product Manager</p>
                        </div>
                        <div class="contact-info">
                          <span>
                            <Icon icon="feather:map-pin" />
                            <span>Los Angeles, CA</span>
                          </span>
                          <span>
                            <Icon icon="feather:phone" />
                            <span>+1 444-5156</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <p class="email">erikkovalsky@huro.io</p>
                  </div>
                  <!--Widget-->
                  <div class="widget picker-widget is-straight">
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

                  <!--Widget-->
                  <div class="widget text-widget is-straight">
                    <div class="widget-toolbar">
                      <div class="left">
                        <h3>New Followers</h3>
                      </div>
                      <div class="right">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/7.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/8.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/5.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="widget-content">
                      <p>
                        Great News! <span>Alice</span>, <span>Erik</span> and
                        <span>Mary</span> are now following you. Take some time
                        to look at their profile.
                      </p>
                    </div>
                  </div>

                  <!--Widget-->
                  <div class="widget list-widget is-straight">
                    <div class="widget-toolbar">
                      <div class="left">
                        <h3>Notifications</h3>
                      </div>
                      <div class="right">
                        <WidgetDropdown />
                      </div>
                    </div>
                    <div class="widget-content">
                      <ul>
                        <li>
                          <a>
                            <span>Personal</span>
                            <span class="tag is-rounded">4</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>Business</span>
                            <span class="tag is-rounded">9</span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span>Family</span>
                            <span class="tag is-rounded">2</span>
                          </a>
                        </li>
                      </ul>
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
@import '../../assets/scss/pages/dashboards/_finance.scss';
@import '../../assets/scss/pages/generic/_widgets-lists.scss';
</style>