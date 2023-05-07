import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo1Line() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'Sales',
        data: [105, 414, 357, 511, 497, 621, 695, 912, 748],
      },
    ]
  })

  return reactive({
    height: 280,
    type: 'line',
    series,
    options: {
      chart: {
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: [themeColors.primary],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'straight',
      },
      title: {
        text: 'Line Chart',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    },
  })
}
