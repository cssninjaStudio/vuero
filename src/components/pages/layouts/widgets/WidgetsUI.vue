<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import { followersList } from '/@src/data/widgets/ui/followers'
import { tagList1, tagList2 } from '/@src/data/widgets/ui/tagList'
import { tabs } from '/@src/data/widgets/ui/tabList'
import { days } from '/@src/data/widgets/ui/dayList'
import { iconList } from '/@src/data/widgets/ui/menuList'
import { notifications } from '/@src/data/widgets/ui/notificationList'
import { useTrendWidgetChart } from '/@src/data/widgets/charts/trendWidgetChart'
import { onceImageErrored } from '/@src/utils/via-placeholder'
import { usePersonalScoreGauge } from '/@src/data/widgets/charts/personalScoreGauge'

const { personalScoreGaugeOptions, onPersonalScoreGaugeReady } = usePersonalScoreGauge()
const { trendWidgetChartOptions } = useTrendWidgetChart()
</script>

<template>
  <div class="columns is-multiline widget-demo-columns">
    <!--Widget Column-->
    <div class="column is-3">
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
          <UIWidgetToolbarFollowers title="New Followers" :avatars="followersList" />
        </template>
        <template #body>
          <div class="widget-content">
            <p>
              Great News! <span>{{ followersList[0].name }}</span
              >, <span>{{ followersList[1].name }}</span> and
              <span>{{ followersList[2].name }}</span> are now following you. Take some
              time to look at their profile.
            </p>
          </div>
        </template>
      </UIWidget>

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
              <a>#Politics</a>
              <a>#Movies</a>
              <a>#Tech</a>
            </div>
          </div>
        </template>
      </UIWidget>

      <!--Widget-->
      <UIWidget class="video-widget">
        <template #body>
          <UIWidgetMovie picture="/demo/photos/widgets/1.jpg" views="38,274" />
        </template>
      </UIWidget>

      <!--Widget-->
      <UIWidget class="tags-widget">
        <template #body>
          <UIWidgetTagList :tags="tagList1" />
        </template>
      </UIWidget>
    </div>

    <!--Widget Column-->
    <div class="column is-3">
      <!--Widget-->
      <UIWidget class="icon-toolbar-widget">
        <template #header>
          <UIWidgetToolbarIcons :tabs="tabs" />
        </template>
      </UIWidget>

      <!--Widget-->
      <UIWidget class="calendar-widget">
        <template #header>
          <UIWidgetDays :days="days" />
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
                  class="iconify rtl-reflect"
                  data-icon="feather:chevron-left"
                ></i>
              </a>
            </div>
            <div class="center">
              <h3>October 2020</h3>
            </div>
            <div class="right">
              <a class="action-icon">
                <i
                  aria-hidden="true"
                  class="iconify rtl-reflect"
                  data-icon="feather:chevron-right"
                ></i>
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
      <UIWidget class="icon-list-widget">
        <template #body>
          <UIWidgetIconList :list="iconList" />
        </template>
      </UIWidget>
    </div>

    <!--Widget Column-->
    <div class="column is-3">
      <!--Widget-->
      <UIWidget class="text-widget">
        <template #header>
          <UIWidgetToolbarIcon title="Payment" />
        </template>
        <template #body>
          <div class="widget-content">
            <p>
              You have an upcoming payment for your recurring subscription fee due on
              <span>Sept 20, 2020</span>.
            </p>
          </div>
        </template>
      </UIWidget>

      <!--Widget-->
      <UIWidget class="image-widget">
        <template #body>
          <img
            src="/demo/photos/widgets/2.jpg"
            alt=""
            @error.once="onceImageErrored(400, 300)"
          />
          <div class="progress-wrap">
            <progress class="progress is-primary is-tiny" max="100">55%</progress>
          </div>
        </template>
      </UIWidget>

      <!--Widget-->
      <UIWidget class="inbox-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="Inbox" />
        </template>
        <template #body>
          <UIWidgetInboxMessage />
        </template>
      </UIWidget>
    </div>

    <!--Widget Column-->
    <div class="column is-3">
      <!--Widget-->
      <UIWidget class="tags-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="Labels" />
        </template>
        <template #body>
          <UIWidgetTagList :tags="tagList2" />
        </template>
      </UIWidget>

      <!--Widget-->
      <UIWidget class="list-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="Labels" />
        </template>
        <template #body>
          <UIWidgetNotifications :notifications="notifications" />
        </template>
      </UIWidget>

      <!--Widget-->
      <UIWidget class="stats-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="" />
        </template>
        <template #body>
          <div class="widget-content">
            <div class="has-text-centered">
              <div class="stat-number">
                <span
                  >$1638,42
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:trending-up"
                  ></i>
                </span>
                <span>Earned from Sales</span>
              </div>
            </div>
            <ApexChart
              id="trend-chart"
              class="stat-chart"
              :height="trendWidgetChartOptions.chart.height"
              :type="trendWidgetChartOptions.chart.type"
              :series="trendWidgetChartOptions.series"
              :options="trendWidgetChartOptions"
            >
            </ApexChart>
          </div>
        </template>
      </UIWidget>

      <!--Widget-->
      <UIWidget class="text-widget">
        <template #header>
          <UIWidgetToolbarIcon title="Messages" icon="feather:message-square" />
        </template>
        <template #body>
          <div class="widget-content">
            <p>
              You currently have more than
              <span>10 unread messages</span> in your inbox. It could be a good time to
              check them out.
            </p>
          </div>
        </template>
      </UIWidget>
    </div>
  </div>
</template>
