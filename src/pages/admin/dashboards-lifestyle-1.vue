<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { ref } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'overview' | 'content' | 'brands'>('overview')

useTitle('Dashboard Lifestyle 1 - Admin - Vuero')
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
      <div class="lifestyle-dashboard-bg"></div>

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
            <!--Lifestyle Dashboard V1-->
            <div class="lifestyle-dashboard lifestyle-dashboard-v1">
              <div class="dashboard-header-wrapper">
                <div class="dashboard-header">
                  <div class="avatar-container">
                    <img
                      src="/@images/photo/demo/faces/girl1.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                    <button class="button is-circle">
                      <span class="icon is-small">
                        <Icon icon="feather:plus" />
                      </span>
                    </button>
                  </div>
                  <div class="header-meta">
                    <div class="username-wrap">
                      <div class="username">
                        <h3>
                          <span>sweet_candy13</span>
                          <i class="fas fa-star"></i>
                        </h3>
                        <span>Clarissa Geller</span>
                      </div>
                      <div class="badges">
                        <span class="tag is-rounded is-success">Music</span>
                        <span class="tag is-rounded is-primary">Lifestyle</span>
                      </div>
                    </div>
                    <div class="meta-stats">
                      <div class="meta-stat">
                        <span>1247</span>
                        <span>Posts</span>
                      </div>
                      <div class="meta-stat">
                        <span>38.3K</span>
                        <span>Followers</span>
                      </div>
                      <div class="meta-stat">
                        <span>329</span>
                        <span>Following</span>
                      </div>
                    </div>
                    <div class="meta-description">
                      <p>
                        Artist, musician, songwriter, influencer, these are the
                        many names people give me. But for you Iam simply
                        Clarissa. *Forever with all my friends* // Latest video
                        can be found here youtu.be/8Tcee5Cyz
                      </p>
                    </div>
                    <div class="meta-achievements">
                      <div
                        class="meta-achievement is-danger"
                        data-toggle="popover"
                        data-pop-mode="hover"
                        data-pop-width="220"
                        data-pop-title="On Fire"
                        data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        data-pop-position="top"
                        data-pop-icon="fas fa-fire"
                        data-pop-iconbg="red"
                      >
                        <i class="fas fa-fire"></i>
                      </div>
                      <div
                        class="meta-achievement is-primary"
                        data-toggle="popover"
                        data-pop-mode="hover"
                        data-pop-width="220"
                        data-pop-title="Post Veteran"
                        data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        data-pop-position="top"
                        data-pop-icon="fas fa-medal"
                        data-pop-iconbg="primary"
                      >
                        <i class="fas fa-medal"></i>
                      </div>
                      <div
                        class="meta-achievement is-yellow"
                        data-toggle="popover"
                        data-pop-mode="hover"
                        data-pop-width="220"
                        data-pop-title="Social Champion"
                        data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        data-pop-position="top"
                        data-pop-icon="fas fa-trophy"
                        data-pop-iconbg="yellow"
                      >
                        <i class="fas fa-trophy"></i>
                      </div>
                    </div>
                  </div>

                  <div class="end">
                    <!--Dropdown-->
                    <InfluencerDropdown />
                  </div>
                </div>
              </div>

              <div class="tabs-wrapper">
                <div class="tabs-inner">
                  <div class="tabs">
                    <ul>
                      <li :class="[activeTab === 'overview' && 'is-active']">
                        <a @click="activeTab = 'overview'">Overview</a>
                      </li>
                      <li :class="[activeTab === 'content' && 'is-active']">
                        <a @click="activeTab = 'content'">Content</a>
                      </li>
                      <li :class="[activeTab === 'brands' && 'is-active']">
                        <a @click="activeTab = 'brands'">Brands</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  id="overview-tab"
                  class="tab-content"
                  :class="[activeTab === 'overview' && 'is-active']"
                >
                  <div class="body-title">
                    <h3>Instagram Stats</h3>
                    <div class="field">
                      <div class="control">
                        <div class="h-select">
                          <div class="select-box">
                            <span>Last 30 days</span>
                          </div>
                          <div class="select-icon">
                            <Icon icon="feather:chevron-down" />
                          </div>
                          <div class="select-drop has-slimscroll-sm">
                            <div class="drop-inner">
                              <div class="option-row">
                                <input
                                  type="radio"
                                  name="instagram_period_select"
                                />
                                <div class="option-meta">
                                  <span>Last Week</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input
                                  type="radio"
                                  name="instagram_period_select"
                                />
                                <div class="option-meta">
                                  <span>Last 30 days</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input
                                  type="radio"
                                  name="instagram_period_select"
                                />
                                <div class="option-meta">
                                  <span>Last 60 days</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input
                                  type="radio"
                                  name="instagram_period_select"
                                />
                                <div class="option-meta">
                                  <span>Last 90 days</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="columns is-multiline is-flex-tablet-p">
                    <!--Card-->
                    <div class="column is-4 is-half-tablet-p">
                      <div class="overview-card">
                        <div class="card-head">
                          <h4>Content Posts (30 days)</h4>
                          <div class="h-icon is-purple is-rounded">
                            <i class="fab fa-instagram"></i>
                          </div>
                        </div>
                        <div class="card-metric">
                          <span>112</span>
                        </div>
                        <div class="card-foot is-down">
                          <span>
                            <span
                              ><Icon icon="feather:arrow-right" /> -0.4%</span
                            >
                            less than usual.
                          </span>
                        </div>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-4 is-half-tablet-p">
                      <div class="overview-card">
                        <div class="card-head">
                          <h4>Followers (30 days)</h4>
                          <div class="h-icon is-info is-rounded">
                            <i class="fas fa-users"></i>
                          </div>
                        </div>
                        <div class="card-metric">
                          <span>14.3k</span>
                        </div>
                        <div class="card-foot is-up">
                          <span>
                            <span
                              ><Icon icon="feather:arrow-right" /> 22.7%</span
                            >
                            follower growth.
                          </span>
                        </div>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-4 is-half-tablet-p">
                      <div class="overview-card">
                        <div class="card-head">
                          <h4>Following (30 days)</h4>
                          <div class="h-icon is-yellow is-rounded">
                            <i class="fas fa-user-plus"></i>
                          </div>
                        </div>
                        <div class="card-metric">
                          <span>44</span>
                        </div>
                        <div class="card-foot is-up">
                          <span>
                            <span
                              ><Icon icon="feather:arrow-right" /> 1.4%</span
                            >
                            following growth.
                          </span>
                        </div>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-4 is-half-tablet-p">
                      <div class="overview-card">
                        <div class="card-head">
                          <h4>Likes (30 days)</h4>
                          <div class="h-icon is-red is-rounded">
                            <i class="fas fa-heart"></i>
                          </div>
                        </div>
                        <div class="card-metric">
                          <span>140.8K</span>
                        </div>
                        <div class="card-foot is-up">
                          <span>
                            <span
                              ><Icon icon="feather:arrow-right" /> 3.6%</span
                            >
                            likes growth.
                          </span>
                        </div>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-4 is-half-tablet-p">
                      <div class="overview-card">
                        <div class="card-head">
                          <h4>Comments (30 days)</h4>
                          <div class="h-icon is-yellow is-rounded">
                            <i class="fas fa-comment"></i>
                          </div>
                        </div>
                        <div class="card-metric">
                          <span>9.3K</span>
                        </div>
                        <div class="card-foot is-down">
                          <span>
                            <span
                              ><Icon icon="feather:arrow-right" /> -1.1%</span
                            >
                            less than usual.
                          </span>
                        </div>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-4 is-half-tablet-p">
                      <div class="overview-card">
                        <div class="card-head">
                          <h4>Profile Views (30 days)</h4>
                          <div class="h-icon is-success is-rounded">
                            <i class="fas fa-glasses"></i>
                          </div>
                        </div>
                        <div class="card-metric">
                          <span>12.1k</span>
                        </div>
                        <div class="card-foot is-up">
                          <span>
                            <span
                              ><Icon icon="feather:arrow-right" /> 22.7%</span
                            >
                            more profile views.
                          </span>
                        </div>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-6 is-full-tablet-p">
                      <div class="stat-widget flex-stat-widget is-straight">
                        <div class="chart-media">
                          <div class="meta">
                            <h4 class="dark-inverted">Reputation Growth</h4>
                            <span class="is-dark-primary">+ 2,654</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Bonum integritas corporis: misera debilitas.
                              Ita ne hoc quidem modo paria.
                            </p>
                          </div>
                          <div class="chart-container">
                            <div id="flex-stat-circle"></div>
                          </div>
                        </div>
                      </div>

                      <!--Grouped Stat Widget-->
                      <div class="stat-widget grouped-stat-widget is-straight">
                        <div class="widget-head">
                          <h3 class="dark-inverted">Social Points</h3>
                        </div>
                        <div class="chart-group">
                          <div class="group">
                            <div class="group-content">
                              <div class="chart-container">
                                <div id="widget-group-radial-1"></div>
                              </div>
                              <span class="dark-inverted">+ 234</span>
                              <p>Creativity</p>
                            </div>
                          </div>
                          <div class="group">
                            <div class="group-content">
                              <div class="chart-container">
                                <div id="widget-group-radial-2"></div>
                              </div>
                              <span class="dark-inverted">+37%</span>
                              <p>Engagement</p>
                            </div>
                          </div>
                          <div class="group">
                            <div class="group-content">
                              <div class="chart-container">
                                <div id="widget-group-radial-3"></div>
                              </div>
                              <span class="dark-inverted">+82%</span>
                              <p>Popularity</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!--Flex Stat Widget-->
                      <div class="stat-widget flex-stat-widget is-straight">
                        <div class="chart-media">
                          <div class="meta">
                            <h4 class="dark-inverted">Influence Growth</h4>
                            <span class="is-dark-primary">+ 3,624</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Bonum integritas corporis: misera debilitas.
                              Ita ne hoc quidem modo paria.
                            </p>
                          </div>
                          <div class="chart-container">
                            <div id="flex-stat-radial"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-6 h-hidden-mobile h-hidden-tablet-p">
                      <div class="overview-card">
                        <div class="card-head">
                          <h3 class="dark-inverted">Recent Hashtags</h3>
                        </div>

                        <div class="cloud-container">
                          <div id="cl" class="cloud">
                            <div class="cloud-element is-bold">
                              <a href="#1">#livemusic</a>
                            </div>
                            <div class="cloud-element">
                              <a href="#2">#unplugged</a>
                            </div>
                            <div class="cloud-element">
                              <a href="#3">#vocals</a>
                            </div>
                            <div class="cloud-element">
                              <img
                                src="http://miuki.info/wp-content/uploads/2010/04/D.png"
                                alt="rofl"
                              />
                            </div>
                            <div class="cloud-element">
                              <img
                                src="http://miuki.info/wp-content/uploads/2010/04/angry.png"
                                alt="angry"
                              />
                            </div>
                            <div class="cloud-element size-3 is-bold">
                              <a href="#6">#music</a>
                            </div>
                            <div class="cloud-element size-2 is-bold">
                              <a href="#7">#rnb</a>
                            </div>
                            <div class="cloud-element">
                              <a href="#8">#guitarsolo</a>
                            </div>
                            <div class="cloud-element">
                              <a href="#9">#songs</a>
                            </div>
                            <div class="cloud-element">
                              <a href="#10">#ambient</a>
                            </div>
                            <div class="cloud-element">
                              <a href="#1">#songwriting</a>
                            </div>
                            <div class="cloud-element size-2 is-bold">
                              <a href="#2">#jazzify</a>
                            </div>
                            <div class="cloud-element">
                              <a href="#3">#tour</a>
                            </div>
                            <div class="cloud-element">
                              <img
                                src="http://miuki.info/wp-content/uploads/2010/04/D.png"
                                alt="rofl"
                              />
                            </div>
                            <div class="cloud-element">
                              <img
                                src="http://miuki.info/wp-content/uploads/2010/04/angry.png"
                                alt="angry"
                              />
                            </div>
                            <div class="cloud-element">
                              <a href="#6">#losangeles</a>
                            </div>
                            <div class="cloud-element">
                              <a href="#7">#soundtrack</a>
                            </div>
                            <div class="cloud-element">
                              <a href="#8">#artists</a>
                            </div>
                            <div class="cloud-element">
                              <a href="#9">#dance</a>
                            </div>
                            <div class="cloud-element size-2 is-bold">
                              <a href="#10">#sing</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="column is-12 is-full-tablet-p">
                      <div class="overview-card is-metrics">
                        <div class="columns is-flex-tablet-p">
                          <!--Metric-->
                          <div class="column is-3">
                            <div class="metric">
                              <div class="metric-head">
                                <h4>Avg. Posts per Day</h4>
                              </div>
                              <div class="metric">
                                <span>7.2</span>
                              </div>
                              <div class="metric-foot is-up">
                                <span>
                                  <span
                                    ><Icon icon="feather:arrow-right" />
                                    +0.4%</span
                                  >
                                  more than usual.
                                </span>
                              </div>
                            </div>
                          </div>
                          <!--Metric-->
                          <div class="column is-3">
                            <div class="metric">
                              <div class="metric-head">
                                <h4>Avg. Comments per Post</h4>
                              </div>
                              <div class="metric">
                                <span>112</span>
                              </div>
                              <div class="metric-foot is-up">
                                <span>
                                  <span
                                    ><Icon icon="feather:arrow-right" />
                                    +24.8%</span
                                  >
                                  more than usual.
                                </span>
                              </div>
                            </div>
                          </div>
                          <!--Metric-->
                          <div class="column is-3">
                            <div class="metric">
                              <div class="metric-head">
                                <h4>Avg. Likes per Post</h4>
                              </div>
                              <div class="metric">
                                <span>1.3K</span>
                              </div>
                              <div class="metric-foot is-down">
                                <span>
                                  <span
                                    ><Icon icon="feather:arrow-right" />
                                    -1.8%</span
                                  >
                                  less than usual.
                                </span>
                              </div>
                            </div>
                          </div>
                          <!--Metric-->
                          <div class="column is-3">
                            <div class="metric">
                              <div class="metric-head">
                                <h4>Avg. Engagement Rate</h4>
                              </div>
                              <div class="metric">
                                <span>5.68%</span>
                              </div>
                              <div class="metric-foot is-up">
                                <span>
                                  <span
                                    ><Icon icon="feather:arrow-right" />
                                    +5.8%</span
                                  >
                                  more than usual.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="content-tab"
                  class="tab-content"
                  :class="[activeTab === 'content' && 'is-active']"
                >
                  <div class="body-title">
                    <h3>Content Stats</h3>
                    <div class="field">
                      <div class="control">
                        <div class="h-select">
                          <div class="select-box">
                            <span>Last 30 days</span>
                          </div>
                          <div class="select-icon">
                            <Icon icon="feather:chevron-down" />
                          </div>
                          <div class="select-drop has-slimscroll-sm">
                            <div class="drop-inner">
                              <div class="option-row">
                                <input
                                  type="radio"
                                  name="content_period_select"
                                />
                                <div class="option-meta">
                                  <span>Last Week</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input
                                  type="radio"
                                  name="content_period_select"
                                />
                                <div class="option-meta">
                                  <span>Last 30 days</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input
                                  type="radio"
                                  name="content_period_select"
                                />
                                <div class="option-meta">
                                  <span>Last 60 days</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input
                                  type="radio"
                                  name="content_period_select"
                                />
                                <div class="option-meta">
                                  <span>Last 90 days</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="columns is-multiline">
                    <!--Posting hours-->
                    <div class="column is-12 h-hidden-mobile">
                      <div class="overview-card is-heatmap">
                        <div class="card-head">
                          <h3 class="dark-inverted">Posting Habits</h3>
                        </div>

                        <div class="heatmap-wrapper">
                          <div class="heatmap-title">
                            <div class="title-avatar">
                              <img
                                src="/@images/photo/demo/faces/girl1.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="title-meta">
                              <p>
                                Clarissa generally posts media on:
                                <span>Mondays at 11am</span>,
                                <span>Thursdays at 3pm</span>,
                                <span>Fridays at 4pm</span> ...
                              </p>
                            </div>
                          </div>

                          <div class="heatmap-inner">
                            <div class="heatmap-row">
                              <div class="heatmap-row-label">
                                <span>Mon</span>
                              </div>
                              <div class="heatmap-row-content">
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item heat-3">
                                  <i class="fas fa-fire"></i>
                                </div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                              </div>
                            </div>
                            <div class="heatmap-row">
                              <div class="heatmap-row-label">
                                <span>Tue</span>
                              </div>
                              <div class="heatmap-row-content">
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                              </div>
                            </div>
                            <div class="heatmap-row">
                              <div class="heatmap-row-label">
                                <span>Wed</span>
                              </div>
                              <div class="heatmap-row-content">
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                              </div>
                            </div>
                            <div class="heatmap-row">
                              <div class="heatmap-row-label">
                                <span>Thu</span>
                              </div>
                              <div class="heatmap-row-content">
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item heat-2"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-3">
                                  <i class="fas fa-fire"></i>
                                </div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                              </div>
                            </div>
                            <div class="heatmap-row">
                              <div class="heatmap-row-label">
                                <span>Fri</span>
                              </div>
                              <div class="heatmap-row-content">
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-3">
                                  <i class="fas fa-fire"></i>
                                </div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-2"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                              </div>
                            </div>
                            <div class="heatmap-row">
                              <div class="heatmap-row-label">
                                <span>Sat</span>
                              </div>
                              <div class="heatmap-row-content">
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-2"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-2"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                              </div>
                            </div>
                            <div class="heatmap-row">
                              <div class="heatmap-row-label">
                                <span>Sun</span>
                              </div>
                              <div class="heatmap-row-content">
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-1"></div>
                                <div class="heatmap-row-item heat-2"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item heat-2"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                                <div class="heatmap-row-item"></div>
                              </div>
                            </div>
                            <div class="heatmap-row">
                              <div class="heatmap-row-label">
                                <span></span>
                              </div>
                              <div class="heatmap-row-content">
                                <div class="heatmap-row-item is-time">
                                  <span>12am</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>1am</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>2am</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>3am</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>4am</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>5am</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>6am</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>7am</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>8am</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>9am</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>10am</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>11am</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>12pm</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>1pm</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>2pm</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>3pm</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>4pm</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>5pm</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>6pm</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>7pm</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>8pm</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>9pm</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>10pm</span>
                                </div>
                                <div class="heatmap-row-item is-time">
                                  <span>11pm</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-4">
                      <div class="overview-card">
                        <div class="card-head">
                          <h4>Post Day</h4>
                          <div class="h-icon is-green is-rounded">
                            <i class="fas fa-calendar-day"></i>
                          </div>
                        </div>
                        <div class="card-metric is-smaller">
                          <span>Monday</span>
                        </div>
                        <div class="card-foot is-down">
                          <span>Best day to post.</span>
                        </div>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-4">
                      <div class="overview-card">
                        <div class="card-head">
                          <h4>hashtags</h4>
                          <div class="h-icon is-info is-rounded">
                            <i class="fab fa-slack-hash"></i>
                          </div>
                        </div>
                        <div class="card-metric is-smaller">
                          <span>#Music</span>
                        </div>
                        <div class="card-foot is-down">
                          <span>Most used hashtag.</span>
                        </div>
                      </div>
                    </div>

                    <!--Card-->
                    <div class="column is-4">
                      <div class="overview-card">
                        <div class="card-head">
                          <h4>Filters</h4>
                          <div class="h-icon is-orange is-rounded">
                            <i class="fas fa-camera"></i>
                          </div>
                        </div>
                        <div class="card-metric is-smaller">
                          <span>Normal</span>
                        </div>
                        <div class="card-foot is-down">
                          <span>Most used filter.</span>
                        </div>
                      </div>
                    </div>

                    <div class="column is-12">
                      <div class="overview-card is-metrics">
                        <div class="columns is-flex-tablet-p">
                          <!--Metric-->
                          <div class="column is-3">
                            <div class="metric">
                              <div class="metric-head">
                                <h4>Avg. Payout per Post</h4>
                              </div>
                              <div class="metric is-smaller">
                                <span>$640.42</span>
                              </div>
                              <div class="metric-foot is-up">
                                <span>
                                  <span
                                    ><Icon icon="feather:arrow-right" />
                                    +0.8%</span
                                  >
                                  more than usual.
                                </span>
                              </div>
                            </div>
                          </div>
                          <!--Metric-->
                          <div class="column is-3">
                            <div class="metric">
                              <div class="metric-head">
                                <h4>Lowest Payout</h4>
                              </div>
                              <div class="metric is-smaller">
                                <span>$451.32</span>
                              </div>
                              <div class="metric-foot is-down">
                                <span>
                                  <span
                                    ><Icon icon="feather:arrow-right" />
                                    -0.2%</span
                                  >
                                  less than ususal.
                                </span>
                              </div>
                            </div>
                          </div>
                          <!--Metric-->
                          <div class="column is-3">
                            <div class="metric">
                              <div class="metric-head">
                                <h4>Highest Payout</h4>
                              </div>
                              <div class="metric is-smaller">
                                <span>$731.87</span>
                              </div>
                              <div class="metric-foot is-up">
                                <span>
                                  <span
                                    ><Icon icon="feather:arrow-right" />
                                    +1.2%</span
                                  >
                                  more than ususal.
                                </span>
                              </div>
                            </div>
                          </div>
                          <!--Metric-->
                          <div class="column is-3">
                            <div class="metric">
                              <div class="metric-head">
                                <h4>Lifetime Earnings</h4>
                              </div>
                              <div class="metric is-smaller">
                                <span>$23.4K</span>
                              </div>
                              <div class="metric-foot is-up">
                                <span>
                                  <span
                                    ><Icon icon="feather:arrow-right" />
                                    +4.2%</span
                                  >
                                  more than ususal.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--Posts-->
                    <div class="column is-4">
                      <div class="card h-card">
                        <header class="card-header">
                          <div class="post-stats">
                            <span>Most Liked Posts</span>
                            <div class="post-stat">
                              <i class="fas fa-heart text-h-red"></i>
                              <span class="count dark-inverted">15.9K</span>
                            </div>
                          </div>
                        </header>
                        <div class="card-image">
                          <figure class="image is-4by3">
                            <img
                              src="/@images/photo/demo/30.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/1280x960'
                              "
                            />
                          </figure>
                        </div>
                        <div class="card-content post-group-wrap">
                          <div class="post-group">
                            <a>
                              <img
                                src="/@images/photo/demo/33.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/1280x960'
                                "
                              />
                            </a>
                            <a>
                              <img
                                src="/@images/photo/demo/34.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/1280x960'
                                "
                              />
                            </a>
                            <a>
                              <img
                                src="/@images/photo/demo/35.jpeg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/1280x960'
                                "
                              />
                            </a>
                            <a>
                              <img
                                src="/@images/photo/demo/36.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/1280x960'
                                "
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--Posts-->
                    <div class="column is-4">
                      <div class="card h-card">
                        <header class="card-header">
                          <div class="post-stats">
                            <span>Most Commented Posts</span>
                            <div class="post-stat">
                              <i class="fas fa-comment text-h-yellow"></i>
                              <span class="count dark-inverted">2.3K</span>
                            </div>
                          </div>
                        </header>
                        <div class="card-image">
                          <figure class="image is-4by3">
                            <img
                              src="/@images/photo/demo/31.png"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/1280x960'
                              "
                            />
                          </figure>
                        </div>
                        <div class="card-content post-group-wrap">
                          <div class="post-group">
                            <a>
                              <img
                                src="/@images/photo/demo/33.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/1280x960'
                                "
                              />
                            </a>
                            <a>
                              <img
                                src="/@images/photo/demo/34.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/1280x960'
                                "
                              />
                            </a>
                            <a>
                              <img
                                src="/@images/photo/demo/35.jpeg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/1280x960'
                                "
                              />
                            </a>
                            <a>
                              <img
                                src="/@images/photo/demo/36.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/1280x960'
                                "
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--Posts-->
                    <div class="column is-4">
                      <div class="card h-card">
                        <header class="card-header">
                          <div class="post-stats">
                            <span>Most Engaging Posts</span>
                            <div class="post-stat">
                              <i class="fas fa-hand-paper text-h-green"></i>
                              <span class="count dark-inverted">51.6%</span>
                            </div>
                          </div>
                        </header>
                        <div class="card-image">
                          <figure class="image is-4by3">
                            <img
                              src="/@images/photo/demo/32.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/1280x960'
                              "
                            />
                          </figure>
                        </div>
                        <div class="card-content post-group-wrap">
                          <div class="post-group">
                            <a>
                              <img
                                src="/@images/photo/demo/33.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/1280x960'
                                "
                              />
                            </a>
                            <a>
                              <img
                                src="/@images/photo/demo/34.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/1280x960'
                                "
                              />
                            </a>
                            <a>
                              <img
                                src="/@images/photo/demo/35.jpeg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/1280x960'
                                "
                              />
                            </a>
                            <a>
                              <img
                                src="/@images/photo/demo/36.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/1280x960'
                                "
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="brands-tab"
                  class="tab-content"
                  :class="[activeTab === 'brands' && 'is-active']"
                >
                  <!--Empty Placeholder -->
                  <div class="page-placeholder">
                    <div class="placeholder-content">
                      <img
                        class="light-image"
                        src="/@images/illustrations/placeholders/having-coffee.svg"
                        alt=""
                      />
                      <img
                        class="dark-image"
                        src="/@images/illustrations/placeholders/having-coffee-dark.svg"
                        alt=""
                      />
                      <h3>No brands to show.</h3>
                      <p class="is-larger">
                        Too bad. Looks like Clarissa enabled her brand privacy
                        setting. You won't be able to see the brands she's
                        working with unless you contact her directly.
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
  </DefaultLayout>
</template>
