<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('Dashboard Business 2 - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <GenericSidebar />
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-company"
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
            <!--Business Dashboard V2-->
            <div class="business-dashboard company-dashboard">
              <div class="company-header is-dark-card-bordered is-dark-bg-6">
                <div class="header-item is-dark-bordered-12">
                  <div class="item-inner">
                    <i class="lnil lnil-users-alt is-dark-primary"></i>
                    <span class="dark-inverted">162</span>
                    <p>New Users</p>
                  </div>
                </div>
                <div class="header-item is-dark-bordered-12">
                  <div class="item-inner">
                    <i class="lnil lnil-diamond-alt is-dark-primary"></i>
                    <span class="dark-inverted">$1,835.41</span>
                    <p>Daily Income</p>
                  </div>
                </div>
                <div class="header-item is-dark-bordered-12">
                  <div class="item-inner">
                    <i class="lnil lnil-briefcase-alt is-dark-primary"></i>
                    <span class="dark-inverted">378</span>
                    <p>Completed Projects</p>
                  </div>
                </div>
                <div class="header-item is-dark-bordered-12">
                  <div class="item-inner">
                    <i class="lnil lnil-ticket is-dark-primary"></i>
                    <span class="dark-inverted">192</span>
                    <p>Active Tickets</p>
                  </div>
                </div>
              </div>

              <div class="columns is-multiline">
                <div class="column is-4">
                  <div class="dashboard-card is-company">
                    <div class="h-avatar is-big">
                      <img
                        class="avatar light-image"
                        src="/@images/photo/demo/brands/udemy.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="avatar dark-image"
                        src="/@images/photo/demo/brands/udemy-dark.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <button
                        class="button icon-button is-circle is-dark-outlined"
                      >
                        <span class="icon is-small">
                          <Icon icon="feather:plus" />
                        </span>
                      </button>
                    </div>
                    <h3 class="dark-inverted">U Learning</h3>
                    <p>Online Courses</p>
                    <div class="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed fac ista esse non inportuna.
                      </p>
                    </div>
                    <div class="company-stats is-dark-bordered-12">
                      <div class="company-stat">
                        <div>
                          <span>Posts</span>
                          <span class="dark-inverted">864</span>
                        </div>
                      </div>
                      <div class="company-stat">
                        <div>
                          <span>Projects</span>
                          <span class="dark-inverted">261</span>
                        </div>
                      </div>
                      <div class="company-stat">
                        <div>
                          <span>Followers</span>
                          <span class="dark-inverted">32K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-4">
                  <div class="dashboard-card is-base-chart">
                    <div class="content-box">
                      <div class="revenue-stats is-dark-bordered-12">
                        <div class="revenue-stat">
                          <span>New</span>
                          <span class="current">153</span>
                        </div>
                        <div class="revenue-stat">
                          <span>Renewals</span>
                          <span class="dark-inverted">641</span>
                        </div>
                        <div class="revenue-stat">
                          <span>Resigns</span>
                          <span class="dark-inverted">64</span>
                        </div>
                      </div>
                    </div>
                    <div class="chart-container">
                      <div id="users-chart"></div>
                    </div>
                  </div>
                </div>
                <div class="column is-4">
                  <div class="dashboard-card is-base-chart">
                    <div class="content-box">
                      <div class="revenue-stats is-dark-bordered-12">
                        <div class="revenue-stat">
                          <span>Facebook</span>
                          <span class="current">64K</span>
                        </div>
                        <div class="revenue-stat">
                          <span>Instagram</span>
                          <span class="dark-inverted">78K</span>
                        </div>
                        <div class="revenue-stat">
                          <span>Twitter</span>
                          <span class="dark-inverted">25K</span>
                        </div>
                      </div>
                    </div>
                    <div class="chart-container">
                      <div id="shares-chart"></div>
                    </div>
                  </div>
                </div>

                <div class="column is-12">
                  <!-- Datatable -->
                  <div class="table-wrapper" data-simplebar>
                    <table
                      id="users-datatable"
                      class="table is-datatable is-hoverable table-is-bordered"
                    >
                      <thead>
                        <tr>
                          <th>Picture</th>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Type</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>

                <div class="column is-3">
                  <!--Widget-->
                  <div class="widget gauge-widget is-straight">
                    <div class="widget-toolbar">
                      <div class="left">
                        <h3 class="is-bigger">Personal Score</h3>
                      </div>
                      <div class="right">
                        <WidgetDropdown />
                      </div>
                    </div>
                    <div class="gauge-wrap">
                      <div id="gauge-holder" class="gauge-holder"></div>
                    </div>
                    <div class="widget-content">
                      <p>
                        Your score has been calculated based on the latest
                        metrics
                      </p>
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="dashboard-card">
                    <div class="card-head">
                      <h3 class="dark-inverted">Subscriptions</h3>
                    </div>
                    <div id="bar-chart"></div>
                  </div>
                </div>
                <div class="column is-3">
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
                </div>

                <div class="column is-12">
                  <div class="dashboard-card is-tickets">
                    <div class="card-head">
                      <h3 class="dark-inverted">Pending Tickets</h3>
                      <a class="action-link">View All</a>
                    </div>

                    <div class="ticket-list">
                      <!--Ticket-->
                      <div
                        class="media-flex is-responsive-mobile is-dark-bordered-12"
                      >
                        <div class="h-avatar is-medium">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/31.jpg"
                            alt=""
                            data-user-popover="27"
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta">
                          <span
                            >[#45651] Cannot save changes to user profile</span
                          >
                          <span
                            >Iam not able to save changes I make to my user
                            profile. When I click on the save button, it simply
                            says "failed".</span
                          >
                          <span>Updated 5 hours ago</span>
                        </div>
                        <div class="flex-end">
                          <button class="button h-button is-primary is-raised">
                            Manage
                          </button>
                        </div>
                      </div>
                      <!--Ticket-->
                      <div
                        class="media-flex is-responsive-mobile is-dark-bordered-12"
                      >
                        <div class="h-avatar is-medium">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/23.jpg"
                            alt=""
                            data-user-popover="21"
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta">
                          <span>[#45783] Cannot create a new opportunity</span>

                          <span
                            >when I try to create a new opportunity, Iam
                            redirected to a 404 page after clicking the action
                            button.</span
                          >
                          <span>Updated 2 hours ago</span>
                        </div>
                        <div class="flex-end">
                          <button class="button h-button is-primary is-raised">
                            Manage
                          </button>
                        </div>
                      </div>
                      <!--Ticket-->
                      <div
                        class="media-flex is-responsive-mobile is-dark-bordered-12"
                      >
                        <div class="h-avatar is-medium">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/32.jpg"
                            alt=""
                            data-user-popover="28"
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta">
                          <span>[#45723] Payment fails when using PayPal</span>
                          <span
                            >When I try to use PayPal as a payment method, it
                            spins forever and I get an error message after
                            that.</span
                          >
                          <span>Updated 30 minutes ago</span>
                        </div>
                        <div class="flex-end">
                          <button class="button h-button is-primary is-raised">
                            Manage
                          </button>
                        </div>
                      </div>
                      <!--Ticket-->
                      <div
                        class="media-flex is-responsive-mobile is-dark-bordered-12"
                      >
                        <div class="h-avatar is-medium">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/13.jpg"
                            alt=""
                            data-user-popover="6"
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta">
                          <span
                            >[#45862] Cannot find the assets in the theme
                            folder</span
                          >
                          <span
                            >I followed the documentation but Iam not able to
                            locate the assets in the main folder. Can I get some
                            help?</span
                          >
                          <span>Updated 6 hours ago</span>
                        </div>
                        <div class="flex-end">
                          <button class="button h-button is-primary is-raised">
                            Manage
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
      </div>
    </div>
  </DefaultLayout>
</template>
