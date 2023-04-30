<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import { useCustomersCharts } from '/@src/data/dashboards/personal-v1/customersChart'
import { useTeamGaugeChart } from '/@src/data/dashboards/personal-v1/teamGaugeChart'
import { useProfitChart } from '/@src/data/dashboards/personal-v1/profitChart'

const { customersOptions } = useCustomersCharts()
const { teamGaugeOptions } = useTeamGaugeChart()
const { profitChartOptions } = useProfitChart()
</script>

<template>
  <div class="personal-dashboard personal-dashboard-v1">
    <!--Personal Dashboard V1-->
    <!--Header-->
    <div class="dashboard-header">
      <VAvatar picture="/images/avatars/svg/vuero-1.svg" size="large" />
      <div class="start">
        <h3>Welcome back, Erik Kovalsky</h3>
        <p>We're very happy to see you again on your personal dashboard.</p>
      </div>
      <div class="end">
        <VButton dark="3">View Reports</VButton>
        <VButton color="primary" elevated>Manage Store</VButton>
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
                  <VBlock
                    title="2,870"
                    subtitle="Sales this month"
                    center
                    m-responsive
                    t-responsive
                  >
                    <template #icon>
                      <VIconBox color="purple" rounded>
                        <i aria-hidden="true" class="lnil lnil-analytics-alt-1"></i>
                      </VIconBox>
                    </template>
                  </VBlock>
                </div>

                <!--Stat-->
                <div class="quick-stat">
                  <VBlock
                    title="131"
                    subtitle="New users"
                    center
                    m-responsive
                    t-responsive
                  >
                    <template #icon>
                      <VIconBox color="orange" rounded>
                        <i aria-hidden="true" class="lnil lnil-handshake"></i>
                      </VIconBox>
                    </template>
                  </VBlock>
                </div>

                <!--Stat-->
                <div class="quick-stat">
                  <VBlock
                    title="$398,49"
                    subtitle="Earned today"
                    center
                    m-responsive
                    t-responsive
                  >
                    <template #icon>
                      <VIconBox color="green" rounded>
                        <i aria-hidden="true" class="lnil lnil-diamond-alt"></i>
                      </VIconBox>
                    </template>
                  </VBlock>
                </div>

                <!--Stat-->
                <div class="quick-stat">
                  <VBlock
                    title="$6542,31"
                    subtitle="Total balance"
                    center
                    m-responsive
                    t-responsive
                  >
                    <template #icon>
                      <VIconBox color="info" rounded>
                        <i aria-hidden="true" class="lnil lnil-bank"></i>
                      </VIconBox>
                    </template>
                  </VBlock>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Card-->
        <div class="column is-6">
          <div class="dashboard-card">
            <ApexChart
              :height="customersOptions.chart.height"
              :type="customersOptions.chart.type"
              :series="customersOptions.series"
              :options="customersOptions"
            >
            </ApexChart>
          </div>
        </div>

        <!--Card-->
        <div class="column is-4">
          <div class="dashboard-card is-upgrade">
            <i aria-hidden="true" class="lnil lnil-crown-alt-1"></i>
            <div class="cta-content">
              <h4>Hey Erik, you're doing great.</h4>
              <p class="white-text">Start using our team and project management tools</p>
              <a class="link inverted-text">Learn More</a>
            </div>
          </div>
        </div>

        <!--Card-->
        <div class="column is-4">
          <div class="dashboard-card is-gauge">
            <div class="people">
              <VAvatar picture="/demo/avatars/21.jpg" />
              <VAvatar initials="SC" color="h-purple" />
              <VAvatar picture="/demo/avatars/39.jpg" />
            </div>
            <ApexChart
              :height="teamGaugeOptions.chart.height"
              :type="teamGaugeOptions.chart.type"
              :series="teamGaugeOptions.series"
              :options="teamGaugeOptions"
            >
            </ApexChart>
          </div>
        </div>

        <!--Card-->
        <div class="column is-4">
          <div class="dashboard-card">
            <ApexChart
              :height="profitChartOptions.chart.height"
              :type="profitChartOptions.chart.type"
              :series="profitChartOptions.series"
              :options="profitChartOptions"
            >
            </ApexChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-navbar {
  .personal-dashboard {
    margin-top: 30px;
  }
}

.personal-dashboard-v1 {
  .dashboard-header {
    display: flex;
    align-items: center;
    font-family: var(--font);
    margin-bottom: 30px;

    .start {
      margin-inline-start: 12px;

      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 1.3rem;
        color: var(--dark-text);
      }
    }

    .end {
      margin-inline-start: auto;
      display: flex;
      justify-content: flex-end;

      .button {
        margin-inline-start: 10px;
      }
    }
  }

  .dashboard-body {
    .dashboard-card {
      @include vuero-s-card;

      font-family: var(--font);

      > h4,
      .ApexCharts-title-text {
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-text);
        margin-bottom: 12px;
      }

      .quick-stats {
        .quick-stats-inner {
          display: flex;
          flex-wrap: wrap;
          margin-inline-start: -8px;
          margin-inline-end: -8px;

          .quick-stat {
            width: calc(50% - 16px);
            padding: 40px 20px;
            background: var(--widget-grey);
            margin: 8px;
            border-radius: var(--radius-large);
            transition: all 0.3s; // transition-all test

            ::v-deep(.media-flex-center) {
              .flex-meta {
                span {
                  &:first-child {
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: var(--dark-text);
                  }
                }
              }
            }
          }
        }
      }
    }

    .dashboard-card {
      &.is-upgrade {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--primary-light-8);
        border-color: var(--primary-light-8);
        padding: 20px 40px;
        min-height: 320px;
        border-radius: var(--radius-large);
        box-shadow: var(--primary-box-shadow);

        .lnil,
        .lnir {
          position: absolute;
          bottom: 1rem;
          inset-inline-end: 1rem;
          font-size: 4rem;
          opacity: 0.3;
        }

        .cta-content {
          text-align: center;

          h4 {
            font-family: var(--font-alt);
            font-weight: 600;
            font-size: 1.2rem;
            color: var(--smoke-white);
            margin-bottom: 8px;
          }
        }

        .link {
          display: block;
          font-family: var(--font-alt);
          font-weight: 500;
          margin-top: 0.5rem;

          &:hover,
          &:focus {
            color: var(--smoke-white);
            opacity: 0.6;
          }
        }
      }

      &.is-gauge {
        position: relative;

        .people {
          position: absolute;
          top: 80px;
          inset-inline-start: 0;
          inset-inline-end: 0;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          z-index: 5;

          .v-avatar {
            margin: 0 4px;
          }
        }
      }
    }
  }
}

.is-dark {
  .personal-dashboard-v1 {
    .dashboard-header {
      .start {
        h3 {
          color: var(--dark-dark-text);
        }
      }
    }

    .dashboard-body {
      .dashboard-card {
        @include vuero-card--dark;

        &.is-upgrade {
          background: var(--primary);
          border-color: var(--primary);
          box-shadow: var(--primary-box-shadow);
        }

        .quick-stats {
          .quick-stats-inner {
            .quick-stat {
              background: var(--dark-sidebar-light-2);
              border: 1px solid var(--dark-sidebar-light-12);

              .media-flex-center {
                .flex-meta {
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
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .personal-dashboard-v1 {
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

    .dashboard-body {
      .dashboard-card {
        .quick-stats {
          .quick-stats-inner {
            .quick-stat {
              padding: 20px;

              .media-flex-center {
                flex-direction: column;

                .flex-meta {
                  margin: 10px 0;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .personal-dashboard-v1 {
    .dashboard-body {
      .dashboard-card {
        .quick-stats {
          .quick-stats-inner {
            .quick-stat {
              padding: 20px;

              .media-flex-center {
                flex-direction: column;

                .flex-meta {
                  margin: 2px 0 0;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
