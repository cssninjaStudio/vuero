<script setup lang="ts">
import { themeColors } from '/@src/composition/state/themeColors'

function generateDayWiseTimeSeries(s: number, count: number) {
        var values = [[
            4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5
        ], [
            2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2
        ]];
        var i = 0;
        var series = [];
        var x = new Date("11 Nov 2020").getTime();
        while (i < count) {
            series.push([x, values[s][i]]);
            x += 86400000;
            i++;
        }
        return series;
    }

//Timeline Chart
    const options = {
        chart: {
            type: "area",
            height: 220,
            foreColor: "#999",
            stacked: true,
            toolbar: {
                show: false
            },
            dropShadow: {
                enabled: true,
                enabledSeries: [0],
                top: -2,
                left: 2,
                blur: 5,
                opacity: 0.06
            }
        },
        colors: [themeColors.accent, themeColors.orange, themeColors.orange],
        stroke: {
            curve: "smooth",
            width: 3
        },
        title: {
            text: '',
            align: 'left'
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            name: 'Cash Expenses',
            data: generateDayWiseTimeSeries(0, 18)
        }, {
            name: 'Card Expenses',
            data: generateDayWiseTimeSeries(1, 18)
        }],
        markers: {
            size: 0,
            strokeColor: "#fff",
            strokeWidth: 3,
            strokeOpacity: 1,
            fillOpacity: 1,
            hover: {
                size: 6
            }
        },
        xaxis: {
            type: "datetime",
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                offsetX: 0,
                offsetY: -5
            },
            tooltip: {
                enabled: true
            }
        },
        grid: {
            show: false,
            padding: {
                left: -5,
                right: 5
            }
        },
        tooltip: {
            x: {
                format: "dd MMM yyyy"
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        fill: {
            type: "solid",
            fillOpacity: 0.7
        }
    };
</script>

<template>
  <!--Banking Dashboard V2-->
  <div class="banking-dashboard banking-dashboard-v2">
    <!--Panel-->
    <div class="dashboard-card is-card-panel">
      <div class="columns is-gapless">
        <div class="column is-8">
          <!--Box-->
          <div class="inner-box">
            <div class="box-title">
              <h3>My Cards</h3>
            </div>

            <div class="cards-wrapper">
              <div class="controls">
                <button class="button is-large">
                  <span class="icon is-medium">
                    <Icon icon="feather:plus" />
                  </span>
                </button>
              </div>

              <!--Carousel-->
              <div class="cards-carousel">
                <div class="cards-carousel-inner">
                  <!--Carousel Item-->
                  <div class="cards-carousel-item">
                    <div class="ccard">
                      <div class="shape"></div>
                      <div class="top">
                        <img
                          class="active"
                          src="/@images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                        <img
                          class="light-image inactive"
                          src="/@images/icons/dashboards/banking/visa-text-dark.svg"
                          alt=""
                        />
                        <img
                          class="dark-image inactive"
                          src="/@images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                      </div>
                      <div class="bottom">
                        <span>$6,341.14</span>
                        <span>**** **** **** 4986</span>
                      </div>
                    </div>
                  </div>
                  <!--Carousel Item-->
                  <div class="cards-carousel-item">
                    <div class="ccard">
                      <div class="shape"></div>
                      <div class="top">
                        <img
                          class="active"
                          src="/@images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                        <img
                          class="light-image inactive"
                          src="/@images/icons/dashboards/banking/visa-text-dark.svg"
                          alt=""
                        />
                        <img
                          class="dark-image inactive"
                          src="/@images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                      </div>
                      <div class="bottom">
                        <span>$2,211.27</span>
                        <span>**** **** **** 3619</span>
                      </div>
                    </div>
                  </div>
                  <!--Carousel Item-->
                  <div class="cards-carousel-item">
                    <div class="ccard">
                      <div class="shape"></div>
                      <div class="top">
                        <img
                          class="active"
                          src="/@images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                        <img
                          class="light-image inactive"
                          src="/@images/icons/dashboards/banking/visa-text-dark.svg"
                          alt=""
                        />
                        <img
                          class="dark-image inactive"
                          src="/@images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                      </div>
                      <div class="bottom">
                        <span>$1,228.49</span>
                        <span>**** **** **** 5818</span>
                      </div>
                    </div>
                  </div>
                  <!--Carousel Item-->
                  <div class="cards-carousel-item">
                    <div class="ccard">
                      <div class="shape"></div>
                      <div class="top">
                        <img
                          class="active"
                          src="/@images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                        <img
                          class="light-image inactive"
                          src="/@images/icons/dashboards/banking/visa-text-dark.svg"
                          alt=""
                        />
                        <img
                          class="dark-image inactive"
                          src="/@images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                      </div>
                      <div class="bottom">
                        <span>$3,412,16</span>
                        <span>**** **** **** 7652</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <!--Box-->
          <div class="inner-box">
            <div class="box-title">
              <h3>Balance</h3>
              <div class="field">
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>Last 10 days</span>
                    </div>
                    <div class="select-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="period_select" checked="" />
                          <div class="option-meta">
                            <span>Last 10 days</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="period_select" />
                          <div class="option-meta">
                            <span>Last month</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="period_select" />
                          <div class="option-meta">
                            <span>Last 3 months</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="period_select" />
                          <div class="option-meta">
                            <span>Last 6 months</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Balance-->
            <div class="card-balance-wrap">
              <div class="card-balance">
                <span>$6,341.14</span>
                <span>**** **** **** 4986</span>
              </div>
              <div class="card-balance-stats">
                <div class="card-balance-stat">
                  <div class="stat-title">
                    <span>Income</span>
                  </div>
                  <div class="stat-block">
                    <div class="stat-icon is-up">
                      <Icon icon="feather:arrow-right" />
                    </div>
                    <div class="stat-text">
                      <span>+ 2,324.12</span>
                    </div>
                  </div>
                </div>
                <div class="card-balance-stat">
                  <div class="stat-title">
                    <span>Expense</span>
                  </div>
                  <div class="stat-block">
                    <div class="stat-icon is-down">
                      <Icon icon="feather:arrow-right" />
                    </div>
                    <div class="stat-text">
                      <span>+ 518.41</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dashboard-card is-card-panel is-grey">
      <div class="columns is-gapless">
        <div class="column is-8">
          <!--Box-->
          <div class="inner-box">
            <div class="box-title">
              <h3>Monthly Summary</h3>
            </div>

            <div class="columns">
              <!--Monthly Summary-->
              <div class="column is-4">
                <div class="monthly-summary-wrap">
                  <div class="monthly-summary">
                    <div class="monthly-summary-item">
                      <span>Income</span>
                      <span class="is-income">+$5,000.00</span>
                    </div>
                    <div class="monthly-summary-item">
                      <span>Expenses</span>
                      <span class="is-expense">-$263.19</span>
                    </div>
                  </div>
                </div>
              </div>
              <!--Chart-->
              <div class="column is-8">
                <div class="chart-wrapper">
                  <a class="action-link">All Reports</a>
                  <apexchart
                    id="timeline-chart"
                    :height="options.chart.height"
                    :type="options.chart.type"
                    :series="options.series"
                    :options="options"
                  ></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <!--Box-->
          <div class="inner-box">
            <div class="box-title">
              <h3>Transactions</h3>
              <a class="action-link">View All</a>
            </div>
            <!--Transactions-->
            <div class="transactions">
              <!--Transaction-->
              <div class="media-flex-center">
                <div class="h-icon is-green is-rounded">
                  <i class="lnil lnil-service"></i>
                </div>
                <div class="flex-meta is-lighter">
                  <span>Food Delivery</span>
                  <span>Oct 23, 2020 - 8:46pm</span>
                </div>
                <div class="flex-end">
                  <span class="dark-inverted">- $41.49</span>
                </div>
              </div>
              <!--Transaction-->
              <div class="media-flex-center">
                <div class="h-icon is-orange is-rounded">
                  <i class="lnil lnil-analytics-alt-1"></i>
                </div>
                <div class="flex-meta is-lighter">
                  <span>Market Earnings</span>
                  <span>Oct 18, 2020 - 9:11am</span>
                </div>
                <div class="flex-end">
                  <span class="dark-inverted">+ $263.39</span>
                </div>
              </div>
              <!--Transaction-->
              <div class="media-flex-center">
                <div class="h-icon is-purple is-rounded">
                  <i class="lnil lnil-cart-alt"></i>
                </div>
                <div class="flex-meta is-lighter">
                  <span>Online Order</span>
                  <span>Oct 16, 2020 - 2:13pm</span>
                </div>
                <div class="flex-end">
                  <span class="dark-inverted">- $92.00</span>
                </div>
              </div>
            </div>
            <div class="button-wrap">
              <button
                class="button h-button is-fullwidth is-primary is-elevated"
              >
                New
              </button>
              <button class="button h-button is-fullwidth">Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/dashboards/_banking.scss';
</style>
