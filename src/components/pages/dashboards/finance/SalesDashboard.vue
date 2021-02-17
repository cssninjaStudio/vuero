<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import {
  spark1,
  spark2,
  spark3,
  spark4,
} from '/@src/data/dashboards/sales/salesSparksChart'
import { revenueOptions } from '/@src/data/dashboards/sales/revenueAreaChart'
import { salesRevenuesRadialOptions } from '/@src/data/dashboards/sales/salesRevenueRadialChart'
import {
  radialGroup1Options,
  radialGroup2Options,
  radialGroup3Options,
} from '/@src/data/dashboards/sales/salesRadialGroupChart'
import {
  barData,
  barData2,
  salesBarOptions,
} from '/@src/data/dashboards/sales/salesBarChart'
import {
  personalScoreGaugeOptions,
  onPersonalScoreGaugeReady,
} from '/@src/data/dashboards/sales/personalScoreGauge'

onMounted(() => {
  setTimeout(() => {
    salesBarOptions.series = [
      {
        name: 'Orders',
        data: barData,
      },
    ]
  }, 1000)

  setTimeout(() => {
    salesBarOptions.series = [
      ...salesBarOptions.series,
      {
        name: 'Abandonned',
        data: barData2,
      },
    ]
  }, 2500)
})
</script>

<template>
  <!--Finance Dashboard V3-->
  <div class="finance-dashboard sales-dashboard">
    <!--Header-->
    <div class="dashboard-header">
      <div class="v-avatar is-large">
        <img
          class="avatar"
          src="/images/avatars/photos/8.jpg"
          alt=""
          @error.once="
            $event.target.src = 'https://via.placeholder.com/150x150'
          "
        />
      </div>
      <div class="start">
        <h3 class="dark-inverted">Welcome back, Erik Kovalsky</h3>
        <p>We're very happy to see you again on your dashboard.</p>
      </div>
      <div class="end">
        <V-Button dark="3">View Reports</V-Button>
        <V-Button color="primary" elevated>Transactions</V-Button>
      </div>
    </div>

    <div class="spark-tiles">
      <div class="columns is-multiline">
        <div class="column is-3">
          <div class="spark-tile">
            <apexchart
              id="spark1"
              :height="spark1.chart.height"
              :type="spark1.chart.type"
              :series="spark1.series"
              :options="spark1"
            ></apexchart>
          </div>
        </div>
        <div class="column is-3">
          <div class="spark-tile">
            <apexchart
              id="spark2"
              :height="spark2.chart.height"
              :type="spark2.chart.type"
              :series="spark2.series"
              :options="spark2"
            ></apexchart>
          </div>
        </div>
        <div class="column is-3">
          <div class="spark-tile">
            <apexchart
              id="spark3"
              :height="spark3.chart.height"
              :type="spark3.chart.type"
              :series="spark3.series"
              :options="spark3"
            ></apexchart>
          </div>
        </div>
        <div class="column is-3">
          <div class="spark-tile">
            <apexchart
              id="spark4"
              :height="spark4.chart.height"
              :type="spark4.chart.type"
              :series="spark4.series"
              :options="spark4"
            ></apexchart>
          </div>
        </div>
        <div class="column is-7">
          <div class="dashboard-card">
            <div class="card-head">
              <h3 class="dark-inverted">Revenue Overview</h3>
            </div>
            <div class="revenue-stats">
              <div class="revenue-stat">
                <span>This Month</span>
                <span class="current">$75,648.43</span>
              </div>
              <div class="revenue-stat">
                <span>Last Month</span>
                <span class="dark-inverted">$91,512.18</span>
              </div>
              <div class="revenue-stat">
                <span>Last Month</span>
                <span class="dark-inverted">$91,512.18</span>
              </div>
            </div>
            <apexchart
              id="revenue-chart"
              :height="revenueOptions.chart.height"
              :type="revenueOptions.chart.type"
              :series="revenueOptions.series"
              :options="revenueOptions"
            ></apexchart>
          </div>
        </div>
        <div class="column is-5">
          <div class="dashboard-card flex-chart">
            <div class="chart-media">
              <div class="meta">
                <h4 class="dark-inverted">Sales Revenue</h4>
                <span class="is-dark-primary">$8,641.26</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum
                  integritas corporis: misera debilitas. Ita ne hoc quidem modo
                  paria.
                </p>
              </div>
              <div class="chart-container">
                <apexchart
                  id="radial-circle"
                  :height="salesRevenuesRadialOptions.chart.height"
                  :type="salesRevenuesRadialOptions.chart.type"
                  :series="salesRevenuesRadialOptions.series"
                  :options="salesRevenuesRadialOptions"
                ></apexchart>
              </div>
            </div>
          </div>
          <div class="dashboard-card flex-chart">
            <div class="card-head">
              <h3 class="dark-inverted">Additional Stats</h3>
            </div>
            <div class="chart-group">
              <div class="group">
                <div class="group-content">
                  <div class="chart-container">
                    <apexchart
                      id="group-radial-1"
                      :height="radialGroup1Options.chart.height"
                      :type="radialGroup1Options.chart.type"
                      :series="radialGroup1Options.series"
                      :options="radialGroup1Options"
                    ></apexchart>
                  </div>
                  <span class="dark-inverted">264</span>
                  <p>New Deals</p>
                </div>
              </div>
              <div class="group">
                <div class="group-content">
                  <div class="chart-container">
                    <apexchart
                      id="group-radial-2"
                      :height="radialGroup2Options.chart.height"
                      :type="radialGroup2Options.chart.type"
                      :series="radialGroup2Options.series"
                      :options="radialGroup2Options"
                    ></apexchart>
                  </div>
                  <span class="dark-inverted">1,203</span>
                  <p>Proposals</p>
                </div>
              </div>
              <div class="group">
                <div class="group-content">
                  <div class="chart-container">
                    <apexchart
                      id="group-radial-3"
                      :height="radialGroup3Options.chart.height"
                      :type="radialGroup3Options.chart.type"
                      :series="radialGroup3Options.series"
                      :options="radialGroup3Options"
                    ></apexchart>
                  </div>
                  <span class="dark-inverted">3,078</span>
                  <p>Closed Deals</p>
                </div>
              </div>
            </div>
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
              <V-BillboardJS
                :options="personalScoreGaugeOptions"
                @ready="onPersonalScoreGaugeReady"
              />
            </div>
            <div class="widget-content">
              <p>Your score has been calculated based on the latest metrics</p>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="dashboard-card">
            <div class="card-head">
              <h3 class="dark-inverted">Orders Summary</h3>
            </div>
            <apexchart
              id="bar-chart"
              :height="salesBarOptions.chart.height"
              :type="salesBarOptions.chart.type"
              :series="salesBarOptions.series"
              :options="salesBarOptions"
            ></apexchart>
          </div>
        </div>
        <div class="column is-3">
          <!--Widget-->
          <UIWidget class="picker-widget" straight>
            <template #header>
              <div class="widget-toolbar">
                <div class="left">
                  <a class="action-icon">
                    <i class="iconify" data-icon="feather:chevron-left"></i>
                  </a>
                </div>
                <div class="center">
                  <h3>October 2020</h3>
                </div>
                <div class="right">
                  <a class="action-icon">
                    <i class="iconify" data-icon="feather:chevron-right"></i>
                  </a>
                </div>
              </div>
            </template>
            <template #body>
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
            </template>
          </UIWidget>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../assets/scss/abstracts/_mixins.scss';

.sales-dashboard {
  .dashboard-header {
    display: flex;
    align-items: center;
    font-family: $font;
    margin-bottom: 30px;

    .start {
      margin-left: 12px;

      h3 {
        font-family: $font-alt;
        font-weight: 600;
        font-size: 1.3rem;
        color: $dark-text;
      }
    }

    .end {
      margin-left: auto;
      display: flex;
      justify-content: flex-end;

      .button {
        margin-left: 10px;
      }
    }
  }

  .spark-tiles {
    .spark-tile {
      @include vuero-s-card();

      padding: 0;
    }
  }

  .dashboard-card {
    @include vuero-s-card();

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    &.flex-chart {
      height: calc(50% - 0.75rem);
    }

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        font-family: $font-alt;
        font-size: 1rem;
        font-weight: 600;
        color: $dark-text;
      }
    }

    .revenue-stats {
      display: flex;
      margin-bottom: 10px;

      .revenue-stat {
        margin-right: 30px;
        font-family: $font;

        span {
          display: block;

          &:first-child {
            color: $light-text;
            font-size: 0.9rem;
          }

          &:nth-child(2) {
            color: $dark-text;
            font-size: 1.2rem;
            font-weight: 600;
          }

          &.current {
            color: $accent;
          }
        }
      }
    }

    .chart-media {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .meta {
        margin-right: 30px;
        align-items: center;
        font-family: $font;

        h4 {
          font-family: $font-alt;
          font-size: 1rem;
          font-weight: 600;
          color: $dark-text;
        }

        span {
          display: block;
          color: $dark-text;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        p {
          font-size: 0.9rem;
        }
      }

      .chart-container {
        min-width: 110px;
      }
    }

    .chart-group {
      display: flex;

      .group {
        text-align: center;
        width: 33.3%;

        .chart-container {
          margin-top: -5px;
        }

        span {
          display: block;
          margin-top: -25px;
          font-family: $font;
          color: $dark-text;
          font-weight: 600;
          font-size: 1.2rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }
  }

  .widget {
    min-height: 305px;
  }
}

.is-dark {
  .sales-dashboard {
    .spark-tile,
    .dashboard-card {
      @include vuero-card--dark();
    }
  }
}

@media only screen and (max-width: 767px) {
  .sales-dashboard {
    .dashboard-header {
      text-align: center;
      flex-direction: column;

      .start {
        margin: 10px auto;
      }

      .end {
        margin: 0;
        justify-content: space-between;
      }
    }
  }
}
</style>
