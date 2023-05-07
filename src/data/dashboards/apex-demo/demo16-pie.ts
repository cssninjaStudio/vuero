import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo16Pie() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [44, 55, 13, 43, 22]
  })

  return reactive({
    height: 295,
    type: 'pie',
    series,
    options: {
      colors: [
        themeColors.accent,
        themeColors.info,
        themeColors.primary,
        themeColors.purple,
        themeColors.orange,
      ],
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 315,
              toolbar: {
                show: false,
              },
            },
            legend: {
              position: 'top',
            },
          },
        },
      ],
      legend: {
        position: 'right',
        horizontalAlign: 'center',
      },
    },
  })
}
