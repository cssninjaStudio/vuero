import { useThemeColors } from '/@src/composable/useThemeColors'

export function useIncomeHistoryChart() {
  const themeColors = useThemeColors()

  const incomeOptions = {
    series: [
      {
        name: 'Expenses',
        data: [318, 150, 49, 152.13, 421, 1009, 1220, 418, 113, 45],
      },
      {
        name: 'Earnings',
        data: [192, 263, 459, 312, 349, 527, 397, 351, 618, 511],
      },
    ],
    chart: {
      height: 300,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.primary, themeColors.info, themeColors.orange],
    title: {
      text: 'History',
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
        '2020-10-19T00:00:00.000Z',
        '2020-10-20T01:30:00.000Z',
        '2020-10-21T02:30:00.000Z',
        '2020-10-22T03:30:00.000Z',
        '2020-10-23T04:30:00.000Z',
        '2020-10-24T05:30:00.000Z',
        '2020-10-25T06:30:00.000Z',
        '2020-10-26T06:30:00.000Z',
        '2020-10-27T06:30:00.000Z',
        '2020-10-28T06:30:00.000Z',
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
  return {
    incomeOptions,
  }
}
