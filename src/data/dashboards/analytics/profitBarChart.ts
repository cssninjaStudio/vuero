import { useThemeColors } from '/@src/composable/useThemeColors'

export function useProfitBarChart() {
  const themeColors = useThemeColors()

  const series = [
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
  ].map((s) => {
    return {
      name: s.name,
      data: s.data.map((d) => {
        return d - 70
      }),
    }
  })

  const barOptions = shallowRef({
    chart: {
      height: 250,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.accent, themeColors.purple, themeColors.primary],
    legend: {
      position: 'top',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    series: series,
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      labels: {
        formatter: function (val: string) {
          return val + 70
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: string) {
          return val + 70
        },
      },
    },
  })

  return {
    barOptions,
  }
}
