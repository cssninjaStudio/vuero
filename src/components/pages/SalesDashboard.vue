<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { themeColors } from '/@src/composition/state/themeColors'

//Array Utility
const randomizeArray = function (arg: number[]) {
  let array = arg.slice()
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

// data for the sparklines that appear below header area
const sparklineData = [
  472,
  454,
  547,
  385,
  562,
  247,
  652,
  318,
  379,
  391,
  622,
  515,
  355,
  415,
  358,
  271,
  932,
  534,
  615,
  278,
  546,
  435,
  192,
  465,
]

//Spark 1
const spark1 = {
  chart: {
    id: 'sparkline1',
    group: 'sparklines',
    type: 'area',
    height: 130,
    sparkline: {
      enabled: true,
    },
  },
  colors: [themeColors.orange],
  stroke: {
    width: [2],
    curve: 'straight',
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: 'Total Sales',
      data: randomizeArray(sparklineData),
    },
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  yaxis: {
    min: 0,
  },
  xaxis: {
    type: 'datetime',
  },
  title: {
    text: 'Total Sales',
    offsetX: 5,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title',
      color: themeColors.lightText,
    },
  },
  subtitle: {
    text: '9,374',
    offsetX: 5,
    style: {
      fontSize: '24px',
      fontWeight: '600',
      cssClass: 'apexcharts-yaxis-title',
    },
  },
}

//Spark 2
const spark2 = {
  chart: {
    id: 'sparkline2',
    group: 'sparklines',
    type: 'area',
    height: 130,
    sparkline: {
      enabled: true,
    },
  },
  colors: [themeColors.info],
  stroke: {
    width: [2],
    curve: 'straight',
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: 'Total Profit',
      data: randomizeArray(sparklineData),
    },
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  yaxis: {
    min: 0,
  },
  xaxis: {
    type: 'datetime',
  },
  title: {
    text: 'Total Profit',
    offsetX: 5,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title',
      color: themeColors.lightText,
    },
  },
  subtitle: {
    text: '$24,273.31',
    offsetX: 5,
    style: {
      fontSize: '24px',
      fontWeight: '600',
      cssClass: 'apexcharts-yaxis-title',
    },
  },
}

//Spark 3
const spark3 = {
  chart: {
    id: 'sparkline3',
    group: 'sparklines',
    type: 'area',
    height: 130,
    sparkline: {
      enabled: true,
    },
  },
  colors: [themeColors.accent],
  stroke: {
    width: [2],
    curve: 'straight',
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: 'Total Orders',
      data: randomizeArray(sparklineData),
    },
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0,
  },
  title: {
    text: 'Total Orders',
    offsetX: 5,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title',
      color: themeColors.lightText,
    },
  },
  subtitle: {
    text: '4,361',
    offsetX: 5,
    style: {
      fontSize: '24px',
      fontWeight: '600',
      cssClass: 'apexcharts-yaxis-title',
    },
  },
}

//Spark 4
const spark4 = {
  chart: {
    id: 'sparkline3',
    group: 'sparklines',
    type: 'area',
    height: 130,
    sparkline: {
      enabled: true,
    },
  },
  colors: [themeColors.green],
  stroke: {
    width: [2],
    curve: 'straight',
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: 'Consolidated Profit',
      data: randomizeArray(sparklineData),
    },
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0,
  },
  title: {
    text: 'Consolidated Profit',
    offsetX: 5,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title',
      color: themeColors.lightText,
    },
  },
  subtitle: {
    text: '$16,264.37',
    offsetX: 5,
    style: {
      fontSize: '24px',
      fontWeight: '600',
      cssClass: 'apexcharts-yaxis-title',
    },
  },
}

//Revenue Chart
const revenueOptions = {
  series: [
    {
      name: 'Returning',
      data: [318.42, 407.16, 284.12, 517.0, 452.45, 1209.34, 1010.11],
    },
    {
      name: 'Newcomers',
      data: [112.42, 324.45, 457.5, 312.75, 342.45, 527.56, 414.75],
    },
    {
      name: 'Abandonned',
      data: [787.89, 534.46, 365.78, 107.45, 145.78, 54.42, 27.12],
    },
  ],
  chart: {
    height: 250,
    type: 'area',
    offsetY: -10,
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.accent, themeColors.info, themeColors.orange],
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    show: false,
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
    y: {
      formatter: function (val: number) {
        return '$' + val
      },
    },
  },
}

//Sales Revenue Chart
const optionsCircle = {
  series: [65],
  chart: {
    height: 130,
    type: 'radialBar',
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.purple],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '75%',
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
          fontSize: '12px',
          fontWeight: 400,
          offsetY: 5,
          color: themeColors.lightText,
        },
        value: {
          show: true,
          fontWeight: 600,
          fontFamily: 'Roboto, sans-serif',
          color: themeColors.purple,
          fontSize: '16px',
          offsetY: 5,
        },
      },
    },
  },
  labels: ['Progress'],
}

//Small Radial 1
const radialGroup1Options = {
  series: [31],
  chart: {
    height: 80,
    type: 'radialBar',
    offsetY: -10,
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.info],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '35%',
      },
      dataLabels: {
        show: false,
      },
    },
  },
  labels: [''],
}

//Small Radial 2
const radialGroup2Options = {
  series: [53],
  chart: {
    height: 80,
    type: 'radialBar',
    offsetY: -10,
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.orange],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '35%',
      },
      dataLabels: {
        show: false,
      },
    },
  },
  labels: [''],
}

//Small Radial 3
const radialGroup3Options = {
  series: [84],
  chart: {
    height: 80,
    type: 'radialBar',
    offsetY: -10,
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.green],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '35%',
      },
      dataLabels: {
        show: false,
      },
    },
  },
  labels: [''],
}

//Bar Chart
const barData = [
  {
    x: 'Jan',
    y: 322,
  },
  {
    x: 'Feb',
    y: 459,
  },
  {
    x: 'Mar',
    y: 212,
  },
  {
    x: 'Apr',
    y: 345,
  },
  {
    x: 'May',
    y: 111,
  },
  {
    x: 'Jun',
    y: 189,
  },
  {
    x: 'Jul',
    y: 498,
  },
  {
    x: 'Aug',
    y: 612,
  },
  {
    x: 'Sep',
    y: 451,
  },
  {
    x: 'Oct',
    y: 248,
  },
  {
    x: 'Nov',
    y: 306,
  },
  {
    x: 'Dec',
    y: 366,
  },
]

const barData2 = [
  {
    x: 'Jan',
    y: 25,
  },
  {
    x: 'Feb',
    y: 49,
  },
  {
    x: 'Mar',
    y: 36,
  },
  {
    x: 'Apr',
    y: 84,
  },
  {
    x: 'May',
    y: 64,
  },
  {
    x: 'Jun',
    y: 131,
  },
  {
    x: 'Jul',
    y: 48,
  },
  {
    x: 'Aug',
    y: 144,
  },
  {
    x: 'Sep',
    y: 96,
  },
  {
    x: 'Oct',
    y: 11,
  },
  {
    x: 'Nov',
    y: 31,
  },
  {
    x: 'Dec',
    y: 8,
  },
]

const barOptions: any = reactive({
  series: [],
  chart: {
    height: 205,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.accent, themeColors.orange],
  dataLabels: {
    enabled: false,
  },
  noData: {
    text: 'Loading...',
  },
  xaxis: {
    type: 'category',
    tickPlacement: 'on',
    labels: {
      rotate: -45,
      rotateAlways: true,
    },
  },
})

onMounted(async () => {
  setTimeout(() => {
    barOptions.series = [{
      name: "Orders",
      data: barData,
    }]
  }, 1000)

  setTimeout(() => {
    barOptions.series = [...barOptions.series, {
      name: "Abandonned",
      data: barData2,
    }]
  }, 2500)
})

</script>

<template>
  <!--Finance Dashboard V3-->
  <div class="finance-dashboard sales-dashboard">
    <!--Header-->
    <div class="dashboard-header">
      <div class="h-avatar is-large">
        <img
          class="avatar"
          src="/@images/avatars/photos/8.jpg"
          alt=""
          @error="$event.target.src = 'https://via.placeholder.com/150x150'"
        />
      </div>
      <div class="start">
        <h3 class="dark-inverted">Welcome back, Erik Kovalsky</h3>
        <p>We're very happy to see you again on your dashboard.</p>
      </div>
      <div class="end">
        <button class="button h-button is-dark-outlined">View Reports</button>
        <button class="button h-button is-primary is-elevated">
          Transactions
        </button>
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
                  :height="optionsCircle.chart.height"
                  :type="optionsCircle.chart.type"
                  :series="optionsCircle.series"
                  :options="optionsCircle"
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
              :height="barOptions.chart.height"
              :type="barOptions.chart.type"
              :series="barOptions.series"
              :options="barOptions"
            ></apexchart>
          </div>
        </div>
        <div class="column is-3">
          <!--Widget-->
          <div class="widget picker-widget is-straight">
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
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/dashboards/_finance.scss';
</style>
