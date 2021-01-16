<script setup lang="ts">
import { themeColors } from '/@src/composition/state/themeColors'

//Interviews Chart
const interviewsOptions = {
  series: [
    {
      name: 'Interviews',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  chart: {
    height: 200,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.accent, themeColors.info, themeColors.orange],
  title: {
    text: 'Interviews',
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
                      <div class="h-icon is-info is-rounded">
                        <Icon icon="feather:clock" />
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
                      <div class="h-icon is-purple is-rounded">
                        <Icon icon="feather:radio" />
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
                      <div class="h-icon is-green is-rounded">
                        <Icon icon="feather:user-check" />
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
                      <div class="h-icon is-orange is-rounded">
                        <Icon icon="feather:frown" />
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
                    <div class="h-avatar">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/5.jpg"
                        alt=""
                        data-user-popover="9"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/18.jpg"
                        alt=""
                        data-user-popover="7"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/26.jpg"
                        alt=""
                        data-user-popover="23"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar">
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
              src="/@images/illustrations/dashboards/personal/interviews.svg"
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
                <Icon icon="feather:chevron-left" />
              </a>
            </div>
            <div class="center">
              <h3>October 2020</h3>
            </div>
            <div class="right">
              <a class="action-icon">
                <Icon icon="feather:chevron-right" />
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
            <div class="h-avatar">
              <img
                class="avatar"
                src="/@images/avatars/photos/32.jpg"
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
              <Icon icon="feather:chevron-right" />
            </div>
          </div>
        </a>
        <a href="#" class="dashboard-card is-interview">
          <div class="media-flex-center">
            <div class="h-avatar">
              <img
                class="avatar"
                src="/@images/avatars/photos/19.jpg"
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
              <Icon icon="feather:chevron-right" />
            </div>
          </div>
        </a>
        <a href="#" class="dashboard-card is-interview">
          <div class="media-flex-center">
            <div class="h-avatar">
              <img
                class="avatar"
                src="/@images/avatars/photos/12.jpg"
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
              <Icon icon="feather:chevron-right" />
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
@import '../../assets/scss/pages/dashboards/_personal.scss';
</style>
