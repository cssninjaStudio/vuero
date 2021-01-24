<script setup lang="ts">
import { customersOptions } from '/@src/composition/state/charts/apexcharts/examples/customersChart'
import { teamGaugeOptions } from '/@src/composition/state/charts/apexcharts/examples/teamGaugeChart'
import { profitChartOptions } from '/@src/composition/state/charts/apexcharts/examples/profitChart'
</script>

<template>
  <!--Personal Dashboard V1-->
  <div class="personal-dashboard personal-dashboard-v1">
    <!--Header-->
    <div class="dashboard-header">
      <div class="v-avatar is-large">
        <img
          class="avatar"
          src="/images/avatars/photos/8.jpg"
          alt=""
          @error="$event.target.src = 'https://via.placeholder.com/150x150'"
        />
      </div>
      <div class="start">
        <h3>Welcome back, Erik Kovalsky</h3>
        <p>We're very happy to see you again on your personal dashboard.</p>
      </div>
      <div class="end">
        <button class="button h-button is-dark-outlined">View Reports</button>
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
                    <div class="v-icon is-purple is-rounded">
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
                    <div class="v-icon is-orange is-rounded">
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
                    <div class="v-icon is-green is-rounded">
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
                    <div class="v-icon is-info is-rounded">
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
              <div class="v-avatar">
                <img
                  class="avatar"
                  src="/images/avatars/photos/21.jpg"
                  alt=""
                  data-user-popover="19"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar">
                <span class="avatar is-fake is-h-purple" data-user-popover="35">
                  <span>SC</span>
                </span>
              </div>
              <div class="v-avatar">
                <img
                  class="avatar"
                  src="/images/avatars/photos/39.jpg"
                  alt=""
                  data-user-popover="33"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
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
</template>

<style lang="scss" scoped>
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';

.personal-dashboard-v1 {
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

  .dashboard-body {
    .dashboard-card {
      @include vuero-s-card();

      font-family: $font;

      > h4,
      .apexcharts-title-text {
        font-family: $font-alt;
        font-size: 1rem;
        font-weight: 600;
        color: $dark-text;
        margin-bottom: 12px;
      }

      .quick-stats {
        .quick-stats-inner {
          display: flex;
          flex-wrap: wrap;
          margin-left: -8px;
          margin-right: -8px;

          .quick-stat {
            width: calc(50% - 16px);
            padding: 40px 20px;
            background: $widget-grey;
            margin: 8px;
            border-radius: 6px;
            transition: all 0.3s;

            .media-flex-center {
              .flex-meta {
                span {
                  &:first-child {
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: $dark-text;
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
        background: lighten($primary, 8%);
        border-color: lighten($primary, 8%);
        padding: 20px 40px;
        min-height: 320px;
        border-radius: 6px;
        box-shadow: $primary-box-shadow;

        .lnil,
        .lnir {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          font-size: 4rem;
          opacity: 0.3;
        }

        .cta-content {
          text-align: center;

          h4 {
            font-family: $font-alt;
            font-weight: 600;
            font-size: 1.2rem;
            color: $smoke-white;
            margin-bottom: 8px;
          }
        }

        .link {
          display: block;
          font-family: $font-alt;
          font-weight: 500;
          margin-top: 0.5rem;

          &:hover {
            color: $smoke-white;
            opacity: 0.6;
          }
        }
      }
    }

    .dashboard-card {
      &.is-gauge {
        position: relative;

        .people {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
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

body {
  &.is-dark {
    .personal-dashboard-v1 {
      .dashboard-header {
        .start {
          h3 {
            color: $dark-dark-text;
          }
        }
      }

      .dashboard-body {
        .dashboard-card {
          @include vuero-card--dark();

          &.is-upgrade {
            background: $accent;
            border-color: $accent;
            box-shadow: $accent-box-shadow;
          }

          .quick-stats {
            .quick-stats-inner {
              .quick-stat {
                background: lighten($dark-sidebar, 2%);
                border: 1px solid lighten($dark-sidebar, 12%);

                .media-flex-center {
                  .flex-meta {
                    span {
                      &:first-child {
                        color: $dark-dark-text;
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
}

@media only screen and (max-width: 767px) {
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

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .personal-dashboard-v1 {
    .dashboard-body {
      .dashboard-card {
        .quick-stats {
          .quick-stats-inner {
            .quick-stat {
              padding: 20px 20px;

              .media-flex-center {
                flex-direction: column;

                .flex-meta {
                  margin: 2px 0 0 0;
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
