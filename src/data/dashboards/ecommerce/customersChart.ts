import { useThemeColors } from '/@src/composable/useThemeColors'
import * as formatters from '/@src/utils/apex-formatters'

export function useCustomersChart() {
  const themeColors = useThemeColors()
  const customersChartOptions = shallowRef({
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
    colors: [themeColors.accent, themeColors.info, themeColors.primary],
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
        formatter: formatters.asDollar,
      },
    },
  })

  return {
    customersChartOptions,
  }
}
