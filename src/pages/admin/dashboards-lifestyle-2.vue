<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('Dashboard Lifestyle 2 - Admin - Vuero')
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
            <!--Lifestyle Dashboard V2-->
            <div class="lifestyle-dashboard lifestyle-dashboard-v2">
              <div class="dashboard-title is-main">
                <div class="left">
                  <h2 class="dark-inverted">Explore Hobbies</h2>
                  <p class="h-hidden-mobile">
                    Explore some of the best activities nearby in your region
                  </p>
                </div>
                <div class="right">
                  <a class="action-link">View All</a>
                </div>
              </div>

              <div class="columns">
                <div class="column is-9">
                  <div class="columns is-multiline is-flex-tablet-p">
                    <!--Card-->
                    <div class="column is-3">
                      <div
                        class="long-card has-background-image"
                        data-background="https://via.placeholder.com/800x600"
                        data-demo-background="/@images/photo/demo/dashboards/lifestyle/1.jpg"
                      >
                        <div class="long-card-overlay"></div>
                        <a href="#" class="long-card-text-overlay">
                          <div class="top">
                            <span>Foot Trekks</span>
                            <i class="fas fa-running"></i>
                          </div>
                          <div class="bottom">
                            <span>28.3K</span>
                            <div class="avatar-stack">
                              <div class="h-avatar is-small">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/12.jpg"
                                  alt=""
                                  data-user-popover="2"
                                  data-target="webuiPopover7"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="h-avatar is-small">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/22.jpg"
                                  alt=""
                                  data-user-popover="5"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="h-avatar is-small">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/40.jpg"
                                  alt=""
                                  data-user-popover="11"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-3">
                      <div
                        class="long-card has-background-image"
                        data-background="https://via.placeholder.com/800x600"
                        data-demo-background="/@images/photo/demo/dashboards/lifestyle/2.jpg"
                      >
                        <div class="long-card-overlay"></div>
                        <a href="#" class="long-card-text-overlay">
                          <div class="top">
                            <span>Rafting Trips</span>
                            <i class="fas fa-ship"></i>
                          </div>
                          <div class="bottom">
                            <span>8.1K</span>
                            <div class="avatar-stack">
                              <div class="h-avatar is-small">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/7.jpg"
                                  alt=""
                                  data-user-popover="0"
                                  data-target="webuiPopover32"
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
                                  data-target="webuiPopover0"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
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
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-3">
                      <div
                        class="long-card has-background-image"
                        data-background="https://via.placeholder.com/800x600"
                        data-demo-background="/@images/photo/demo/dashboards/lifestyle/3.jpg"
                      >
                        <div class="long-card-overlay"></div>
                        <a href="#" class="long-card-text-overlay">
                          <div class="top">
                            <span>Climbing</span>
                            <i class="fas fa-running"></i>
                          </div>
                          <div class="bottom">
                            <span>19.7K</span>
                            <div class="avatar-stack">
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
                              <div class="h-avatar is-small">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/22.jpg"
                                  alt=""
                                  data-user-popover="20"
                                  data-target="webuiPopover8"
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
                                  data-user-popover="3"
                                  data-target="webuiPopover32"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-3">
                      <div
                        class="long-card has-background-image"
                        data-background="https://via.placeholder.com/800x600"
                        data-demo-background="/@images/photo/demo/dashboards/lifestyle/4.jpg"
                      >
                        <div class="long-card-overlay"></div>
                        <a href="#" class="long-card-text-overlay">
                          <div class="top">
                            <span>Biking</span>
                            <i class="fas fa-biking"></i>
                          </div>
                          <div class="bottom">
                            <span>48.4K</span>
                            <div class="avatar-stack">
                              <div class="h-avatar is-small">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/27.jpg"
                                  alt=""
                                  data-user-popover="10"
                                  data-target="webuiPopover3"
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
                                  src="/@images/avatars/photos/29.jpg"
                                  alt=""
                                  data-user-popover="25"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <!--List-->
                    <div class="column is-6">
                      <div class="dashboard-list">
                        <div class="dashboard-title">
                          <div class="left">
                            <h2 class="dark-inverted">Trending Now</h2>
                            <p class="h-hidden-mobile">
                              Chek out the latest activities
                            </p>
                          </div>
                        </div>

                        <div class="inner-list">
                          <a class="media-flex-center">
                            <div class="h-avatar">
                              <img
                                class="avatar is-squared"
                                src="/@images/photo/demo/dashboards/lifestyle/1.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="flex-meta">
                              <span>Extreme Foot Trekk</span>
                              <span>Oct 31, 2020</span>
                            </div>
                            <div class="flex-end">
                              <div class="rating">
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                              </div>
                              <div class="button is-circle">
                                <span class="icon is-small">
                                  <Icon icon="feather:arrow-right" />
                                </span>
                              </div>
                            </div>
                          </a>
                          <a class="media-flex-center">
                            <div class="h-avatar">
                              <img
                                class="avatar is-squared"
                                src="/@images/photo/demo/dashboards/lifestyle/2.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="flex-meta">
                              <span>Rafting trip</span>
                              <span>Oct 30, 2020</span>
                            </div>
                            <div class="flex-end">
                              <div class="rating">
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star"></i>
                              </div>
                              <div class="button is-circle">
                                <span class="icon is-small">
                                  <Icon icon="feather:arrow-right" />
                                </span>
                              </div>
                            </div>
                          </a>
                          <a class="media-flex-center">
                            <div class="h-avatar">
                              <img
                                class="avatar is-squared"
                                src="/@images/photo/demo/dashboards/lifestyle/3.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="flex-meta">
                              <span>Climbing Group [Pro]</span>
                              <span>Oct 31, 2020</span>
                            </div>
                            <div class="flex-end">
                              <div class="rating">
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                              </div>
                              <div class="button is-circle">
                                <span class="icon is-small">
                                  <Icon icon="feather:arrow-right" />
                                </span>
                              </div>
                            </div>
                          </a>
                          <a class="media-flex-center">
                            <div class="h-avatar">
                              <img
                                class="avatar is-squared"
                                src="/@images/photo/demo/dashboards/lifestyle/4.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="flex-meta">
                              <span>Bicycle Madness Trek</span>
                              <span>Oct 31, 2020</span>
                            </div>
                            <div class="flex-end">
                              <div class="rating">
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                              </div>
                              <div class="button is-circle">
                                <span class="icon is-small">
                                  <Icon icon="feather:arrow-right" />
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <!--List-->
                    <div class="column is-6">
                      <div class="dashboard-list">
                        <div class="dashboard-title">
                          <div class="left">
                            <h2 class="dark-inverted">Popular Now</h2>
                            <p class="h-hidden-mobile">
                              Our popular best sellers
                            </p>
                          </div>
                          <div class="right">
                            <a class="action-link">View All</a>
                          </div>
                        </div>
                        <div class="inner-list">
                          <a class="media-flex-center">
                            <div class="h-avatar">
                              <img
                                class="avatar is-squared"
                                src="/@images/photo/demo/dashboards/lifestyle/5.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="flex-meta">
                              <span>Extreme Triathlon</span>
                              <span>Nov 2, 2020</span>
                            </div>
                            <div class="flex-end">
                              <div class="rating">
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                              </div>
                              <div class="button is-circle">
                                <span class="icon is-small">
                                  <Icon icon="feather:arrow-right" />
                                </span>
                              </div>
                            </div>
                          </a>
                          <a class="media-flex-center">
                            <div class="h-avatar">
                              <img
                                class="avatar is-squared"
                                src="/@images/photo/demo/dashboards/lifestyle/6.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="flex-meta">
                              <span>Group Running</span>
                              <span>Oct 29, 2020</span>
                            </div>
                            <div class="flex-end">
                              <div class="rating">
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star"></i>
                              </div>
                              <div class="button is-circle">
                                <span class="icon is-small">
                                  <Icon icon="feather:arrow-right" />
                                </span>
                              </div>
                            </div>
                          </a>
                          <a class="media-flex-center">
                            <div class="h-avatar">
                              <img
                                class="avatar is-squared"
                                src="/@images/photo/demo/dashboards/lifestyle/7.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="flex-meta">
                              <span>Suit Diving</span>
                              <span>Oct 28, 2020</span>
                            </div>
                            <div class="flex-end">
                              <div class="rating">
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                              </div>
                              <div class="button is-circle">
                                <span class="icon is-small">
                                  <Icon icon="feather:arrow-right" />
                                </span>
                              </div>
                            </div>
                          </a>
                          <a class="media-flex-center">
                            <div class="h-avatar">
                              <img
                                class="avatar is-squared"
                                src="/@images/photo/demo/dashboards/lifestyle/8.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="flex-meta">
                              <span>Desert Trekk</span>
                              <span>Oct 27, 2020</span>
                            </div>
                            <div class="flex-end">
                              <div class="rating">
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                                <i class="fas fa-star selected"></i>
                              </div>
                              <div class="button is-circle">
                                <span class="icon is-small">
                                  <Icon icon="feather:arrow-right" />
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="column is-3">
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

                      <div class="topics">
                        <a>#Trekking</a>
                        <a>#Climbing</a>
                        <a>#Biking</a>
                      </div>
                    </div>
                  </div>

                  <!--Widget-->
                  <div class="widget text-widget">
                    <div class="widget-toolbar">
                      <div class="left">
                        <h3>Messages</h3>
                      </div>
                      <div class="right">
                        <a class="right-icon has-indicator">
                          <Icon icon="feather:message-square" />
                        </a>
                      </div>
                    </div>
                    <div class="widget-content">
                      <p>
                        You currently have more than
                        <span>10 unread messages</span> in your inbox. It could
                        be a good time to check them out.
                      </p>
                    </div>
                  </div>

                  <!--Widget-->
                  <div
                    class="list-widget list-widget-v1 p-t-20 p-l-20 p-r-20 p-b-20"
                  >
                    <div class="widget-head">
                      <h3 class="dark-inverted">Hot Topics</h3>
                      <WidgetDropdown />
                    </div>

                    <div class="inner-list">
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-yellow">
                          <i class="fas fa-biking"></i>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Biking</a>
                          <span>12.2K talk about this</span>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-orange">
                          <i class="fas fa-running"></i>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Running</a>
                          <span>76.4K talk about this</span>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-green">
                          <i class="fas fa-skiing"></i>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Skiing</a>
                          <span>8.6K talk about this</span>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-info">
                          <i class="fas fa-swimmer"></i>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Swimming</a>
                          <span>6.9K talk about this</span>
                        </div>
                      </div>
                      <!--List Item-->
                      <div class="inner-list-item media-flex-center">
                        <div class="h-icon is-purple">
                          <i class="fas fa-dumbbell"></i>
                        </div>
                        <div class="flex-meta is-light">
                          <a href="#">Workout</a>
                          <span>154.8K talk about this</span>
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

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/dashboards/_lifestyle.scss';
@import '../../assets/scss/pages/generic/_widgets-lists.scss';
</style>