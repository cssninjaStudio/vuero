<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'
import { themeColors } from '/@src/composition/state/themeColors'

const customersOptions = {
  series: [
    {
      name: 'Returning',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Newcomers',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: 'Abandonned',
      data: [78, 53, 36, 10, 14, 5, 2],
    },
  ],
  chart: {
    height: 295,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.accent, themeColors.info, themeColors.orange],
  title: {
    text: 'Customers',
    align: 'left',
  },
  legend: {
    position: 'top',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'smooth',
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2020-09-19T00:00:00.000Z',
      '2020-09-20T01:30:00.000Z',
      '2020-09-21T02:30:00.000Z',
      '2020-09-22T03:30:00.000Z',
      '2020-09-23T04:30:00.000Z',
      '2020-09-24T05:30:00.000Z',
      '2020-09-25T06:30:00.000Z',
    ],
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
}

const teamGaugeOptions = {
  series: [76],
  title: {
    text: 'Team Efficiency',
  },
  chart: {
    height: 345,
    type: 'radialBar',
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.info,
  ],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: '#e7e7e7',
        strokeWidth: '97%',
        margin: 5, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: 2,
          left: 0,
          color: '#999',
          opacity: 1,
          blur: 2,
        },
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: -2,
          fontSize: '22px',
        },
      },
    },
  },
  grid: {
    padding: {
      top: 80,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91],
    },
  },
  labels: ['Average Results'],
}

const profitChartOptions = {
  series: [
    {
      name: 'Ratio',
      data: [2.3, 3.1, 4.0, 10.1, 4.0],
    },
  ],
  chart: {
    height: 262,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: string) {
      return val + '%'
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758'],
    },
  },
  xaxis: {
    categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
    position: 'top',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val: string) {
        return val + '%'
      },
    },
  },
  colors: [themeColors.green, themeColors.secondary, themeColors.orange],
  title: {
    text: 'Profit Evolution',
    align: 'left',
  },
}

onMounted(() => {
  activeSidebar.value = 'home'
})

useTitle('Dashboard Personal 1 - Admin - Vuero')
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
            <!--Personal Dashboard V1-->
            <div class="personal-dashboard personal-dashboard-v1">
              <!--Header-->
              <div class="dashboard-header">
                <div class="h-avatar is-large">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="start">
                  <h3>Welcome back, Erik Kovalsky</h3>
                  <p>
                    We're very happy to see you again on your personal
                    dashboard.
                  </p>
                </div>
                <div class="end">
                  <button class="button h-button is-dark-outlined">
                    View Reports
                  </button>
                  <button class="button h-button is-primary is-elevated">
                    Manage Store
                  </button>
                </div>
              </div>

              <!--Body-->
              <div class="dashboard-body">
                <div class="columns is-multiline">
                  <!--Card-->
                  <div class="column is-6">
                    <div class="dashboard-card">
                      <h4 class="dark-inverted">Your Quick Stats</h4>

                      <div class="quick-stats">
                        <div class="quick-stats-inner">
                          <!--Stat-->
                          <div class="quick-stat">
                            <div class="media-flex-center">
                              <div class="h-icon is-purple is-rounded">
                                <i class="lnil lnil-analytics-alt-1"></i>
                              </div>
                              <div class="flex-meta">
                                <span>2,870</span>
                                <span>Sales this month</span>
                              </div>
                            </div>
                          </div>
                          <!--Stat-->
                          <div class="quick-stat">
                            <div class="media-flex-center">
                              <div class="h-icon is-orange is-rounded">
                                <i class="lnil lnil-handshake"></i>
                              </div>
                              <div class="flex-meta">
                                <span>131</span>
                                <span>New users</span>
                              </div>
                            </div>
                          </div>
                          <!--Stat-->
                          <div class="quick-stat">
                            <div class="media-flex-center">
                              <div class="h-icon is-green is-rounded">
                                <i class="lnil lnil-diamond-alt"></i>
                              </div>
                              <div class="flex-meta">
                                <span>$398,49</span>
                                <span>Earned today</span>
                              </div>
                            </div>
                          </div>
                          <!--Stat-->
                          <div class="quick-stat">
                            <div class="media-flex-center">
                              <div class="h-icon is-info is-rounded">
                                <i class="lnil lnil-bank"></i>
                              </div>
                              <div class="flex-meta">
                                <span>$6542,31</span>
                                <span>Total balance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Card-->
                  <div class="column is-6">
                    <div class="dashboard-card">
                      <apexchart
                        id="customers-chart"
                        :height="customersOptions.chart.height"
                        :type="customersOptions.chart.type"
                        :series="customersOptions.series"
                        :options="customersOptions"
                      ></apexchart>
                    </div>
                  </div>

                  <!--Card-->
                  <div class="column is-4">
                    <div class="dashboard-card is-upgrade">
                      <i class="lnil lnil-crown-alt-1"></i>
                      <div class="cta-content">
                        <h4>Hey Erik, you're doing great.</h4>
                        <p class="white-text">
                          Start using our team and project management tools
                        </p>
                        <a class="link inverted-text">Learn More</a>
                      </div>
                    </div>
                  </div>

                  <!--Card-->
                  <div class="column is-4">
                    <div class="dashboard-card is-gauge">
                      <div class="people">
                        <div class="h-avatar">
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
                        <div class="h-avatar">
                          <span
                            class="avatar is-fake is-h-purple"
                            data-user-popover="35"
                          >
                            <span>SC</span>
                          </span>
                        </div>
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/39.jpg"
                            alt=""
                            data-user-popover="33"
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                      </div>
                      <div></div>
                      <apexchart
                        id="team-gauge"
                        :height="teamGaugeOptions.chart.height"
                        :type="teamGaugeOptions.chart.type"
                        :series="teamGaugeOptions.series"
                        :options="teamGaugeOptions"
                      ></apexchart>
                    </div>
                  </div>

                  <!--Card-->
                  <div class="column is-4">
                    <div class="dashboard-card">
                      <apexchart
                        id="profit-chart"
                        :height="profitChartOptions.chart.height"
                        :type="profitChartOptions.chart.type"
                        :series="profitChartOptions.series"
                        :options="profitChartOptions"
                      ></apexchart>
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
@import '../../assets/scss/pages/dashboards/_personal.scss';
</style>
