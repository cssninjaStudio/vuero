<script setup lang="ts">
import { themeColors } from '/@src/composition/state/themeColors'

function generateDayWiseTimeSeries(s: number, count: number) {
  var values = [
    [
      0.4,
      0.3,
      1,
      0.9,
      2.9,
      1.9,
      2.5,
      0.9,
      1.2,
      0.7,
      1.9,
      0.5,
      1.3,
      0.9,
      1.7,
      0.2,
      0.7,
      0.5,
    ],
    [
      0.2,
      0.3,
      0.8,
      0.7,
      2.2,
      1.6,
      2.3,
      0.7,
      1.1,
      0.5,
      1.2,
      0.5,
      1,
      0.4,
      1.5,
      0.2,
      0.6,
      2,
    ],
  ]
  var i = 0
  var series = []
  var x = new Date('11 Nov 2020').getTime()
  while (i < count) {
    series.push([x, values[s][i]])
    x += 86400000
    i++
  }
  return series
}

//Currency Chart
var options = {
  chart: {
    type: 'area',
    height: 350,
    foreColor: '#999',
    stacked: true,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06,
    },
  },
  colors: [themeColors.accent, themeColors.orange, themeColors.orange],
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  title: {
    text: 'Bitcoin (BTC) Price Chart',
    align: 'left',
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: 'Expected',
      data: generateDayWiseTimeSeries(0, 18),
    },
    {
      name: 'Real',
      data: generateDayWiseTimeSeries(1, 18),
    },
  ],
  markers: {
    size: 0,
    strokeColor: '#fff',
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6,
    },
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: 0,
      offsetY: -5,
    },
    tooltip: {
      enabled: true,
    },
  },
  grid: {
    show: false,
    padding: {
      left: -5,
      right: 5,
    },
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy',
    },
    y: {
      formatter: function (val: number) {
        return val + '%'
      },
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
  },
  fill: {
    type: 'solid',
    fillOpacity: 0.7,
  },
}

//Evolution Chart
var radialOptions = {
  series: [54],
  chart: {
    height: 220,
    type: 'radialBar',
  },
  colors: [themeColors.accent, themeColors.orange, themeColors.orange],
  title: {
    text: 'Bitcoin (BTC) Evolution',
    align: 'left',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          offsetY: 15,
          fontSize: '13px',
          fontFamily: 'Roboto, sans-serif',
          color: themeColors.lightText,
          formatter: function () {
            return ['(30 days)']
          },
        },
        value: {
          color: themeColors.accent,
          offsetY: -20,
          fontSize: '16px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '500',
        },
      },
    },
  },
  labels: ['Median Ratio'],
}

//Gauge Chart
var gaugeOptions = {
  series: [67],
  title: {
    text: 'Bitcoin (BTC) Popularity',
  },
  chart: {
    height: 225,
    type: 'radialBar',
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.orange, themeColors.secondary],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '13px',
          fontWeight: '600',
          color: themeColors.lightText,
          offsetY: 80,
        },
        value: {
          offsetY: 40,
          fontSize: '18px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '500',
          color: undefined,
          formatter: function (val: number) {
            return val + '%'
          },
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  },
  stroke: {
    dashArray: 4,
  },
  labels: ['(30 days)'],
}
</script>

<template>
  <!--Banking Dashboard V3-->
  <div class="banking-dashboard banking-dashboard-v3">
    <!--Header-->
    <div class="dashboard-header">
      <div class="left">
        <span>Latest Bitcoin (BTC) Price Chart</span>
        <div class="currency">
          <span class="amount is-positive dark-inverted">$10584.30</span>
        </div>
      </div>
      <div class="right">
        <div class="buttons">
          <button class="button h-action">Hour</button>
          <button class="button h-action">Day</button>
          <button class="button h-action is-active">Week</button>
          <button class="button h-action">Month</button>
          <button class="button h-action">Year</button>
        </div>
      </div>
    </div>

    <!--Body-->
    <div class="columns">
      <div class="column is-8">
        <!--Tiles-->
        <div class="dashboard-tiles">
          <!--Tile-->
          <div class="dashboard-tile">
            <span>Market Cap</span>
            <span class="dark-inverted">$129,992,260,090</span>
          </div>
          <!--Tile-->
          <div class="dashboard-tile">
            <span>Volume 24h</span>
            <span class="dark-inverted">$453,178 K</span>
          </div>
          <!--Tile-->
          <div class="dashboard-tile">
            <span>Low/high 24h</span>
            <span class="dark-inverted">$10,212 - $10,584</span>
          </div>
        </div>

        <!--Chart-->
        <div class="dashboard-card">
          <apexchart
            id="currency-chart"
            :height="options.chart.height"
            :type="options.chart.type"
            :series="options.series"
            :options="options"
          ></apexchart>
        </div>

        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="dashboard-card">
              <apexchart
                id="radial-chart"
                :height="radialOptions.chart.height"
                :type="radialOptions.chart.type"
                :series="radialOptions.series"
                :options="radialOptions"
              ></apexchart>
            </div>
          </div>
          <div class="column is-6">
            <div class="dashboard-card">
              <apexchart
                id="radial-gauge"
                :height="gaugeOptions.chart.height"
                :type="gaugeOptions.chart.type"
                :series="gaugeOptions.series"
                :options="gaugeOptions"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-4">
        <!--Info-->
        <div class="dashboard-card is-side">
          <div class="media-flex-center is-responsive-mobile">
            <div class="h-avatar">
              <img
                class="avatar"
                src="/@images/icons/cryptocurrencies/btc.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="flex-meta">
              <span>Bitcoin</span>
              <span>BTC</span>
            </div>
            <div class="flex-end">
              <!--Dropdown-->
              <GraphDropdown />
            </div>
          </div>
          <div class="currency-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vide,
              quantum, inquam, fallare, Torquate. Quid censes in Latino fore?
              Optime, inquam. Ratio quidem vestra sic cogit. Prave, nequiter,
              turpiter cenabat; Duo Reges: constructio interrete.
            </p>
          </div>
          <div class="button-wrap">
            <button class="button h-button is-primary is-elevated">
              Buy BTC
            </button>
            <button class="button h-button is-dark-outlined">Compare</button>
          </div>
        </div>

        <div class="dashboard-card is-side">
          <div class="subheading-wrap">
            <h4 class="subheading dark-inverted">Followers</h4>
            <a href="#" class="action-link">View All</a>
          </div>

          <div class="people">
            <div class="h-avatar">
              <img
                class="avatar"
                src="/@images/avatars/photos/21.jpg"
                alt=""
                data-user-popover="19"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="h-avatar">
              <span class="avatar is-fake is-h-purple" data-user-popover="35">
                <span>SC</span>
              </span>
            </div>
            <div class="h-avatar">
              <img
                class="avatar"
                src="/@images/avatars/photos/7.jpg"
                alt=""
                data-user-popover="0"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="h-avatar">
              <span class="avatar is-fake is-success" data-user-popover="37">
                <span>AT</span>
              </span>
            </div>
            <div class="h-avatar">
              <img
                class="avatar"
                src="/@images/avatars/photos/31.jpg"
                alt=""
                data-user-popover="27"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="h-avatar">
              <span class="avatar is-fake is-h-yellow">
                <span>50K</span>
              </span>
            </div>
          </div>
        </div>

        <div class="dashboard-card is-side">
          <div class="subheading-wrap">
            <h4 class="subheading dark-inverted">Popular Coins</h4>
            <a href="#" class="action-link">View All</a>
          </div>

          <div class="media-flex-center">
            <div class="h-avatar is-small">
              <img
                class="avatar"
                src="/@images/icons/cryptocurrencies/xmr.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="flex-meta">
              <span>Monero</span>
              <span>XMR</span>
            </div>
            <div class="flex-end">
              <button class="button is-circle is-dark-outlined">
                <span class="icon is-small">
                  <Icon icon="feather:plus" />
                </span>
              </button>
            </div>
          </div>

          <div class="media-flex-center">
            <div class="h-avatar is-small">
              <img
                class="avatar"
                src="/@images/icons/cryptocurrencies/ltc.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="flex-meta">
              <span>Litecoin</span>
              <span>LTC</span>
            </div>
            <div class="flex-end">
              <button class="button is-circle is-dark-outlined">
                <span class="icon is-small">
                  <Icon icon="feather:plus" />
                </span>
              </button>
            </div>
          </div>

          <div class="media-flex-center">
            <div class="h-avatar is-small">
              <img
                class="avatar"
                src="/@images/icons/cryptocurrencies/link.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="flex-meta">
              <span>ChainLink</span>
              <span>LINK</span>
            </div>
            <div class="flex-end">
              <button class="button is-circle is-dark-outlined">
                <span class="icon is-small">
                  <Icon icon="feather:plus" />
                </span>
              </button>
            </div>
          </div>

          <div class="media-flex-center">
            <div class="h-avatar is-small">
              <img
                class="avatar"
                src="/@images/icons/cryptocurrencies/bnb.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="flex-meta">
              <span>Binance Coin</span>
              <span>BNB</span>
            </div>
            <div class="flex-end">
              <button class="button is-circle is-dark-outlined">
                <span class="icon is-small">
                  <Icon icon="feather:plus" />
                </span>
              </button>
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
