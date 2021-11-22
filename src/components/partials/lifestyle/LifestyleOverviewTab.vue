<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import {
  valueSingle,
  optionsSingle,
} from '/@src/data/dashboards/lifestyle-v1/dashboardData'
import {
  creativityRadialOptions,
  engagmentRadialOptions,
  popularityRadialOptions,
} from '/@src/data/dashboards/lifestyle-v1/groupedSocialCharts'
import { reputationChartOptions } from '/@src/data/dashboards/lifestyle-v1/reputationChart'
import { influenceChartOptions } from '/@src/data/dashboards/lifestyle-v1/influenceChart'
</script>

<template>
  <div id="overview-tab" class="tab-content is-active">
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
        <OverviewCard>
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
                <i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i>
                -0.4%</span
              >
              less than usual.
            </span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4 is-half-tablet-p">
        <OverviewCard>
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
                <i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i>
                22.7%</span
              >
              follower growth.
            </span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4 is-half-tablet-p">
        <OverviewCard>
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
                <i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i>
                1.4%</span
              >
              following growth.
            </span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4 is-half-tablet-p">
        <OverviewCard>
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
                <i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i>
                3.6%</span
              >
              likes growth.
            </span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4 is-half-tablet-p">
        <OverviewCard>
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
                <i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i>
                -1.1%</span
              >
              less than usual.
            </span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4 is-half-tablet-p">
        <OverviewCard>
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
                <i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i>
                22.7%</span
              >
              more profile views.
            </span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-6 is-full-tablet-p">
        <div class="stat-widget flex-stat-widget is-straight">
          <div class="chart-media">
            <div class="meta">
              <h4 class="dark-inverted">Reputation Growth</h4>
              <span class="is-dark-primary">+ 2,654</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas
                corporis: misera debilitas. Ita ne hoc quidem modo paria.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas
                corporis: misera debilitas. Ita ne hoc quidem modo paria.
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
        <OverviewCard>
          <div class="card-head">
            <h3 class="dark-inverted">Recent Hashtags</h3>
          </div>

          <CloudContainer />
        </OverviewCard>
      </div>

      <div class="column is-12 is-full-tablet-p">
        <OverviewCard metrics>
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
        </OverviewCard>
      </div>
    </div>
  </div>
</template>
