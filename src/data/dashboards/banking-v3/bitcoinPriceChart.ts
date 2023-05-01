import { useThemeColors } from '/@src/composable/useThemeColors'

function generateDayWiseTimeSeries(s: number, count: number) {
  const values = [
    [
      0.4, 0.3, 1, 0.9, 2.9, 1.9, 2.5, 0.9, 1.2, 0.7, 1.9, 0.5, 1.3, 0.9, 1.7, 0.2, 0.7,
      0.5,
    ],
    [
      0.2, 0.3, 0.8, 0.7, 2.2, 1.6, 2.3, 0.7, 1.1, 0.5, 1.2, 0.5, 1, 0.4, 1.5, 0.2, 0.6,
      2,
    ],
  ]
  let i = 0
  const series = []
  let x = new Date('11 Nov 2020').getTime()
  while (i < count) {
    series.push([x, values[s][i]])
    x += 86400000
    i++
  }
  return series
}

export function useBitcoinPriceChart() {
  const themeColors = useThemeColors()
  const bitcoinChartOptions = {
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
    colors: [themeColors.primary, themeColors.accent, themeColors.primary],
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

  return {
    bitcoinChartOptions,
  }
}
