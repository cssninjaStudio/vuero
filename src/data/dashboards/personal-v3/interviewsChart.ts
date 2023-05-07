import { useThemeColors } from '/@src/composable/useThemeColors'

export function useInterviewsChart() {
  const themeColors = useThemeColors()

  const interviewsOptions = shallowRef({
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
  })

  return {
    interviewsOptions,
  }
}
