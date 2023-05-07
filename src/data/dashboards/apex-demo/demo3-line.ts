import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo3Line() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'New members',
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 79],
      },
    ]
  })

  return reactive({
    type: 'line',
    height: 280,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'stepline',
      },
      colors: [themeColors.primary],
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'Stepline Chart',
        align: 'left',
      },
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
    },
  })
}
