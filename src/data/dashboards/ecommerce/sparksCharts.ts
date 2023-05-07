import { useThemeColors } from '/@src/composable/useThemeColors'
import * as formatters from '/@src/utils/apex-formatters'

export function useSparksCharts() {
  const themeColors = useThemeColors()
  const spark1 = shallowRef({
    chart: {
      id: 'sparkline1',
      type: 'line',
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    series: [
      {
        name: 'Sales',
        data: [2565, 6126, 4271, 5249, 2245, 4424, 1752, 3996, 976, 2157],
      },
    ],
    stroke: {
      curve: 'smooth',
      width: [3],
    },
    markers: {
      size: 0,
    },
    yaxis: {
      min: 0,
      labels: {
        minWidth: 100,
      },
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: 'right',
      },
      x: {
        show: false,
      },
    },
    colors: [themeColors.info],
  })

  const spark2 = shallowRef({
    chart: {
      id: 'sparkline2',
      type: 'line',
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    series: [
      {
        name: 'Income',
        data: [12.2, 14.5, 2.5, 47.5, 32.5, 44.5, 14.8, 55.5, 41.3, 69.7],
      },
    ],
    stroke: {
      curve: 'smooth',
      width: [3],
    },
    markers: {
      size: 0,
    },
    yaxis: {
      min: 0,
      labels: {
        minWidth: 100,
      },
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: 'right',
      },
      x: {
        show: false,
      },
      y: {
        formatter: formatters.asKDollar,
      },
    },
    colors: [themeColors.purple],
  })

  const spark3 = shallowRef({
    chart: {
      id: 'sparkline3',
      type: 'line',
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    series: [
      {
        name: 'New Orders',
        data: [4457, 4533, 7274, 3272, 5876, 3271, 4614, 3553, 4835, 1579],
      },
    ],
    stroke: {
      curve: 'smooth',
      width: [3],
    },
    markers: {
      size: 0,
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: 'right',
      },
      x: {
        show: false,
      },
    },
    colors: [themeColors.green],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
      labels: {
        minWidth: 100,
      },
    },
  })

  const spark4 = shallowRef({
    chart: {
      id: 'sparkline4',
      type: 'line',
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    series: [
      {
        name: 'Abandonned',
        data: [1412, 725, 427, 655, 145, 325, 197, 584, 424, 651],
      },
    ],
    stroke: {
      curve: 'smooth',
      width: [3],
    },
    markers: {
      size: 0,
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: 'right',
      },
      x: {
        show: false,
      },
    },
    colors: [themeColors.orange],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
      labels: {
        minWidth: 100,
      },
    },
  })

  return {
    spark1,
    spark2,
    spark3,
    spark4,
  }
}
