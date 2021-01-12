<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Dashboards Business 3 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper is-webapp"
      data-page-title="Dashboard"
      data-naver-offset="150"
      data-menu-item="#dashboards-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Dashboard</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Business Dashboard V3-->
            <div class="business-dashboard hr-dashboard has-webapp-spacing">
              <div class="columns">
                <div class="column is-8">
                  <div class="columns is-multiline">
                    <!--Header-->
                    <div class="column is-12">
                      <div class="block-header">
                        <!--left-->
                        <div class="left">
                          <div class="current-user">
                            <div class="h-avatar is-medium">
                              <img
                                class="avatar is-squared"
                                src="/@images/avatars/photos/8.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <h3>Welcome back, Erik.</h3>
                          </div>
                        </div>

                        <!--Center-->
                        <div class="center">
                          <h4 class="block-heading">New Rookies</h4>
                          <p class="block-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Praeclarae mortes.
                          </p>
                          <div class="candidates">
                            <a class="h-avatar">
                              <img
                                class="avatar is-squared"
                                src="/@images/avatars/photos/13.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </a>
                            <a class="h-avatar">
                              <img
                                class="avatar is-squared"
                                src="/@images/avatars/photos/32.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </a>
                            <a class="h-avatar">
                              <img
                                class="avatar is-squared"
                                src="/@images/avatars/photos/9.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </a>
                            <button>
                              <Icon icon="feather:plus" />
                            </button>
                          </div>
                        </div>

                        <!--Right-->
                        <div class="right">
                          <h4 class="block-heading">Job Feed</h4>
                          <p class="block-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Praeclarae mortes.
                          </p>

                          <button
                            class="button h-button is-bold is-fullwidth is-dark-outlined"
                          >
                            Manage Jobs
                          </button>
                        </div>
                      </div>
                    </div>

                    <!--Selector-->
                    <div class="column is-12">
                      <div class="feed-settings">
                        <h3 class="dark-inverted">Manage feed settings</h3>
                        <div class="buttons">
                          <button class="button is-dark-outlined">All</button>
                          <button class="button is-selected is-dark-outlined">
                            Candidates
                          </button>
                          <button class="button is-dark-outlined">
                            Companies
                          </button>
                        </div>
                      </div>
                    </div>

                    <!--Side Text-->
                    <div class="column is-4">
                      <div class="side-text">
                        <h3 class="dark-inverted">More Details</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Perge porro; Oratio me istius philosophi non
                          offendit; Duo Reges: constructio interrete.
                        </p>
                        <a class="action-link">Read More</a>
                      </div>
                    </div>

                    <!--Incoming-->
                    <div class="column is-7 is-offset-1">
                      <div class="incoming">
                        <div class="flex-table">
                          <!--Table header-->
                          <div class="flex-table-header">
                            <span class="is-grow-lg">Type</span>
                            <span>Count</span>
                            <span>Status</span>
                            <span class="cell-end">Actions</span>
                          </div>

                          <!--Table item-->
                          <div class="flex-table-item">
                            <div
                              class="flex-table-cell is-media is-grow-lg"
                              data-th=""
                            >
                              <div class="h-icon is-green">
                                <i class="lnil lnil-envelope-alt"></i>
                              </div>
                              <div>
                                <span class="item-name dark-inverted"
                                  >Messages</span
                                >
                                <span class="item-meta">
                                  <span>Inbox messages</span>
                                </span>
                              </div>
                            </div>
                            <div
                              class="flex-table-cell cell-center"
                              data-th="Count"
                            >
                              <span class="light-text">5</span>
                            </div>
                            <div class="flex-table-cell" data-th="Status">
                              <span class="tag is-success is-rounded">New</span>
                            </div>
                            <div
                              class="flex-table-cell cell-end"
                              data-th="Actions"
                            >
                              <a class="action-link is-pushed-mobile">Open</a>
                            </div>
                          </div>

                          <!--Table item-->
                          <div class="flex-table-item">
                            <div
                              class="flex-table-cell is-media is-grow-lg"
                              data-th=""
                            >
                              <div class="h-icon is-orange">
                                <i class="lnil lnil-checkmark-circle"></i>
                              </div>
                              <div>
                                <span class="item-name dark-inverted"
                                  >Tasks</span
                                >
                                <span class="item-meta">
                                  <span>Pending tasks</span>
                                </span>
                              </div>
                            </div>
                            <div
                              class="flex-table-cell cell-center"
                              data-th="Count"
                            >
                              <span class="light-text">3</span>
                            </div>
                            <div class="flex-table-cell" data-th="Status">
                              <span class="tag is-rounded">Pending</span>
                            </div>
                            <div
                              class="flex-table-cell cell-end"
                              data-th="Actions"
                            >
                              <a class="action-link is-pushed-mobile">Open</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--Rookies-->
                    <div class="column is-12">
                      <div class="recent-rookies">
                        <div class="recent-rookies-header">
                          <h3 class="dark-inverted">Recent Rookies</h3>
                          <a class="action-link">View All</a>
                        </div>

                        <div class="columns user-grid user-grid-v4">
                          <!--Rookie-->
                          <div class="column is-4">
                            <div class="grid-item">
                              <UserCardDropdown />
                              <div class="h-avatar is-large">
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
                                <img
                                  class="badge"
                                  src="/@images/icons/stacks/illustrator.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <h3 class="dark-inverted" data-filter-match>
                                Tara Svenson
                              </h3>
                              <p data-filter-match>UI/UX Designer</p>
                              <div class="button-wrap has-text-centered">
                                <button
                                  class="button h-button is-primary is-raised"
                                >
                                  Hire
                                </button>
                              </div>
                            </div>
                          </div>
                          <!--Rookie-->
                          <div class="column is-4">
                            <div class="grid-item">
                              <UserCardDropdown />
                              <div class="h-avatar is-large">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/37.jpg"
                                  alt=""
                                  data-user-popover="31"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <img
                                  class="badge"
                                  src="/@images/icons/flags/france.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <h3 class="dark-inverted" data-filter-match>
                                Helmut Fritz
                              </h3>
                              <p data-filter-match>Product Manager</p>
                              <div class="button-wrap has-text-centered">
                                <button
                                  class="button h-button is-dark-outlined is-bold"
                                >
                                  Assess
                                </button>
                              </div>
                            </div>
                          </div>
                          <!--Rookie-->
                          <div class="column is-4">
                            <div class="grid-item">
                              <UserCardDropdown />
                              <div class="h-avatar is-large">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/25.jpg"
                                  alt=""
                                  data-user-popover="4"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <img
                                  class="badge"
                                  src="/@images/icons/stacks/js.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <h3 class="dark-inverted" data-filter-match>
                                Melany Wallace
                              </h3>
                              <p data-filter-match>Web Developer</p>
                              <div class="button-wrap has-text-centered">
                                <button
                                  class="button h-button is-dark-outlined is-bold"
                                >
                                  Assess
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="column is-4">
                  <!--Widget-->
                  <div class="widget search-widget">
                    <div class="field">
                      <div class="control">
                        <input
                          type="text"
                          class="input"
                          placeholder="Search..."
                        />
                        <button class="search-button">
                          <Icon icon="feather:search" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Widget-->
                  <div class="list-widget list-widget-v2 tabbed-widget">
                    <div class="widget-head">
                      <h3 class="dark-inverted">Todo</h3>
                      <div class="tabbed-controls">
                        <a class="tabbed-control is-active">
                          <span>All</span>
                        </a>
                        <a class="tabbed-control">
                          <span>Mine</span>
                        </a>
                        <div class="tabbed-naver"></div>
                      </div>
                    </div>

                    <div class="inner-list-wrapper is-active">
                      <div class="inner-list">
                        <!--List Item-->
                        <div class="inner-list-item media-flex-center">
                          <div class="animated-checkbox">
                            <input type="checkbox" />
                            <div class="checkmark-wrap">
                              <div class="shadow-circle"></div>
                              <svg
                                class="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                              >
                                <circle
                                  class="checkmark-circle"
                                  cx="26"
                                  cy="26"
                                  r="25"
                                  fill="none"
                                />
                                <path
                                  class="checkmark-check"
                                  fill="none"
                                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="flex-meta is-light">
                            <a href="#">Review Anna's report</a>
                            <span>at 9:45am</span>
                          </div>
                          <div class="flex-end">
                            <span class="tag is-rounded">Pending</span>
                          </div>
                        </div>
                        <!--List Item-->
                        <div class="inner-list-item media-flex-center">
                          <div class="animated-checkbox is-checked">
                            <input type="checkbox" />
                            <div class="checkmark-wrap">
                              <div class="shadow-circle"></div>
                              <svg
                                class="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                              >
                                <circle
                                  class="checkmark-circle"
                                  cx="26"
                                  cy="26"
                                  r="25"
                                  fill="none"
                                />
                                <path
                                  class="checkmark-check"
                                  fill="none"
                                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="flex-meta is-light">
                            <a href="#">Finish document review</a>
                            <span>at 11:30am</span>
                          </div>
                          <div class="flex-end">
                            <span class="tag is-rounded">Pending</span>
                          </div>
                        </div>
                        <!--List Item-->
                        <div class="inner-list-item media-flex-center">
                          <div class="animated-checkbox is-checked">
                            <input type="checkbox" />
                            <div class="checkmark-wrap">
                              <div class="shadow-circle"></div>
                              <svg
                                class="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                              >
                                <circle
                                  class="checkmark-circle"
                                  cx="26"
                                  cy="26"
                                  r="25"
                                  fill="none"
                                />
                                <path
                                  class="checkmark-check"
                                  fill="none"
                                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="flex-meta is-light">
                            <a href="#">Project Meeting</a>
                            <span>at 12:00pm</span>
                          </div>
                          <div class="flex-end">
                            <span class="tag is-rounded">Pending</span>
                          </div>
                        </div>
                        <!--List Item-->
                        <div class="inner-list-item media-flex-center">
                          <div class="animated-checkbox">
                            <input type="checkbox" />
                            <div class="checkmark-wrap">
                              <div class="shadow-circle"></div>
                              <svg
                                class="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                              >
                                <circle
                                  class="checkmark-circle"
                                  cx="26"
                                  cy="26"
                                  r="25"
                                  fill="none"
                                />
                                <path
                                  class="checkmark-check"
                                  fill="none"
                                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="flex-meta is-light">
                            <a href="#">Meet with Kacey M.</a>
                            <span>at 3:00pm</span>
                          </div>
                          <div class="flex-end">
                            <span class="tag is-rounded">Pending</span>
                          </div>
                        </div>
                        <!--List Item-->
                        <div class="inner-list-item media-flex-center">
                          <div class="animated-checkbox">
                            <input type="checkbox" />
                            <div class="checkmark-wrap">
                              <div class="shadow-circle"></div>
                              <svg
                                class="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                              >
                                <circle
                                  class="checkmark-circle"
                                  cx="26"
                                  cy="26"
                                  r="25"
                                  fill="none"
                                />
                                <path
                                  class="checkmark-check"
                                  fill="none"
                                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="flex-meta is-light">
                            <a href="#">Review final draft</a>
                            <span>at 6:00pm</span>
                          </div>
                          <div class="flex-end">
                            <span class="tag is-rounded">Pending</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="inner-list-wrapper">
                      <div class="inner-list">
                        <!--List Item-->
                        <div class="inner-list-item media-flex-center">
                          <div class="animated-checkbox is-checked">
                            <input type="checkbox" />
                            <div class="checkmark-wrap">
                              <div class="shadow-circle"></div>
                              <svg
                                class="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                              >
                                <circle
                                  class="checkmark-circle"
                                  cx="26"
                                  cy="26"
                                  r="25"
                                  fill="none"
                                />
                                <path
                                  class="checkmark-check"
                                  fill="none"
                                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="flex-meta is-light">
                            <a href="#">Call Mike R.</a>
                            <span>at 8:30am</span>
                          </div>
                          <div class="flex-end">
                            <span class="tag is-rounded">Pending</span>
                          </div>
                        </div>
                        <!--List Item-->
                        <div class="inner-list-item media-flex-center">
                          <div class="animated-checkbox is-checked">
                            <input type="checkbox" />
                            <div class="checkmark-wrap">
                              <div class="shadow-circle"></div>
                              <svg
                                class="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                              >
                                <circle
                                  class="checkmark-circle"
                                  cx="26"
                                  cy="26"
                                  r="25"
                                  fill="none"
                                />
                                <path
                                  class="checkmark-check"
                                  fill="none"
                                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="flex-meta is-light">
                            <a href="#">Finish document review</a>
                            <span>at 11:30am</span>
                          </div>
                          <div class="flex-end">
                            <span class="tag is-rounded">Pending</span>
                          </div>
                        </div>
                        <!--List Item-->
                        <div class="inner-list-item media-flex-center">
                          <div class="animated-checkbox is-checked">
                            <input type="checkbox" />
                            <div class="checkmark-wrap">
                              <div class="shadow-circle"></div>
                              <svg
                                class="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                              >
                                <circle
                                  class="checkmark-circle"
                                  cx="26"
                                  cy="26"
                                  r="25"
                                  fill="none"
                                />
                                <path
                                  class="checkmark-check"
                                  fill="none"
                                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="flex-meta is-light">
                            <a href="#">Project Meeting</a>
                            <span>at 12:00pm</span>
                          </div>
                          <div class="flex-end">
                            <span class="tag is-rounded">Pending</span>
                          </div>
                        </div>
                        <!--List Item-->
                        <div class="inner-list-item media-flex-center">
                          <div class="animated-checkbox">
                            <input type="checkbox" />
                            <div class="checkmark-wrap">
                              <div class="shadow-circle"></div>
                              <svg
                                class="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                              >
                                <circle
                                  class="checkmark-circle"
                                  cx="26"
                                  cy="26"
                                  r="25"
                                  fill="none"
                                />
                                <path
                                  class="checkmark-check"
                                  fill="none"
                                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="flex-meta is-light">
                            <a href="#">Meet with the Boss</a>
                            <span>at 4:30pm</span>
                          </div>
                          <div class="flex-end">
                            <span class="tag is-rounded">Pending</span>
                          </div>
                        </div>
                        <!--List Item-->
                        <div class="inner-list-item media-flex-center">
                          <div class="animated-checkbox">
                            <input type="checkbox" />
                            <div class="checkmark-wrap">
                              <div class="shadow-circle"></div>
                              <svg
                                class="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                              >
                                <circle
                                  class="checkmark-circle"
                                  cx="26"
                                  cy="26"
                                  r="25"
                                  fill="none"
                                />
                                <path
                                  class="checkmark-check"
                                  fill="none"
                                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="flex-meta is-light">
                            <a href="#">Business diner</a>
                            <span>at 9:00pm</span>
                          </div>
                          <div class="flex-end">
                            <span class="tag is-rounded">Pending</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Widget-->
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
