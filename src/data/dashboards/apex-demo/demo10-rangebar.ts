import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo10RangeBar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'Corporate',
        data: [
          {
            x: 'Team A',
            y: [1, 5],
          },
          {
            x: 'Team B',
            y: [4, 6],
          },
          {
            x: 'Team C',
            y: [5, 8],
          },
          {
            x: 'Team D',
            y: [3, 11],
          },
        ],
      },
      {
        name: 'Service',
        data: [
          {
            x: 'Team A',
            y: [2, 6],
          },
          {
            x: 'Team B',
            y: [1, 3],
          },
          {
            x: 'Team C',
            y: [7, 8],
          },
          {
            x: 'Team D',
            y: [5, 9],
          },
        ],
      },
    ]
  })

  return reactive({
    type: 'rangeBar',
    height: 280,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: [
        themeColors.accent,
        themeColors.primary,
        themeColors.orange,
        themeColors.purple,
        themeColors.primary,
      ],
      title: {
        text: 'Range Column',
        align: 'left',
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
      dataLabels: {
        enabled: true,
      },
    },
  })
}
