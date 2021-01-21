<script setup lang="ts">
import {
  spark1,
  spark2,
  spark3,
  spark4,
} from '/@src/composition/state/charts/apexcharts/examples/salesSparksChart'
import { revenueOptions } from '/@src/composition/state/charts/apexcharts/examples/revenueAreaChart'
import { lineStatsChartOptions } from '/@src/composition/state/charts/apexcharts/examples/lineStatsWidgetChart'
import { flexRadialChartCircleOptions } from '/@src/composition/state/charts/apexcharts/examples/flexRadialChartCircleChart'
import { flexRadialChartStripesOptions } from '/@src/composition/state/charts/apexcharts/examples/flexRadialChartStripesChart'
import {
  widgetRadialGroup1Options,
  widgetRadialGroup2Options,
  widgetRadialGroup3Options,
} from '/@src/composition/state/charts/apexcharts/examples/groupedCircleCharts'
import {
  widgetGaugeGroup1Options,
  widgetGaugeGroup2Options,
  widgetGaugeGroup3Options,
} from '/@src/composition/state/charts/apexcharts/examples/groupedRadialCharts'
</script>

<template>
  <!--Stat Widgets-->
  <div class="columns is-multiline">
    <!--Spark Tile Widgets-->
    <div class="column is-3">
      <SparkStatWidget straight>
        <apexchart
          id="widget-spark1"
          :height="spark1.chart.height"
          :type="spark1.chart.type"
          :series="spark1.series"
          :options="spark1"
        ></apexchart>
      </SparkStatWidget>
    </div>

    <div class="column is-3">
      <SparkStatWidget straight>
        <apexchart
          id="widget-spark2"
          :height="spark2.chart.height"
          :type="spark2.chart.type"
          :series="spark2.series"
          :options="spark2"
        ></apexchart>
      </SparkStatWidget>
    </div>

    <div class="column is-3">
      <SparkStatWidget straight>
        <apexchart
          id="widget-spark3"
          :height="spark3.chart.height"
          :type="spark3.chart.type"
          :series="spark3.series"
          :options="spark3"
        ></apexchart>
      </SparkStatWidget>
    </div>

    <div class="column is-3">
      <SparkStatWidget straight>
        <apexchart
          id="widget-spark4"
          :height="spark4.chart.height"
          :type="spark4.chart.type"
          :series="spark4.series"
          :options="spark4"
        ></apexchart>
      </SparkStatWidget>
    </div>

    <!--Line Stats Widget-->
    <div class="column is-6">
      <LineStatWidget
        title="Revenue"
        current-label="This Month"
        current-value="$75,648.43"
        previous-label="Last Month"
        previous-value="$91,512.18"
        straight
      >
        <apexchart
          id="line-stats-widget-chart"
          :height="lineStatsChartOptions.chart.height"
          :type="lineStatsChartOptions.chart.type"
          :series="lineStatsChartOptions.series"
          :options="lineStatsChartOptions"
        ></apexchart>
      </LineStatWidget>
    </div>

    <!--Line Stats Widget-->
    <div class="column is-6">
      <LineStatWidget
        title="Revenue"
        current-label="This Month"
        current-value="$75,648.43"
        previous-label="Last Month"
        previous-value="$91,512.18"
        straight
      >
        <apexchart
          id="line-stats-area-chart"
          :height="revenueOptions.chart.height"
          :type="revenueOptions.chart.type"
          :series="revenueOptions.series"
          :options="revenueOptions"
        ></apexchart>
      </LineStatWidget>
    </div>

    <!--Flex Stat Widget-->
    <div class="column is-6">
      <FlexStatWidget title="Sales Revenue" straight>
        <apexchart
          id="flex-stat-circle"
          :height="flexRadialChartCircleOptions.chart.height"
          :type="flexRadialChartCircleOptions.chart.type"
          :series="flexRadialChartCircleOptions.series"
          :options="flexRadialChartCircleOptions"
        ></apexchart>
      </FlexStatWidget>
    </div>

    <!--Flex Stat Widget-->
    <div class="column is-6">
      <FlexStatWidget title="Sales Revenue" straight>
        <apexchart
          id="flex-stat-radial"
          :height="flexRadialChartStripesOptions.chart.height"
          :type="flexRadialChartStripesOptions.chart.type"
          :series="flexRadialChartStripesOptions.series"
          :options="flexRadialChartStripesOptions"
        ></apexchart>
      </FlexStatWidget>
    </div>

    <!--Grouped Stat Widget-->
    <div class="column is-6">
      <GroupedStatWidget
        title="Additional Stats"
        :values="['264', '1,203', '3,078']"
        :labels="['New Deals', 'Proposals', 'Closed Deals']"
      >
        <template #chart1>
          <apexchart
            id="group-radial-1"
            :height="widgetRadialGroup1Options.chart.height"
            :type="widgetRadialGroup1Options.chart.type"
            :series="widgetRadialGroup1Options.series"
            :options="widgetRadialGroup1Options"
          ></apexchart>
        </template>
        <template #chart2>
          <apexchart
            id="group-radial-2"
            :height="widgetRadialGroup2Options.chart.height"
            :type="widgetRadialGroup2Options.chart.type"
            :series="widgetRadialGroup2Options.series"
            :options="widgetRadialGroup2Options"
          ></apexchart>
        </template>
        <template #chart3>
          <apexchart
            id="group-radial-3"
            :height="widgetRadialGroup3Options.chart.height"
            :type="widgetRadialGroup3Options.chart.type"
            :series="widgetRadialGroup3Options.series"
            :options="widgetRadialGroup3Options"
          ></apexchart>
        </template>
      </GroupedStatWidget>
    </div>

    <!--Grouped Stat Widget-->
    <div class="column is-6">
      <GroupedStatWidget
        title="Additional Stats"
        :values="['264', '1,203', '3,078']"
        :labels="['New Deals', 'Proposals', 'Closed Deals']"
        gauge
      >
        <template #chart1>
          <apexchart
            id="group-gauge-1"
            :height="widgetGaugeGroup1Options.chart.height"
            :type="widgetGaugeGroup1Options.chart.type"
            :series="widgetGaugeGroup1Options.series"
            :options="widgetGaugeGroup1Options"
          ></apexchart>
        </template>
        <template #chart2>
          <apexchart
            id="group-gauge-2"
            :height="widgetGaugeGroup2Options.chart.height"
            :type="widgetGaugeGroup2Options.chart.type"
            :series="widgetGaugeGroup2Options.series"
            :options="widgetGaugeGroup2Options"
          ></apexchart>
        </template>
        <template #chart3>
          <apexchart
            id="group-gauge-3"
            :height="widgetGaugeGroup3Options.chart.height"
            :type="widgetGaugeGroup3Options.chart.type"
            :series="widgetGaugeGroup3Options.series"
            :options="widgetGaugeGroup3Options"
          ></apexchart>
        </template>
      </GroupedStatWidget>
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
            <i class="iconify" data-icon="feather:chevron-right"></i>
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
            <i class="iconify" data-icon="feather:chevron-right"></i>
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
            <i class="iconify" data-icon="feather:chevron-right"></i>
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
                    src="/images/avatars/svg/8.gif"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
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
                      src="/images/icons/stacks/js.svg"
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
                      src="/images/icons/stacks/html5.svg"
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
                      src="/images/icons/stacks/css3.svg"
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
                  <span class="tag is-green is-elevated">Approved</span>
                </div>
              </td>
              <td class="is-end">
                <div class="buttons">
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:edit-2"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:eye"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:trash-2"></i>
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
                    src="/images/avatars/svg/1.gif"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
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
                      src="/images/icons/stacks/reactjs.svg"
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
                      src="/images/icons/stacks/nodejs.svg"
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
                  <span class="tag is-green is-elevated">Approved</span>
                </div>
              </td>
              <td class="is-end">
                <div class="buttons">
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:edit-2"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:eye"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:trash-2"></i>
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
                    src="/images/avatars/svg/4.gif"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
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
                      src="/images/icons/stacks/csharp.svg"
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
                      src="/images/icons/stacks/android.svg"
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
                      src="/images/icons/stacks/laravel.svg"
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
                  <span class="tag is-orange is-elevated">Pending</span>
                </div>
              </td>
              <td class="is-end">
                <div class="buttons">
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:edit-2"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:eye"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:trash-2"></i>
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
                      src="/images/icons/stacks/illustrator.svg"
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
                  <span class="tag is-primary is-elevated">Suspended</span>
                </div>
              </td>
              <td class="is-end">
                <div class="buttons">
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:edit-2"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:eye"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:trash-2"></i>
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
                    src="/images/avatars/svg/3.gif"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
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
                      src="/images/icons/stacks/reactjs.svg"
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
                      src="/images/icons/stacks/vuejs.svg"
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
                  <span class="tag is-green is-elevated">Approved</span>
                </div>
              </td>
              <td class="is-end">
                <div class="buttons">
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:edit-2"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:eye"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:trash-2"></i>
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
                    src="/images/avatars/svg/8.gif"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
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
                      src="/images/icons/stacks/js.svg"
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
                      src="/images/icons/stacks/html5.svg"
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
                      src="/images/icons/stacks/css3.svg"
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
                      <i class="iconify" data-icon="feather:edit-2"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined is-circle">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:eye"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined is-circle">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:trash-2"></i>
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
                    src="/images/avatars/svg/1.gif"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
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
                      src="/images/icons/stacks/reactjs.svg"
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
                      src="/images/icons/stacks/nodejs.svg"
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
                      <i class="iconify" data-icon="feather:edit-2"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined is-circle">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:eye"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined is-circle">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:trash-2"></i>
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
                    src="/images/avatars/svg/4.gif"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
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
                      src="/images/icons/stacks/csharp.svg"
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
                      src="/images/icons/stacks/android.svg"
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
                      src="/images/icons/stacks/laravel.svg"
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
                      <i class="iconify" data-icon="feather:edit-2"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined is-circle">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:eye"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined is-circle">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:trash-2"></i>
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
                      src="/images/icons/stacks/illustrator.svg"
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
                      <i class="iconify" data-icon="feather:edit-2"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined is-circle">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:eye"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined is-circle">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:trash-2"></i>
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
                    src="/images/avatars/svg/3.gif"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
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
                      src="/images/icons/stacks/reactjs.svg"
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
                      src="/images/icons/stacks/vuejs.svg"
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
                      <i class="iconify" data-icon="feather:edit-2"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined is-circle">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:eye"></i>
                    </span>
                  </button>
                  <button class="button is-dark-outlined is-circle">
                    <span class="icon is-small">
                      <i class="iconify" data-icon="feather:trash-2"></i>
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
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_widgets-stats.scss';
</style>
