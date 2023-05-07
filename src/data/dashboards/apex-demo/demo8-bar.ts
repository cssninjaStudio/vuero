import { useThemeColors } from '/@src/composable/useThemeColors'
import { asKDollar } from '/@src/utils/apex-formatters'

export function useDemo8Bar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
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
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      colors: [
        themeColors.accent,
        themeColors.info,
        themeColors.primary,
        themeColors.purple,
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
      title: {
        text: 'Multiple Bars',
        align: 'left',
      },
      tooltip: {
        y: {
          formatter: asKDollar,
        },
      },
    },
  })
}
