import { useThemeColors } from '/@src/composable/useThemeColors'

export function useProgressChart() {
  const themeColors = useThemeColors()

  const progressChartOptions = shallowRef({
    series: [
      {
        name: 'Progress (pt)',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    chart: {
      type: 'area',
      height: 280,
      offsetX: 20,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
    },
    colors: [themeColors.primary],
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: 'left',
    },
  })

  return {
    progressChartOptions,
  }
}
