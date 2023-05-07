<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import { useEnergyChart } from '/@src/data/dashboards/lifestyle-v3/energyChart'
import { useOverallChart } from '/@src/data/dashboards/lifestyle-v3/overallChart'
import { useOxygenChart } from '/@src/data/dashboards/lifestyle-v3/oxygenChart'
import { useProgressChart } from '/@src/data/dashboards/lifestyle-v3/progressChart'
import { followersList } from '/@src/data/widgets/ui/followers'
import { usePersonalScoreGauge } from '/@src/data/widgets/charts/personalScoreGauge'

const { personalScoreGaugeOptions, onPersonalScoreGaugeReady } = usePersonalScoreGauge()
const { energyChartOptions } = useEnergyChart()
const { overallChartOptions } = useOverallChart()
const { oxygenChartOptions } = useOxygenChart()
const { progressChartOptions } = useProgressChart()
</script>

<template>
  <div class="lifestyle-dashboard lifestyle-dashboard-v3">
    <div class="illustration-header">
      <div class="header-image">
        <img src="/@src/assets/illustrations/dashboards/lifestyle/doctor.svg" alt="" />
      </div>
      <div class="header-meta">
        <h3>Today's Summary</h3>
        <p>Monitor your activity and keep improving your weak points.</p>
        <div class="summary-stats">
          <div class="summary-stat">
            <span>900 kcal</span>
            <span>Burnt today</span>
          </div>
          <div class="summary-stat">
            <span>2300 kcal</span>
            <span>Eaten today</span>
          </div>
          <div class="summary-stat">
            <span>10,864</span>
            <span>Steps walked</span>
          </div>
          <div class="summary-stat">
            <span>2% fat</span>
            <span>Burnt today</span>
          </div>
          <div class="summary-stat h-hidden-tablet-p">
            <span>8.4 km</span>
            <span>distance today</span>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-multiline is-flex-tablet-p">
      <!--Tile-->
      <div class="column is-3">
        <div class="health-tile">
          <div class="tile-head">
            <VIconBox color="primary">
              <i aria-hidden="true" class="fas fa-tint"></i>
            </VIconBox>
            <h4>
              <span class="dark-inverted">114/90</span>
              <span>Min/Max</span>
            </h4>
          </div>
          <h3 class="dark-inverted">Blood</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.</p>
        </div>
      </div>

      <!--Tile-->
      <div class="column is-3">
        <div class="health-tile">
          <div class="tile-head">
            <VIconBox color="primary">
              <i aria-hidden="true" class="fas fa-heart"></i>
            </VIconBox>
            <h4>
              <span class="dark-inverted">112</span>
              <span>Bpm</span>
            </h4>
          </div>
          <h3 class="dark-inverted">Heart Rate</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.</p>
        </div>
      </div>

      <!--Tile-->
      <div class="column is-3">
        <div class="health-tile">
          <div class="tile-head">
            <VIconBox color="primary">
              <i aria-hidden="true" class="fas fa-pump-medical"></i>
            </VIconBox>
            <h4>
              <span class="dark-inverted">12/14</span>
              <span>units</span>
            </h4>
          </div>
          <h3 class="dark-inverted">Blood Pressure</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.</p>
        </div>
      </div>

      <!--Tile-->
      <div class="column is-3">
        <div class="health-tile">
          <div class="tile-head">
            <VIconBox color="primary">
              <i aria-hidden="true" class="fas fa-weight"></i>
            </VIconBox>
            <h4>
              <span class="dark-inverted">60.4</span>
              <span>lbs</span>
            </h4>
          </div>
          <h3 class="dark-inverted">Weight</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.</p>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-9">
        <div class="columns is-multiline">
          <!--Dashboard Card-->
          <div class="column is-6">
            <div class="dashboard-card">
              <div class="card-head">
                <h3 class="dark-inverted">Overall Condition</h3>
                <WidgetDropdown />
              </div>
              <div class="chart-meta">
                <p>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:help-circle"
                  ></i>
                  Your overall condition is very good. Make it even better.
                  <a class="is-dark-primary">Read how</a>
                </p>
              </div>
              <ApexChart
                id="overall-chart"
                :height="overallChartOptions.chart.height"
                :type="overallChartOptions.chart.type"
                :series="overallChartOptions.series"
                :options="overallChartOptions"
              >
              </ApexChart>
            </div>
          </div>

          <!--Dashboard Card-->
          <div class="column is-6">
            <div class="dashboard-card">
              <div class="card-head">
                <h3 class="dark-inverted">Energy Report</h3>
                <WidgetDropdown />
              </div>
              <div class="chart-meta">
                <p>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:help-circle"
                  ></i>
                  Your energy seems a bit unstable. You can improve it.
                  <a class="is-dark-primary">Read how</a>
                </p>
              </div>
              <ApexChart
                id="energy-chart"
                :height="energyChartOptions.chart.height"
                :type="energyChartOptions.chart.type"
                :series="energyChartOptions.series"
                :options="energyChartOptions"
              >
              </ApexChart>
            </div>
          </div>

          <!--Dashboard Card-->
          <div class="column is-6">
            <div class="dashboard-card">
              <div class="card-head">
                <h3 class="dark-inverted">Oxygenation</h3>
                <WidgetDropdown />
              </div>
              <div class="chart-meta">
                <p>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:help-circle"
                  ></i>
                  Your oxygen seems a bit unstable. You can improve it.
                  <a class="is-dark-primary">Read how</a>
                </p>
              </div>
              <ApexChart
                id="overall-chart"
                :height="oxygenChartOptions.chart.height"
                :type="oxygenChartOptions.chart.type"
                :series="oxygenChartOptions.series"
                :options="oxygenChartOptions"
              >
              </ApexChart>
            </div>
          </div>

          <!--Dashboard Card-->
          <div class="column is-6">
            <div class="dashboard-card">
              <div class="card-head">
                <h3 class="dark-inverted">Overall Progress</h3>
                <WidgetDropdown />
              </div>
              <div class="chart-meta">
                <p>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:help-circle"
                  ></i>
                  Your overall condition is very good. Make it even better.
                  <a class="is-dark-primary">Read how</a>
                </p>
              </div>
              <ApexChart
                id="progress-chart"
                :height="progressChartOptions.chart.height"
                :type="progressChartOptions.chart.type"
                :series="progressChartOptions.series"
                :options="progressChartOptions"
              >
              </ApexChart>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <!--Widget-->
        <UIWidget class="search-widget">
          <template #body>
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Search..." />
                <button class="searcv-button">
                  <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
                </button>
              </div>

              <div class="topics">
                <a>#Health</a>
                <a>#Cardio</a>
                <a>#Nutrition</a>
              </div>
            </div>
          </template>
        </UIWidget>

        <!--Widget-->
        <UIWidget class="picker-widget">
          <template #header>
            <div class="widget-toolbar">
              <div class="left">
                <a class="action-icon">
                  <i
                    aria-hidden="true"
                    class="iconify ltr-hidden"
                    data-icon="feather:chevron-right"
                  />
                  <i
                    aria-hidden="true"
                    class="iconify rtl-hidden"
                    data-icon="feather:chevron-left"
                  />
                </a>
              </div>
              <div class="center">
                <h3>October 2020</h3>
              </div>
              <div class="right">
                <a class="action-icon">
                  <i
                    aria-hidden="true"
                    class="iconify rtl-hidden"
                    data-icon="feather:chevron-right"
                  />
                  <i
                    aria-hidden="true"
                    class="iconify ltr-hidden"
                    data-icon="feather:chevron-left"
                  />
                </a>
              </div>
            </div>
          </template>
          <template #body>
            <table class="calendar">
              <thead>
                <tr>
                  <th scope="col">Mon</th>
                  <th scope="col">Tue</th>
                  <th scope="col">Wed</th>
                  <th scope="col">Thu</th>
                  <th scope="col">Fri</th>
                  <th scope="col">Sat</th>
                  <th scope="col">Sun</th>
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

        <!--Widget-->
        <UIWidget class="gauge-widget">
          <template #header>
            <UIWidgetToolbarDropdown title="Gauge Widget" />
          </template>
          <template #body>
            <div class="gauge-wrap">
              <VBillboardJS
                class="gauge-holder"
                :options="personalScoreGaugeOptions"
                @ready="onPersonalScoreGaugeReady"
              />
            </div>
            <div class="widget-content">
              <p>Your score has been calculated based on the latest metrics</p>
            </div>
          </template>
        </UIWidget>

        <!--Widget-->
        <UIWidget class="text-widget">
          <template #header>
            <UIWidgetToolbarFollowers title="New Friends" :avatars="followersList" />
          </template>
          <template #body>
            <div class="widget-content">
              <p>
                Great News! <span>{{ followersList[0].name }}</span
                >, <span>{{ followersList[1].name }}</span> and
                <span>{{ followersList[2].name }}</span> are now friends with you. Take
                some time to look at their profile.
              </p>
            </div>
          </template>
        </UIWidget>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.lifestyle-dashboard-v3 {
  .illustration-header {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 16px;
    background: var(--primary-dark-24);
    font-family: var(--font);
    margin-bottom: 30px;

    .header-image {
      position: relative;
      height: 168px;
      width: 280px;

      img {
        position: absolute;
        top: -76px;
        inset-inline-start: -30px;
        display: block;
        pointer-events: none;
      }
    }

    .header-meta {
      margin-inline-start: 0;

      h3 {
        color: var(--smoke-white);
        font-family: var(--font-alt);
        font-weight: 700;
        font-size: 1.3rem;
      }

      p {
        font-weight: 400;
        color: var(--smoke-white-dark-16);
        margin-bottom: 16px;
      }

      .summary-stats {
        display: flex;

        .summary-stat {
          margin-inline-end: 30px;

          span {
            font-family: var(--font);
            display: block;

            &:first-child {
              font-size: 1.1rem;
              font-family: var(--font-alt);
              color: var(--smoke-white);
            }

            &:nth-child(2) {
              color: var(--primary-light-18);
              font-size: 0.85rem;
            }
          }
        }
      }

      .action-link {
        span {
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-inline-end: 6px;
        }

        i {
          font-size: 12px;
        }
      }
    }
  }

  .health-tile {
    font-family: var(--font);

    .tile-head {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      .v-icon {
        margin-inline-end: 10px;
      }

      h4 {
        span {
          &:first-child {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--dark-text);
            margin-inline-end: 0.25rem;
          }

          &:nth-child(2) {
            font-size: 0.95rem;
            color: var(--light-text);
          }
        }
      }
    }

    h3 {
      font-family: var(--font-alt);
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    p {
      font-size: 0.95rem;
    }
  }

  .dashboard-card {
    @include vuero-l-card;

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;

      h3 {
        color: var(--dark-text);
        font-size: 1.2rem;
        font-weight: 500;
      }
    }

    .chart-meta {
      p {
        font-size: 0.95rem;
        max-width: 80%;

        svg {
          position: relative;
          top: 2px;
          height: 16px;
          width: 16px;
          color: var(--light-text);
        }

        a {
          color: var(--primary);
          font-weight: 500;
        }
      }
    }
  }
}

.is-dark {
  .lifestyle-dashboard-v3 {
    .dashboard-card {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (width <= 767px) {
  .lifestyle-dashboard-v3 {
    .illustration-header {
      flex-direction: column;
      text-align: center;

      .header-image {
        height: auto;
        width: 100%;

        img {
          position: relative;
          width: 100%;
          max-width: 260px;
          margin: 0 auto;
          top: 0;
          margin-top: -75px;
        }
      }

      .header-meta {
        padding: 20px;

        > p {
          max-width: 280px;
          margin-inline-start: auto;
          margin-inline-end: auto;
        }

        .summary-stats {
          flex-wrap: wrap;

          .summary-stat {
            margin: 10px;
            min-width: calc(33.3% - 20px);
          }
        }
      }
    }

    .health-tile {
      padding: 20px;
      background: var(--white);
      border: 1px solid var(--fade-grey-dark-3);
      border-radius: 10px;
    }
  }

  .is-dark {
    .lifestyle-dashboard-v3 {
      .health-tile {
        background: var(--dark-sidebar-light-6);
        border-color: var(--dark-sidebar-light-12);
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .lifestyle-dashboard-v3 {
    .illustration-header {
      .header-image {
        width: 250px;
      }
    }
  }
}
</style>
