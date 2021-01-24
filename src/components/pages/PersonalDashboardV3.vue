<script setup lang="ts">
import { interviewsOptions } from '/@src/composition/state/charts/apexcharts/examples/interviewsChart'
</script>

<template>
  <!--Personal Dashboard V3-->
  <div class="personal-dashboard personal-dashboard-v3">
    <div class="columns">
      <div class="column is-8">
        <div class="columns is-multiline is-flex-tablet-p">
          <div class="column is-6">
            <div class="dashboard-card is-welcome">
              <div class="welcome-title">
                <h3 class="dark-inverted">Hi Erik K.</h3>
                <p>
                  You have 6 interviews to conduct during this week. Your
                  current progress is great.
                </p>
              </div>
              <div class="welcome-progress">
                <div id="welcome-gauge" class="gauge"></div>
                <div class="meta">
                  <span>Your Progress</span>
                  <span class="dark-inverted">Outstanding 🎉</span>
                </div>
              </div>
              <div class="button-wrap">
                <button
                  class="button h-button is-primary is-fullwidth is-big is-raised"
                >
                  View Schedule
                </button>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <div class="stats-wrapper">
              <div class="columns is-multiline is-flex-tablet-p">
                <div class="column is-6">
                  <div class="dashboard-card">
                    <div class="media-flex-center">
                      <div class="v-icon is-info is-rounded">
                        <i class="iconify" data-icon="feather:clock"></i>
                      </div>
                      <div class="flex-meta">
                        <span>62K</span>
                        <span>Minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="dashboard-card">
                    <div class="media-flex-center">
                      <div class="v-icon is-purple is-rounded">
                        <i class="iconify" data-icon="feather:radio"></i>
                      </div>
                      <div class="flex-meta">
                        <span>263</span>
                        <span>Interviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="dashboard-card">
                    <div class="media-flex-center">
                      <div class="v-icon is-green is-rounded">
                        <i class="iconify" data-icon="feather:user-check"></i>
                      </div>
                      <div class="flex-meta">
                        <span>49</span>
                        <span>Approved</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="dashboard-card">
                    <div class="media-flex-center">
                      <div class="v-icon is-orange is-rounded">
                        <i class="iconify" data-icon="feather:frown"></i>
                      </div>
                      <div class="flex-meta">
                        <span>214</span>
                        <span>Rejected</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="people">
                <div class="left">
                  <span class="dark-inverted">Total Interviews</span>
                  <span
                    ><a class="is-dark-primary">23 interviews</a> this
                    month</span
                  >
                </div>
                <div class="right">
                  <div class="avatar-stack">
                    <div class="v-avatar">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/5.jpg"
                        alt=""
                        data-user-popover="9"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/18.jpg"
                        alt=""
                        data-user-popover="7"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/26.jpg"
                        alt=""
                        data-user-popover="23"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar">
                      <span class="avatar is-more">
                        <span class="inner">
                          <span>+20</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-6 h-hidden-mobile h-hidden-tablet-p">
            <img
              src="/images/illustrations/dashboards/personal/interviews.svg"
              alt=""
            />
          </div>

          <div class="column is-6">
            <div class="dashboard-card">
              <apexchart
                id="interviews-chart"
                :height="interviewsOptions.chart.height"
                :type="interviewsOptions.chart.type"
                :series="interviewsOptions.series"
                :options="interviewsOptions"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-4">
        <div class="widget picker-widget">
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
        </div>

        <a href="#" class="dashboard-card is-interview">
          <div class="media-flex-center">
            <div class="v-avatar">
              <img
                class="avatar"
                src="/images/avatars/photos/32.jpg"
                data-user-popover="28"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="flex-meta">
              <span>Jonathan K.</span>
              <span>08:00 - 09:00</span>
            </div>
            <div class="flex-end">
              <i class="iconify" data-icon="feather:chevron-right"></i>
            </div>
          </div>
        </a>
        <a href="#" class="dashboard-card is-interview">
          <div class="media-flex-center">
            <div class="v-avatar">
              <img
                class="avatar"
                src="/images/avatars/photos/19.jpg"
                data-user-popover="17"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="flex-meta">
              <span>Greta K.</span>
              <span>10:30 - 11:00</span>
            </div>
            <div class="flex-end">
              <i class="iconify" data-icon="feather:chevron-right"></i>
            </div>
          </div>
        </a>
        <a href="#" class="dashboard-card is-interview">
          <div class="media-flex-center">
            <div class="v-avatar">
              <img
                class="avatar"
                src="/images/avatars/photos/12.jpg"
                data-user-popover="2"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="flex-meta">
              <span>Joshua S.</span>
              <span>02:30 - 03:00</span>
            </div>
            <div class="flex-end">
              <i class="iconify" data-icon="feather:chevron-right"></i>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';

.personal-dashboard-v3 {
  .columns {
    &.is-flex-tablet-p {
      .column {
        &.is-6 {
          min-width: 50%;
        }
      }
    }
  }

  .dashboard-card {
    @include vuero-l-card();

    font-family: $font;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    &.is-welcome {
      background: $widget-grey;
      border: none;
      padding: 40px;

      .welcome-title {
        h3 {
          font-family: $font-alt;
          font-weight: 700;
          font-size: 2rem;
          color: $dark-text;
        }
      }

      .welcome-progress {
        display: flex;
        align-items: center;
        padding: 10px 0;

        .meta {
          margin-left: 16px;

          span {
            display: block;

            &:first-child {
              color: $light-text;
              font-size: 0.95rem;
            }

            &:nth-child(2) {
              font-family: $font-alt;
              font-size: 1.1rem;
              font-weight: 600;
              color: $dark-text;
            }
          }
        }
      }

      .button-wrap {
        .h-button {
          height: 44px;
          border-radius: 10px;
        }
      }
    }

    &.is-interview {
      &:not(:last-child) {
        margin-bottom: 0.75rem;
      }

      .flex-end {
        svg {
          height: 18px;
          width: 18px;
          color: $light-text;
        }
      }
    }
  }

  .picker-widget {
    padding: 40px;
    height: 317px;
  }

  .stats-wrapper {
    display: flex;
    flex-direction: column;
    height: 280px;

    .people {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 6px;

      .left {
        span {
          display: block;
          font-family: $font;

          &:first-child {
            font-family: $font-alt;
            font-weight: 600;
            color: $dark-text;
          }

          &:nth-child(2) {
            font-size: 0.9rem;
            color: $light-text;

            a {
              font-weight: 500;
              color: $primary;
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .personal-dashboard-v3 {
    .dashboard-card {
      @include vuero-card--dark();
    }
  }
}

@media only screen and (max-width: 767px) {
  .personal-dashboard-v3 {
    .stats-wrapper {
      height: auto;
    }
  }
}
</style>
