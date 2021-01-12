<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('Dashboard Widgets Stats - Admin - Vuero')
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
              <h1 class="title is-4">Widgets</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Stat Widgets-->
            <div class="columns is-multiline">
              <!--Spark Tile Widgets-->
              <div class="column is-3">
                <div class="stat-widget spark-tile-widget is-straight">
                  <div id="widget-spark-1"></div>
                </div>
              </div>

              <div class="column is-3">
                <div class="stat-widget spark-tile-widget is-straight">
                  <div id="widget-spark-2"></div>
                </div>
              </div>

              <div class="column is-3">
                <div class="stat-widget spark-tile-widget is-straight">
                  <div id="widget-spark-3"></div>
                </div>
              </div>

              <div class="column is-3">
                <div class="stat-widget spark-tile-widget is-straight">
                  <div id="widget-spark-4"></div>
                </div>
              </div>

              <!--Line Stats Widget-->
              <div class="column is-6">
                <div class="stat-widget line-stats-widget is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Revenue</h3>
                  </div>
                  <div class="line-stats">
                    <div class="line-stat">
                      <span>This Month</span>
                      <span class="current">$75,648.43</span>
                    </div>
                    <div class="line-stat">
                      <span>Last Month</span>
                      <span class="dark-inverted">$91,512.18</span>
                    </div>
                  </div>
                  <div id="line-stats-widget-chart"></div>
                </div>
              </div>

              <!--Line Stats Widget-->
              <div class="column is-6">
                <div class="stat-widget area-stats-widget is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Revenue</h3>
                  </div>
                  <div class="area-stats">
                    <div class="area-stat">
                      <span>This Month</span>
                      <span class="current">$75,648.43</span>
                    </div>
                    <div class="area-stat">
                      <span>Last Month</span>
                      <span class="dark-inverted">$91,512.18</span>
                    </div>
                  </div>
                  <div id="area-stats-widget-chart"></div>
                </div>
              </div>

              <!--Flex Stat Widget-->
              <div class="column is-6">
                <div class="stat-widget flex-stat-widget is-straight">
                  <div class="chart-media">
                    <div class="meta">
                      <h4 class="dark-inverted">Sales Revenue</h4>
                      <span class="is-dark-primary">$8,641.26</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Bonum integritas corporis: misera debilitas. Ita ne hoc
                        quidem modo paria.
                      </p>
                    </div>
                    <div class="chart-container">
                      <div id="flex-stat-circle"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Flex Stat Widget-->
              <div class="column is-6">
                <div class="stat-widget flex-stat-widget is-straight">
                  <div class="chart-media">
                    <div class="meta">
                      <h4 class="dark-inverted">Sales Revenue</h4>
                      <span class="is-dark-primary">$8,641.26</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Bonum integritas corporis: misera debilitas. Ita ne hoc
                        quidem modo paria.
                      </p>
                    </div>
                    <div class="chart-container">
                      <div id="flex-stat-radial"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Grouped Stat Widget-->
              <div class="column is-6">
                <div class="stat-widget grouped-stat-widget is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Additional Stats</h3>
                  </div>
                  <div class="chart-group">
                    <div class="group">
                      <div class="group-content">
                        <div class="chart-container">
                          <div id="widget-group-radial-1"></div>
                        </div>
                        <span class="dark-inverted">264</span>
                        <p>New Deals</p>
                      </div>
                    </div>
                    <div class="group">
                      <div class="group-content">
                        <div class="chart-container">
                          <div id="widget-group-radial-2"></div>
                        </div>
                        <span class="dark-inverted">1,203</span>
                        <p>Proposals</p>
                      </div>
                    </div>
                    <div class="group">
                      <div class="group-content">
                        <div class="chart-container">
                          <div id="widget-group-radial-3"></div>
                        </div>
                        <span class="dark-inverted">3,078</span>
                        <p>Closed Deals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Grouped Stat Widget-->
              <div class="column is-6">
                <div class="stat-widget grouped-stat-widget is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Additional Stats</h3>
                  </div>
                  <div class="chart-group">
                    <div class="group">
                      <div class="group-content">
                        <div class="chart-container is-gauge">
                          <div id="widget-group-radial-4"></div>
                        </div>
                        <span class="dark-inverted">264</span>
                        <p>New Deals</p>
                      </div>
                    </div>
                    <div class="group">
                      <div class="group-content">
                        <div class="chart-container is-gauge">
                          <div id="widget-group-radial-5"></div>
                        </div>
                        <span class="dark-inverted">1,203</span>
                        <p>Proposals</p>
                      </div>
                    </div>
                    <div class="group">
                      <div class="group-content">
                        <div class="chart-container is-gauge">
                          <div id="widget-group-radial-6"></div>
                        </div>
                        <span class="dark-inverted">3,078</span>
                        <p>Closed Deals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Followers Stat Widget-->
              <div class="column is-4">
                <div class="stat-widget followers-stat-widget-v1 is-straight">
                  <div class="follow-block">
                    <div class="follow-icon">
                      <i class="fab fa-twitter"></i>
                    </div>
                    <div class="follow-count">
                      <span class="dark-inverted">138K Followers</span>
                      <span>Based on your latest stats</span>
                    </div>
                    <a href="#" class="go-icon">
                      <Icon icon="feather:chevron-right" />
                    </a>
                  </div>
                </div>
              </div>

              <!--Followers Stat Widget-->
              <div class="column is-4">
                <div class="stat-widget followers-stat-widget-v1 is-straight">
                  <div class="follow-block">
                    <div class="follow-icon is-squared">
                      <i class="fab fa-twitter"></i>
                    </div>
                    <div class="follow-count">
                      <span class="dark-inverted">138K Followers</span>
                      <span>Based on your latest stats</span>
                    </div>
                    <a href="#" class="go-icon is-squared">
                      <Icon icon="feather:chevron-right" />
                    </a>
                  </div>
                </div>
              </div>

              <!--Followers Stat Widget-->
              <div class="column is-4">
                <div class="stat-widget followers-stat-widget-v1 is-straight">
                  <div class="follow-block">
                    <div class="follow-icon is-primary">
                      <i class="fab fa-twitter"></i>
                    </div>
                    <div class="follow-count">
                      <span class="dark-inverted">138K Followers</span>
                      <span>Based on your latest stats</span>
                    </div>
                    <a href="#" class="go-icon">
                      <Icon icon="feather:chevron-right" />
                    </a>
                  </div>
                </div>
              </div>

              <!--Table Widget-->
              <div class="column is-12">
                <div class="stat-widget table-widget-v1 is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Members</h3>
                    <button class="button h-button is-primary is-elevated">
                      <span class="icon is-small">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span>Add Member</span>
                    </button>
                  </div>

                  <table class="table is-hoverable is-fullwidth">
                    <tbody>
                      <!--Table Item-->
                      <tr>
                        <td class="is-media">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar is-squared"
                              src="/@images/avatars/svg/8.gif"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">Tina Dasilva</span>
                            <span>Member since Apr 2019</span>
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">$7,854.32</span>
                            <span>Monthly Income</span>
                          </div>
                        </td>
                        <td>
                          <div class="avatars">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/icons/stacks/js.svg"
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
                                src="/@images/icons/stacks/html5.svg"
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
                                src="/@images/icons/stacks/css3.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="rating-wrap">
                            <span>Rating</span>
                            <div class="rating">
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="tag-wrap">
                            <span class="tag is-green is-elevated"
                              >Approved</span
                            >
                          </div>
                        </td>
                        <td class="is-end">
                          <div class="buttons">
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:edit-2" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:eye" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:trash-2" />
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <!--Table Item-->
                      <tr>
                        <td class="is-media">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar is-squared"
                              src="/@images/avatars/svg/1.gif"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">John Wistmus</span>
                            <span>Member since Jun 2018</span>
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">$5,435.49</span>
                            <span>Monthly Income</span>
                          </div>
                        </td>
                        <td>
                          <div class="avatars">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/icons/stacks/reactjs.svg"
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
                                src="/@images/icons/stacks/nodejs.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="rating-wrap">
                            <span>Rating</span>
                            <div class="rating">
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star"></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="tag-wrap">
                            <span class="tag is-green is-elevated"
                              >Approved</span
                            >
                          </div>
                        </td>
                        <td class="is-end">
                          <div class="buttons">
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:edit-2" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:eye" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:trash-2" />
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <!--Table Item-->
                      <tr>
                        <td class="is-media">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar is-squared"
                              src="/@images/avatars/svg/4.gif"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">Sam Watson</span>
                            <span>Member since Jun 2020</span>
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">$824.67</span>
                            <span>Monthly Income</span>
                          </div>
                        </td>
                        <td>
                          <div class="avatars">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/icons/stacks/csharp.svg"
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
                                src="/@images/icons/stacks/android.svg"
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
                                src="/@images/icons/stacks/laravel.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="rating-wrap">
                            <span>Rating</span>
                            <div class="rating">
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="tag-wrap">
                            <span class="tag is-orange is-elevated"
                              >Pending</span
                            >
                          </div>
                        </td>
                        <td class="is-end">
                          <div class="buttons">
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:edit-2" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:eye" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:trash-2" />
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="is-media">
                          <div class="h-avatar is-medium">
                            <span class="avatar is-squared is-fake is-info">
                              <span>JJ</span>
                            </span>
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">Jolaine Joestar</span>
                            <span>Member since Feb 2020</span>
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">$261.12</span>
                            <span>Monthly Income</span>
                          </div>
                        </td>
                        <td>
                          <div class="avatars">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/icons/stacks/illustrator.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="rating-wrap">
                            <span>Rating</span>
                            <div class="rating">
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="tag-wrap">
                            <span class="tag is-primary is-elevated"
                              >Suspended</span
                            >
                          </div>
                        </td>
                        <td class="is-end">
                          <div class="buttons">
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:edit-2" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:eye" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:trash-2" />
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <!--Table Item-->
                      <tr>
                        <td class="is-media">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar is-squared"
                              src="/@images/avatars/svg/3.gif"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">Anders Jensen</span>
                            <span>Member since nov 2019</span>
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">$4,231.67</span>
                            <span>Monthly Income</span>
                          </div>
                        </td>
                        <td>
                          <div class="avatars">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/icons/stacks/reactjs.svg"
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
                                src="/@images/icons/stacks/vuejs.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="rating-wrap">
                            <span>Rating</span>
                            <div class="rating">
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="tag-wrap">
                            <span class="tag is-green is-elevated"
                              >Approved</span
                            >
                          </div>
                        </td>
                        <td class="is-end">
                          <div class="buttons">
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:edit-2" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:eye" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined">
                              <span class="icon is-small">
                                <Icon icon="feather:trash-2" />
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!--Table Widget-->
              <div class="column is-12">
                <div class="stat-widget table-widget-v1 is-straight">
                  <div class="widget-head">
                    <h3 class="dark-inverted">Members</h3>
                    <button class="button h-button is-primary is-elevated">
                      <span class="icon is-small">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span>Add Member</span>
                    </button>
                  </div>

                  <table class="table is-hoverable is-fullwidth">
                    <tbody>
                      <!--Table Item-->
                      <tr>
                        <td class="is-media">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar"
                              src="/@images/avatars/svg/8.gif"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">Tina Dasilva</span>
                            <span>Member since Apr 2019</span>
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">$7,854.32</span>
                            <span>Monthly Income</span>
                          </div>
                        </td>
                        <td>
                          <div class="avatars">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/icons/stacks/js.svg"
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
                                src="/@images/icons/stacks/html5.svg"
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
                                src="/@images/icons/stacks/css3.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="rating-wrap">
                            <span>Rating</span>
                            <div class="rating">
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="tag-wrap">
                            <span class="tag is-green is-rounded is-elevated"
                              >Approved</span
                            >
                          </div>
                        </td>
                        <td class="is-end">
                          <div class="buttons">
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:edit-2" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:eye" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:trash-2" />
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <!--Table Item-->
                      <tr>
                        <td class="is-media">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar"
                              src="/@images/avatars/svg/1.gif"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">John Wistmus</span>
                            <span>Member since Jun 2018</span>
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">$5,435.49</span>
                            <span>Monthly Income</span>
                          </div>
                        </td>
                        <td>
                          <div class="avatars">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/icons/stacks/reactjs.svg"
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
                                src="/@images/icons/stacks/nodejs.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="rating-wrap">
                            <span>Rating</span>
                            <div class="rating">
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star"></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="tag-wrap">
                            <span class="tag is-green is-rounded is-elevated"
                              >Approved</span
                            >
                          </div>
                        </td>
                        <td class="is-end">
                          <div class="buttons">
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:edit-2" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:eye" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:trash-2" />
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <!--Table Item-->
                      <tr>
                        <td class="is-media">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar"
                              src="/@images/avatars/svg/4.gif"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">Sam Watson</span>
                            <span>Member since Jun 2020</span>
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">$824.67</span>
                            <span>Monthly Income</span>
                          </div>
                        </td>
                        <td>
                          <div class="avatars">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/icons/stacks/csharp.svg"
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
                                src="/@images/icons/stacks/android.svg"
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
                                src="/@images/icons/stacks/laravel.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="rating-wrap">
                            <span>Rating</span>
                            <div class="rating">
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="tag-wrap">
                            <span class="tag is-orange is-rounded is-elevated"
                              >Pending</span
                            >
                          </div>
                        </td>
                        <td class="is-end">
                          <div class="buttons">
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:edit-2" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:eye" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:trash-2" />
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="is-media">
                          <div class="h-avatar is-medium">
                            <span class="avatar is-fake is-info">
                              <span>JJ</span>
                            </span>
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">Jolaine Joestar</span>
                            <span>Member since Feb 2020</span>
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">$261.12</span>
                            <span>Monthly Income</span>
                          </div>
                        </td>
                        <td>
                          <div class="avatars">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/icons/stacks/illustrator.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="rating-wrap">
                            <span>Rating</span>
                            <div class="rating">
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="tag-wrap">
                            <span class="tag is-primary is-rounded is-elevated"
                              >Suspended</span
                            >
                          </div>
                        </td>
                        <td class="is-end">
                          <div class="buttons">
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:edit-2" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:eye" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:trash-2" />
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <!--Table Item-->
                      <tr>
                        <td class="is-media">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar"
                              src="/@images/avatars/svg/3.gif"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">Anders Jensen</span>
                            <span>Member since nov 2019</span>
                          </div>
                        </td>
                        <td>
                          <div class="double-line">
                            <span class="dark-inverted">$4,231.67</span>
                            <span>Monthly Income</span>
                          </div>
                        </td>
                        <td>
                          <div class="avatars">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/icons/stacks/reactjs.svg"
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
                                src="/@images/icons/stacks/vuejs.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="rating-wrap">
                            <span>Rating</span>
                            <div class="rating">
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                              <i class="fas fa-star selected"></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="tag-wrap">
                            <span class="tag is-green is-rounded is-elevated"
                              >Approved</span
                            >
                          </div>
                        </td>
                        <td class="is-end">
                          <div class="buttons">
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:edit-2" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:eye" />
                              </span>
                            </button>
                            <button class="button is-dark-outlined is-circle">
                              <span class="icon is-small">
                                <Icon icon="feather:trash-2" />
                              </span>
                            </button>
                          </div>
                        </td>
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
  </DefaultLayout>
</template>
