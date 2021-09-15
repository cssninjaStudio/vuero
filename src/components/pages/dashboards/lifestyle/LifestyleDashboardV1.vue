<script setup lang="ts">
import { ref } from 'vue'
import ApexChart from 'vue3-apexcharts'

import { reputationChartOptions } from '/@src/data/dashboards/lifestyle-v1/reputationChart'
import { influenceChartOptions } from '/@src/data/dashboards/lifestyle-v1/influenceChart'
import {
  creativityRadialOptions,
  engagmentRadialOptions,
  popularityRadialOptions,
} from '/@src/data/dashboards/lifestyle-v1/groupedSocialCharts'

import {
  valueSingle,
  optionsSingle,
} from '/@src/data/dashboards/lifestyle-v1/dashboardData'

import { useViaPlaceholderError } from '/@src/composable/useViaPlaceholderError'

type TabId = 'overview' | 'content' | 'brands'
const activeTab = ref<TabId>('overview')
</script>

<template>
  <div class="lifestyle-dashboard lifestyle-dashboard-v1">
    <div class="dashboard-header-wrapper">
      <div class="dashboard-header">
        <div class="avatar-container">
          <img
            src="/demo/photos/faces/girl1.jpg"
            alt=""
            @error.once="(event) => useViaPlaceholderError(event, '150x150')"
          />
          <button class="button is-circle">
            <span class="icon is-small">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:plus"
              ></i>
            </span>
          </button>
        </div>
        <div class="header-meta">
          <div class="username-wrap">
            <div class="username">
              <h3>
                <span>sweet_candy13</span>
                <i aria-hidden="true" class="fas fa-star"></i>
              </h3>
              <span>Clarissa Geller</span>
            </div>
            <div class="badges">
              <VTag rounded color="info" label="Music" />
              <VTag rounded color="primary" label="Lifestyle" />
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
              Artist, musician, songwriter, influencer, these are the many names
              people give me. But for you Iam simply Clarissa. *Forever with all
              my friends* // Latest video can be found here youtu.be/8Tcee5Cyz
            </p>
          </div>
          <div class="meta-achievements">
            <tippy>
              <div class="meta-achievement is-danger">
                <i aria-hidden="true" class="fas fa-fire"></i>
              </div>
              <template #content>
                <div class="v-popover-content is-text">
                  <div class="popover-head">
                    <VIconBox size="small" color="danger">
                      <i aria-hidden="true" class="fas fa-fire"></i>
                    </VIconBox>
                    <h4 class="dark-inverted">On Fire</h4>
                  </div>
                  <div class="popover-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </template>
            </tippy>

            <tippy>
              <div class="meta-achievement is-primary">
                <i aria-hidden="true" class="fas fa-medal"></i>
              </div>
              <template #content>
                <div class="v-popover-content is-text">
                  <div class="popover-head">
                    <VIconBox size="small" color="primary">
                      <i aria-hidden="true" class="fas fa-medal"></i>
                    </VIconBox>
                    <h4 class="dark-inverted">Post Veteran</h4>
                  </div>
                  <div class="popover-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </template>
            </tippy>

            <tippy>
              <div class="meta-achievement is-yellow">
                <i aria-hidden="true" class="fas fa-trophy"></i>
              </div>
              <template #content>
                <div class="v-popover-content is-text">
                  <div class="popover-head">
                    <VIconBox size="small" color="yellow">
                      <i aria-hidden="true" class="fas fa-medal"></i>
                    </VIconBox>
                    <h4 class="dark-inverted">Social Champion</h4>
                  </div>
                  <div class="popover-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </template>
            </tippy>
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
        v-if="activeTab === 'overview'"
        id="overview-tab"
        class="tab-content is-active"
      >
        <div class="body-title">
          <h3>Instagram Stats</h3>
          <VField class="is-minimal-select">
            <VControl>
              <Multiselect
                id="instagram-stats-select"
                v-model="valueSingle"
                :options="optionsSingle"
                placeholder="Select an option"
                :max-height="145"
              />
            </VControl>
          </VField>
        </div>

        <div class="columns is-multiline is-flex-tablet-p">
          <!--Card-->
          <div class="column is-4 is-half-tablet-p">
            <div class="overview-card">
              <div class="card-head">
                <h4>Content Posts (30 days)</h4>
                <VIconBox color="purple" rounded>
                  <i aria-hidden="true" class="fab fa-instagram"></i>
                </VIconBox>
              </div>
              <div class="card-metric">
                <span>112</span>
              </div>
              <div class="card-foot is-down">
                <span>
                  <span>
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    ></i>
                    -0.4%</span
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
                <VIconBox color="info" rounded>
                  <i aria-hidden="true" class="fas fa-users"></i>
                </VIconBox>
              </div>
              <div class="card-metric">
                <span>14.3k</span>
              </div>
              <div class="card-foot is-up">
                <span>
                  <span>
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    ></i>
                    22.7%</span
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
                <VIconBox color="yellow" rounded>
                  <i aria-hidden="true" class="fas fa-user-plus"></i>
                </VIconBox>
              </div>
              <div class="card-metric">
                <span>44</span>
              </div>
              <div class="card-foot is-up">
                <span>
                  <span>
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    ></i>
                    1.4%</span
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
                <VIconBox color="red" rounded>
                  <i aria-hidden="true" class="fas fa-heart"></i>
                </VIconBox>
              </div>
              <div class="card-metric">
                <span>140.8K</span>
              </div>
              <div class="card-foot is-up">
                <span>
                  <span>
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    ></i>
                    3.6%</span
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
                <VIconBox color="yellow" rounded>
                  <i aria-hidden="true" class="fas fa-comment"></i>
                </VIconBox>
              </div>
              <div class="card-metric">
                <span>9.3K</span>
              </div>
              <div class="card-foot is-down">
                <span>
                  <span>
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    ></i>
                    -1.1%</span
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
                <VIconBox color="success" rounded>
                  <i aria-hidden="true" class="fas fa-glasses"></i>
                </VIconBox>
              </div>
              <div class="card-metric">
                <span>12.1k</span>
              </div>
              <div class="card-foot is-up">
                <span>
                  <span>
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    ></i>
                    22.7%</span
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Bonum integritas corporis: misera debilitas. Ita ne hoc
                    quidem modo paria.
                  </p>
                </div>
                <div class="chart-container">
                  <ApexChart
                    id="flex-stat-circle"
                    :height="reputationChartOptions.chart.height"
                    :type="reputationChartOptions.chart.type"
                    :series="reputationChartOptions.series"
                    :options="reputationChartOptions"
                  >
                  </ApexChart>
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
                      <ApexChart
                        id="widget-group-radial-1"
                        :height="creativityRadialOptions.chart.height"
                        :type="creativityRadialOptions.chart.type"
                        :series="creativityRadialOptions.series"
                        :options="creativityRadialOptions"
                      >
                      </ApexChart>
                    </div>
                    <span class="dark-inverted">+ 234</span>
                    <p>Creativity</p>
                  </div>
                </div>
                <div class="group">
                  <div class="group-content">
                    <div class="chart-container">
                      <ApexChart
                        id="widget-group-radial-2"
                        :height="engagmentRadialOptions.chart.height"
                        :type="engagmentRadialOptions.chart.type"
                        :series="engagmentRadialOptions.series"
                        :options="engagmentRadialOptions"
                      >
                      </ApexChart>
                    </div>
                    <span class="dark-inverted">+37%</span>
                    <p>Engagement</p>
                  </div>
                </div>
                <div class="group">
                  <div class="group-content">
                    <div class="chart-container">
                      <ApexChart
                        id="widget-group-radial-3"
                        :height="popularityRadialOptions.chart.height"
                        :type="popularityRadialOptions.chart.type"
                        :series="popularityRadialOptions.series"
                        :options="popularityRadialOptions"
                      >
                      </ApexChart>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Bonum integritas corporis: misera debilitas. Ita ne hoc
                    quidem modo paria.
                  </p>
                </div>
                <div class="chart-container">
                  <ApexChart
                    id="flex-stat-radial"
                    :height="influenceChartOptions.chart.height"
                    :type="influenceChartOptions.chart.type"
                    :series="influenceChartOptions.series"
                    :options="influenceChartOptions"
                  >
                  </ApexChart>
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
                <ul>
                  <li><a class="size1" href="#">adobe</a></li>
                  <li><a class="size2" href="#">animation</a></li>
                  <li><a class="size3" href="#">arts</a></li>
                  <li><a class="size4" href="#">bizarre</a></li>
                  <li><a class="size5" href="#">blogs</a></li>
                  <li><a class="size6" href="#">books</a></li>
                  <li><a class="size1" href="#">comics</a></li>
                  <li><a class="size2" href="#">computer-graphics</a></li>
                  <li><a class="size3" href="#">cooking</a></li>
                  <li><a class="size4" href="#">cyberculture</a></li>
                  <li><a class="size5" href="#">design</a></li>
                  <li><a class="size6" href="#">drawing</a></li>
                  <li><a class="size1" href="#">fine-arts</a></li>
                  <li><a class="size2" href="#">graphic-design</a></li>
                  <li><a class="size3" href="#">humor</a></li>
                  <li><a class="size4" href="#">illustration</a></li>
                  <li><a class="size5" href="#">indesign</a></li>
                  <li><a class="size6" href="#">internet</a></li>
                  <li><a class="size1" href="#">movies</a></li>
                  <li><a class="size2" href="#">mac-os</a></li>
                  <li><a class="size3" href="#">multimedia</a></li>
                  <li><a class="size4" href="#">online-games</a></li>
                  <li><a class="size5" href="#">photography</a></li>
                  <li><a class="size6" href="#">web-design</a></li>
                  <li><a class="size1" href="#">css</a></li>
                </ul>
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
                        <span>
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:arrow-right"
                          ></i>
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
                        <span>
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:arrow-right"
                          ></i>
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
                        <span>
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:arrow-right"
                          ></i>
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
                        <span>
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:arrow-right"
                          ></i>
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
        v-if="activeTab === 'content'"
        id="content-tab"
        class="tab-content is-active"
      >
        <div class="body-title">
          <h3>Content Stats</h3>
          <VField class="is-minimal-select">
            <VControl>
              <Multiselect
                id="content-stats-select"
                v-model="valueSingle"
                :options="optionsSingle"
                placeholder="Select an option"
                :max-height="145"
              />
            </VControl>
          </VField>
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
                      src="/demo/photos/faces/girl1.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '150x150')
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
                        <i aria-hidden="true" class="fas fa-fire"></i>
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
                        <i aria-hidden="true" class="fas fa-fire"></i>
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
                        <i aria-hidden="true" class="fas fa-fire"></i>
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
                <VIconBox color="green" rounded>
                  <i aria-hidden="true" class="fas fa-calendar-day"></i>
                </VIconBox>
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
                <VIconBox color="info" rounded>
                  <i aria-hidden="true" class="fab fa-slack-hash"></i>
                </VIconBox>
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
                <VIconBox color="orange" rounded>
                  <i aria-hidden="true" class="fas fa-camera"></i>
                </VIconBox>
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
                        <span>
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:arrow-right"
                          ></i>
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
                        <span>
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:arrow-right"
                          ></i>
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
                        <span>
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:arrow-right"
                          ></i>
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
                        <span>
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:arrow-right"
                          ></i>
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
            <div class="card v-card">
              <header class="card-header">
                <div class="post-stats">
                  <span>Most Liked Posts</span>
                  <div class="post-stat">
                    <i aria-hidden="true" class="fas fa-heart text-h-red"></i>
                    <span class="count dark-inverted">15.9K</span>
                  </div>
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="/demo/photos/30.jpg"
                    alt=""
                    @error.once="
                      (event) => useViaPlaceholderError(event, '1280x960')
                    "
                  />
                </figure>
              </div>
              <div class="card-content post-group-wrap">
                <div class="post-group">
                  <a>
                    <img
                      src="/demo/photos/33.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '1280x960')
                      "
                    />
                  </a>
                  <a>
                    <img
                      src="/demo/photos/34.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '1280x960')
                      "
                    />
                  </a>
                  <a>
                    <img
                      src="/demo/photos/35.jpeg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '1280x960')
                      "
                    />
                  </a>
                  <a>
                    <img
                      src="/demo/photos/36.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '1280x960')
                      "
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!--Posts-->
          <div class="column is-4">
            <div class="card v-card">
              <header class="card-header">
                <div class="post-stats">
                  <span>Most Commented Posts</span>
                  <div class="post-stat">
                    <i
                      aria-hidden="true"
                      class="fas fa-comment text-h-yellow"
                    ></i>
                    <span class="count dark-inverted">2.3K</span>
                  </div>
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="/demo/photos/31.png"
                    alt=""
                    @error.once="
                      (event) => useViaPlaceholderError(event, '1280x960')
                    "
                  />
                </figure>
              </div>
              <div class="card-content post-group-wrap">
                <div class="post-group">
                  <a>
                    <img
                      src="/demo/photos/33.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '1280x960')
                      "
                    />
                  </a>
                  <a>
                    <img
                      src="/demo/photos/34.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '1280x960')
                      "
                    />
                  </a>
                  <a>
                    <img
                      src="/demo/photos/35.jpeg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '1280x960')
                      "
                    />
                  </a>
                  <a>
                    <img
                      src="/demo/photos/36.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '1280x960')
                      "
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!--Posts-->
          <div class="column is-4">
            <div class="card v-card">
              <header class="card-header">
                <div class="post-stats">
                  <span>Most Engaging Posts</span>
                  <div class="post-stat">
                    <i
                      aria-hidden="true"
                      class="fas fa-hand-paper text-h-green"
                    ></i>
                    <span class="count dark-inverted">51.6%</span>
                  </div>
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="/demo/photos/32.jpg"
                    alt=""
                    @error.once="
                      (event) => useViaPlaceholderError(event, '1280x960')
                    "
                  />
                </figure>
              </div>
              <div class="card-content post-group-wrap">
                <div class="post-group">
                  <a>
                    <img
                      src="/demo/photos/33.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '1280x960')
                      "
                    />
                  </a>
                  <a>
                    <img
                      src="/demo/photos/34.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '1280x960')
                      "
                    />
                  </a>
                  <a>
                    <img
                      src="/demo/photos/35.jpeg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '1280x960')
                      "
                    />
                  </a>
                  <a>
                    <img
                      src="/demo/photos/36.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '1280x960')
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
        v-if="activeTab === 'brands'"
        id="brands-tab"
        class="tab-content is-active"
      >
        <!--Empty Placeholder -->
        <div class="page-placeholder">
          <div class="placeholder-content">
            <img
              class="light-image"
              src="/@src/assets/illustrations/placeholders/having-coffee.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/having-coffee-dark.svg"
              alt=""
            />
            <h3>No brands to show.</h3>
            <p class="is-larger">
              Too bad. Looks like Clarissa enabled her brand privacy setting.
              You won't be able to see the brands she's working with unless you
              contact her directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_widgets-stats.scss';

.lifestyle-dashboard-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 355px;
  background: var(--white);
  z-index: 1;

  &.has-top-nav {
    height: 368px;
  }
}

.lifestyle-dashboard-v1 {
  .dashboard-header-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 220px;
    margin-bottom: 20px;
    z-index: 1;

    .dashboard-header {
      display: flex;
      width: 100%;

      .avatar-container {
        position: relative;
        height: 140px;
        width: 140px;
        min-width: 140px;

        img {
          display: block;
          height: 140px;
          width: 140px;
          min-width: 140px;
          border-radius: var(--radius-rounded);
        }

        .button {
          position: absolute;
          bottom: 5px;
          right: 5px;
        }
      }

      .header-meta {
        font-family: var(--font);
        margin-left: 16px;

        .username-wrap {
          display: flex;

          .username {
            h3 {
              font-family: var(--font-alt);
              color: var(--dark-text);
              font-size: 1.2rem;
              font-weight: 700;

              i {
                font-size: 1.2rem;
                margin-left: 5px;
                color: var(--yellow);
              }
            }

            > span {
              color: var(--light-text-dark-5);
            }
          }

          .badges {
            margin-left: 16px;

            .tag {
              margin-right: 0.5rem;
            }
          }
        }

        .meta-stats {
          display: flex;
          padding: 16px 0;

          .meta-stat {
            margin-right: 30px;

            span {
              &:first-child {
                color: var(--dark-text);
                font-size: 1.3rem;
                font-weight: 600;
                margin-right: 0.25rem;
              }

              &:nth-child(2) {
                color: var(--light-text);
              }
            }
          }
        }

        .meta-description {
          max-width: 640px;

          p {
            color: var(--light-text-dark-5);
          }
        }

        .meta-achievements {
          display: flex;
          padding-top: 16px;

          .meta-achievement {
            height: 36px;
            width: 36px;
            min-width: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid var(--white);
            background: var(--fade-grey);
            border-radius: var(--radius-rounded);
            margin-right: 10px;
            box-shadow: var(--light-box-shadow);

            &.is-primary {
              color: var(--primary);
              background: var(--primary-light-45);
            }

            &.is-yellow {
              color: var(--yellow);
              background: var(--yellow-light-22);
            }

            &.is-danger {
              color: var(--danger);
              background: var(--danger-light-40);
            }
          }
        }
      }

      .end {
        margin-left: auto;
      }
    }
  }

  .tabs-wrapper {
    .tabs-inner {
      .tabs {
        margin-bottom: 30px;
        z-index: 10;

        ul {
          border: none;

          li {
            z-index: 10;

            a {
              border-bottom-width: 4px;
            }
          }
        }
      }
    }
  }

  .body-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--font);
    margin-bottom: 20px;

    h3 {
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--dark-text);
    }

    .field {
      z-index: 5;
      min-width: 135px;

      .multiselect {
        .multiselect-input {
          .multiselect-single-label {
            color: var(--light-text);
          }
        }

        .multiselect-options {
          left: unset !important;
          min-width: 180px;
        }
      }
    }
  }

  .overview-card {
    @include vuero-s-card();

    font-family: var(--font);

    &.is-metrics,
    &.is-heatmap {
      padding: 30px;
    }

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &.has-margin-bottom {
        margin-bottom: 16px;
      }

      h4 {
        color: var(--light-text-dark-2);
      }

      h3 {
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-text);
      }
    }

    .card-metric {
      font-weight: 700;
      font-size: 2.8rem;
      color: var(--dark-text);
      padding: 6px 0 16px 0;

      &.is-smaller {
        font-size: 2.5rem;
      }
    }

    .card-foot {
      display: flex;
      align-items: center;

      &.is-up {
        span span {
          color: var(--green);

          svg {
            transform: rotate(-45deg);
          }
        }
      }

      &.is-down {
        span span {
          color: var(--red);

          svg {
            transform: rotate(45deg);
          }
        }
      }

      span {
        display: flex;
        color: var(--light-text);

        span {
          margin-right: 8px;
          font-weight: 500;

          svg {
            height: 18px;
            width: 18px;
            stroke-width: 3px;
          }
        }
      }
    }

    .cloud-container {
      position: relative;
      height: 455px;
      text-align: center;

      ul {
        margin-top: 1.5rem;
        list-style-type: none;

        li {
          display: inline-block;

          a {
            text-decoration: none;
            line-height: 1.8em;
            font-family: var(--font);
            color: var(--dark-text);
            transition: background-color 0.3s, box-shadow 0.3s;

            &.size1 {
              color: var(--light-text);
              padding: 6px;
              border-radius: 0.5rem;

              &:hover {
                background-color: var(--primary);
                box-shadow: var(--primary-box-shadow);
                color: var(--white);
              }
            }

            &.size2 {
              font-size: 1.25rem;
              padding: 12px;
              border-radius: 0.5rem;

              &:hover {
                background-color: var(--danger);
                box-shadow: var(--danger-box-shadow);
                color: var(--white);
              }
            }

            &.size3 {
              font-size: 1.5rem;
              padding: 18px;
              border-radius: 0.75rem;
              color: var(--dark-text-light-18);

              &:hover {
                background-color: var(--yellow);
                box-shadow: var(--yellow-box-shadow);
                color: var(--white);
              }
            }

            &.size4 {
              padding: 10px 16px;
              font-size: 1.75rem;
              border-radius: 0.75rem;

              &:hover {
                background-color: var(--green);
                box-shadow: var(--green-box-shadow);
                color: var(--white);
              }
            }

            &.size5 {
              padding: 8px 14px;
              font-size: 2rem;
              border-radius: 0.75rem;

              &:hover {
                background-color: var(--info);
                box-shadow: var(--info-box-shadow);
                color: var(--white);
              }
            }

            &.size6 {
              padding: 24px;
              font-size: 2.5rem;
              border-radius: 0.75rem;

              &:hover {
                background-color: var(--purple);
                box-shadow: var(--purple-box-shadow);
                color: var(--white);
              }
            }
          }
        }
      }
    }

    .metric {
      .metric-head {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
          color: var(--light-text-dark-2);
        }
      }

      .metric {
        font-weight: 700;
        font-size: 2.8rem;
        color: var(--dark-text);
        padding: 10px 0;

        &.is-smaller {
          font-size: 2.5rem;
        }
      }

      .metric-foot {
        display: flex;
        align-items: center;

        &.is-up {
          span span {
            color: var(--green);

            svg {
              transform: rotate(-45deg);
            }
          }
        }

        &.is-down {
          span span {
            color: var(--red);

            svg {
              transform: rotate(45deg);
            }
          }
        }

        span {
          display: flex;
          color: var(--light-text);

          span {
            margin-right: 8px;
            font-weight: 500;

            svg {
              height: 18px;
              width: 18px;
              stroke-width: 3px;
            }
          }
        }
      }
    }
  }

  .stat-widget {
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }

  .heatmap-wrapper {
    .heatmap-title {
      display: flex;
      align-items: center;
      padding: 16px;

      .title-avatar {
        border-radius: var(--radius-rounded);
        border: 1px solid var(--fade-grey-dark-3);
        box-shadow: var(--light-box-shadow);

        img {
          display: block;
          height: 50px;
          width: 50px;
          min-width: 50px;
          border-radius: var(--radius-rounded);
          border: 3px solid var(--white);
        }
      }

      .title-meta {
        margin-left: 16px;

        p {
          span {
            color: var(--dark-text);
            font-weight: 500;
          }
        }
      }
    }

    .heatmap-inner {
      .heatmap-row {
        display: flex;
        align-items: center;

        .heatmap-row-label {
          width: 60px;
          text-align: center;
          color: var(--light-text);
          font-size: 0.95rem;
        }

        .heatmap-row-content {
          display: flex;
          flex-grow: 2;

          .heatmap-row-item {
            margin: 5px;
            flex: 1 1 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 34px;
            border-radius: var(--radius-large);
            background: var(--widget-grey-dark-2);

            &.heat-1 {
              background: var(--primary-light-48);
            }

            &.heat-2 {
              background: var(--primary-light-30);
            }

            &.heat-3 {
              background: var(--primary);

              i {
                color: var(--smoke-white);
                font-size: 12px;
              }
            }

            &.is-time {
              background: none;
              color: var(--light-text);
              font-size: 0.95rem;
              min-height: 26px;
            }
          }
        }
      }
    }
  }

  .post-stats {
    padding: 16px;
    text-align: center;
    width: 100%;
    font-family: var(--font);
    font-size: 0.9rem;

    span {
      color: var(--light-text);
    }

    .post-stat {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1.2;

      i {
        font-size: 1.2rem;
        margin-right: 6px;
      }

      .count {
        font-size: 2.2rem;
        font-weight: 700;
        color: var(--dark-text);
      }
    }
  }

  .post-group-wrap {
    padding: 4px 10px;

    .post-group {
      display: flex;
      margin-left: -6px;
      margin-right: -6px;

      a {
        display: block;
        width: calc(25% - 12px);
        margin: 6px;

        img {
          display: block;
          width: 100%;
          min-height: 65px;
          max-height: 85px;
          object-fit: cover;
          border-radius: var(--radius-large);
          margin: 0;
        }
      }
    }
  }
}

.is-dark {
  .lifestyle-dashboard-bg {
    background: var(--dark-sidebar-light-6);
  }

  .lifestyle-dashboard-v1 {
    .dashboard-header-wrapper {
      .dashboard-header {
        .header-meta {
          .username-wrap {
            .username {
              h3 {
                color: var(--dark-dark-text);
              }
            }
          }

          .meta-stats {
            .meta-stat {
              span {
                &:first-child {
                  color: var(--dark-dark-text);
                }
              }
            }
          }
        }
      }
    }

    .body-title {
      h3 {
        color: var(--dark-dark-text);
      }
    }

    .overview-card {
      @include vuero-card--dark();

      .card-metric,
      .metric .metric {
        color: var(--dark-dark-text);
      }

      .cloud-container {
        ul li a {
          color: var(--white);

          &.size-1 {
            color: var(--light-text) !important;
          }

          &.size-3 {
            color: var(--dark-text-light-25) !important;
          }

          &.size-4 {
            color: var(--dark-dark-text) !important;
          }
        }
      }

      .heatmap-wrapper {
        .heatmap-title {
          .title-avatar {
            border-color: var(--dark-sidebar-light-12);

            img {
              border-color: var(--dark-sidebar-dark-2);
            }
          }

          .title-meta {
            p span {
              color: var(--dark-dark-text);
            }
          }
        }

        .heatmap-inner {
          .heatmap-row {
            .heatmap-row-content {
              .heatmap-row-item:not(.is-time) {
                background: var(--dark-sidebar-light-10);

                &.heat-1 {
                  background: var(--dark-sidebar-light-2);
                }

                &.heat-2 {
                  background: var(--primary-light-10);
                }

                &.heat-3 {
                  background: var(--primary);

                  i {
                    color: var(--smoke-white);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .lifestyle-dashboard-bg {
    &:not(.has-top-nav) {
      height: 614px;
    }

    &.has-top-nav {
      height: 625px;
    }
  }

  .lifestyle-dashboard-v1 {
    .dashboard-header-wrapper {
      height: 418px;

      .dashboard-header {
        flex-direction: column;

        .avatar-container {
          margin: 0 auto 10px auto;
        }

        .header-meta {
          margin-left: 0;
          text-align: center;

          .username-wrap {
            flex-direction: column;

            .badges {
              margin: 10px auto;
            }
          }

          .meta-stats {
            justify-content: center;

            .meta-stat {
              margin: 0 10px;
            }
          }

          .meta-achievements {
            justify-content: center;
            padding-bottom: 16px;
          }
        }

        .end {
          position: absolute;
          right: 0;
        }
      }
    }

    .tabs-wrapper {
      .tabs-inner {
        .tabs {
          ul {
            text-align: center;
            justify-content: center;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .lifestyle-dashboard-bg {
    &.has-top-nav {
      height: 428px;
    }
    &:not(.has-top-nav) {
      height: 415px;
    }
  }

  .lifestyle-dashboard-v1 {
    .is-flex-tablet-p {
      flex-wrap: wrap;

      .is-half-tablet-p {
        min-width: 50%;
      }

      .is-full-tablet-p {
        min-width: 100%;
      }

      .column.is-3 {
        min-width: 50%;
      }
    }

    .heatmap-wrapper {
      .heatmap-inner {
        .heatmap-row {
          .heatmap-row-label {
            width: 40px;
          }

          .heatmap-row-content {
            .heatmap-row-item {
              &:first-child,
              &:nth-child(2),
              &:nth-child(3),
              &:nth-child(4),
              &:nth-child(5),
              &:nth-child(6),
              &:nth-child(7),
              &:nth-child(8),
              &:nth-child(9) {
                display: none;
              }

              &.is-time {
                font-size: 0.85rem;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .lifestyle-dashboard-v1 {
    .cloud-container {
      width: 400px !important;
      height: 495px !important;

      .cloud {
        width: 400px !important;
      }

      .cloud-element {
        font-size: 1.5em !important;

        &.size-2 {
          font-size: 2rem !important;
        }

        &.size-3 {
          font-size: 3rem !important;
        }
      }
    }

    .heatmap-wrapper {
      .heatmap-inner {
        .heatmap-row {
          .heatmap-row-label {
            width: 40px;
          }

          .heatmap-row-content {
            .heatmap-row-item {
              &:first-child,
              &:nth-child(2),
              &:nth-child(3),
              &:nth-child(4),
              &:nth-child(5),
              &:nth-child(6) {
                display: none;
              }

              &.is-time {
                font-size: 0.85rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
