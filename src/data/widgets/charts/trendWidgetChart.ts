import { useThemeColors } from '/@src/composable/useThemeColors'

export function useTrendWidgetChart() {
  const themeColors = useThemeColors()

  const trendWidgetChartOptions = shallowRef({
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    chart: {
      height: '200px',
      width: '100%',
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.accent, themeColors.purple, themeColors.orange],
    grid: {
      show: false,
      padding: {
        left: -20,
        right: 0,
      },
    },
    padding: {
      bottom: 0,
      left: 0,
      right: 0,
    },
    legend: {
      show: false,
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
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        offsetX: -40,
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  })

  return {
    trendWidgetChartOptions,
  }
}
