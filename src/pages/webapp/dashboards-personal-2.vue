<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Dashboards Personal 2 - WebApp - Vuero')
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
          <div class="page-content-inner">
            <!--Personal Dashboard V2-->
            <div
              class="personal-dashboard personal-dashboard-v2 has-webapp-spacing"
            >
              <div class="columns is-multiline">
                <div class="column is-12">
                  <div class="dashboard-header">
                    <div class="h-avatar is-xl">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/8.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/icons/flags/united-states-of-america.svg"
                        alt=""
                      />
                    </div>
                    <div class="user-meta is-dark-bordered-12">
                      <h3 class="title is-4 is-narrow">
                        Welcome back, Erik K.
                      </h3>
                      <p class="light-text">
                        It's really nice to see you again
                      </p>
                    </div>
                    <div class="user-action">
                      <h3 class="title is-2 is-narrow">3</h3>
                      <p class="light-text">Tasks are pending review</p>
                      <a class="action-link">View Tasks</a>
                    </div>
                    <div class="cta h-hidden-tablet-p">
                      <div class="media-flex inverted-text">
                        <i class="lnil lnil-crown-alt-1"></i>
                        <p class="white-text">
                          Start using our team and project management tools
                        </p>
                      </div>
                      <a class="link inverted-text">Learn More</a>
                    </div>
                  </div>
                </div>

                <div class="column is-8">
                  <div class="dashboard-card has-margin-bottom">
                    <div class="card-head">
                      <h3 class="dark-inverted">Active Projects</h3>
                      <a class="action-link">View All</a>
                    </div>
                    <div class="active-projects">
                      <!--Project-->
                      <div class="media-flex-center">
                        <div class="h-avatar is-medium">
                          <img
                            class="avatar is-squared"
                            src="/@images/photo/demo/apps/1.jpg"
                            alt=""
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
                        <div class="flex-meta is-light">
                          <span class="dark-text dark-inverted"
                            >Delivery App Project</span
                          >
                          <span class="light-text">Updated 30m ago</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
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
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
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
                          </div>

                          <ProjectWidgetDropdown />
                        </div>
                      </div>
                      <!--Project-->
                      <div class="media-flex-center">
                        <div class="h-avatar is-medium">
                          <img
                            class="avatar is-squared"
                            src="/@images/photo/demo/apps/2.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                          <img
                            class="badge"
                            src="/@images/icons/stacks/reactjs.svg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta is-light">
                          <span class="dark-text dark-inverted"
                            >Health and Fitness Dashboard</span
                          >
                          <span class="light-text">Updated 5h ago</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
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
                          </div>

                          <ProjectWidgetDropdown />
                        </div>
                      </div>
                      <!--Project-->
                      <div class="media-flex-center">
                        <div class="h-avatar is-medium">
                          <img
                            class="avatar is-squared"
                            src="/@images/photo/demo/apps/3.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                          <img
                            class="badge"
                            src="/@images/icons/stacks/angular.svg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta is-light">
                          <span class="dark-text dark-inverted"
                            >Learning Tracker Dashboard</span
                          >
                          <span class="light-text">Updated 7h ago</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <div
                                class="avatar is-fake is-success"
                                data-user-popover="38"
                              >
                                <span>NL</span>
                              </div>
                            </div>
                          </div>

                          <ProjectWidgetDropdown />
                        </div>
                      </div>
                      <!--Project-->
                      <div class="media-flex-center">
                        <div class="h-avatar is-medium">
                          <img
                            class="avatar is-squared"
                            src="/@images/photo/demo/apps/4.png"
                            alt=""
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
                        <div class="flex-meta is-light">
                          <span class="dark-text dark-inverted"
                            >Banking App Dashboard</span
                          >
                          <span class="light-text">Updated 10h ago</span>
                        </div>
                        <div class="flex-end">
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
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
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/38.jpg"
                                alt=""
                                data-user-popover="32"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>

                          <ProjectWidgetDropdown />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="dashboard-card">
                    <div class="card-head">
                      <h3 class="dark-inverted">Task Completion</h3>
                      <a class="action-link">Reports</a>
                    </div>
                    <div id="completion-chart"></div>
                  </div>

                  <div class="dashboard-card">
                    <div class="card-head">
                      <h3 class="dark-inverted">Team Efficiency</h3>
                      <a class="action-link">Reports</a>
                    </div>
                    <div id="efficiency-chart"></div>
                  </div>
                </div>

                <div class="column is-4">
                  <div class="dashboard-card">
                    <div class="card-head">
                      <h3 class="dark-inverted">My Team</h3>
                      <a class="action-link">View All</a>
                    </div>
                    <div class="active-team">
                      <ul class="user-list">
                        <li>
                          <div class="h-avatar">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/18.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="user-list-info">
                            <div class="name dark-inverted">Esteban C.</div>
                            <div class="position">UI/UX Designer</div>
                          </div>
                          <div class="user-list-icons">
                            <a><i class="fas fa-phone"></i></a>
                            <a><i class="fas fa-video"></i></a>
                          </div>
                        </li>
                        <li>
                          <div class="h-avatar">
                            <div
                              class="avatar is-fake is-h-orange"
                              data-user-popover="35"
                            >
                              <span>SC</span>
                            </div>
                          </div>
                          <div class="user-list-info">
                            <div class="name dark-inverted">Sara Connor</div>
                            <div class="position">UI/UX Designer</div>
                          </div>
                          <div class="user-list-icons">
                            <a><i class="fas fa-phone"></i></a>
                            <a><i class="fas fa-video"></i></a>
                          </div>
                        </li>
                        <li>
                          <div class="h-avatar">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/13.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="user-list-info">
                            <div class="name dark-inverted">Tara S.</div>
                            <div class="position">UI/UX Designer</div>
                          </div>
                          <div class="user-list-icons">
                            <a><i class="fas fa-phone"></i></a>
                            <a><i class="fas fa-video"></i></a>
                          </div>
                        </li>
                        <li>
                          <div class="h-avatar">
                            <div
                              class="avatar is-fake is-success"
                              data-user-popover="38"
                            >
                              <span>NL</span>
                            </div>
                          </div>
                          <div class="user-list-info">
                            <div class="name dark-inverted">Naomi Liversky</div>
                            <div class="position">Frontend developer</div>
                          </div>
                          <div class="user-list-icons">
                            <a><i class="fas fa-phone"></i></a>
                            <a><i class="fas fa-video"></i></a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="dashboard-card">
                    <div class="card-head">
                      <h3 class="dark-inverted">Todo Today</h3>
                      <a class="action-link">View All</a>
                    </div>
                    <div class="active-list">
                      <div class="checkboxes-list">
                        <!-- List item -->
                        <div class="list-item">
                          <!-- Animated checkbox-->
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
                          <div class="item-meta">
                            <span class="dark-inverted"
                              >Call Mr. Markstrom</span
                            >
                            <span>Review the project initial wireframes</span>
                          </div>
                        </div>
                        <!-- List item -->
                        <div class="list-item">
                          <!-- Animated checkbox-->
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
                          <div class="item-meta">
                            <span class="dark-inverted">Finish wireframes</span>
                            <span>Make all requested changes and publish</span>
                          </div>
                        </div>
                        <!-- List item -->
                        <div class="list-item">
                          <!-- Animated checkbox-->
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
                          <div class="item-meta">
                            <span class="dark-inverted">Update timesheets</span>
                            <span>Update all the team timesheets</span>
                          </div>
                        </div>
                        <!-- List item -->
                        <div class="list-item">
                          <!-- Animated checkbox-->
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
                          <div class="item-meta">
                            <span class="dark-inverted">Request payout</span>
                            <span>send project invoice to client</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="dashboard-card">
                    <div class="section-placeholder">
                      <div class="placeholder-content">
                        <img
                          class="light-image"
                          src="/@images/illustrations/placeholders/chart-guy.svg"
                          alt=""
                        />
                        <img
                          class="dark-image"
                          src="/@images/illustrations/placeholders/chart-guy-dark.svg"
                          alt=""
                        />
                        <h3 class="dark-inverted">Go Premium</h3>
                        <p>
                          Unlock more features and business tools by going
                          premium
                        </p>
                        <a class="button h-button is-primary is-elevated"
                          >Go Premium</a
                        >
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
  </WebappLayout>
</template>
