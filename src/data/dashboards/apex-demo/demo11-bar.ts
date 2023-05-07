import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo11Bar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'Spaceships',
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ]
  })

  return reactive({
    type: 'bar',
    height: 280,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: [themeColors.primary],
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      title: {
        text: 'Horizontal Bar',
        align: 'left',
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'South Korea',
          'Canada',
          'United Kingdom',
          'Netherlands',
          'Italy',
          'France',
          'Japan',
          'United States',
          'China',
          'Germany',
        ],
      },
    },
  })
}
