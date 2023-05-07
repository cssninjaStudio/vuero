import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo19RadialBar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [44, 55, 67, 83]
  })

  return reactive({
    height: 295,
    type: 'radialBar',
    series,
    options: {
      title: {
        text: 'Radial Bar Multiple',
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: [
        themeColors.accent,
        themeColors.info,
        themeColors.primary,
        themeColors.purple,
        themeColors.orange,
      ],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (/* value: string */) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              },
            },
          },
        },
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    },
  })
}
