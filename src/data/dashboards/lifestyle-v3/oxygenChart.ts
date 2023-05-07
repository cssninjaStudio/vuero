import { useThemeColors } from '/@src/composable/useThemeColors'
import * as formatters from '/@src/utils/apex-formatters'

export function useOxygenChart() {
  const themeColors = useThemeColors()
  const oxygenChartOptions = shallowRef({
    series: [
      {
        name: 'Variation (pt)',
        data: [23, 26, 10, 7, 11, 18, 16],
      },
    ],
    chart: {
      height: 280,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: formatters.asPercent,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      position: 'top',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: formatters.asPercent,
      },
    },
    colors: [themeColors.purple],
  })

  return {
    oxygenChartOptions,
  }
}
