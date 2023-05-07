import { useThemeColors } from '/@src/composable/useThemeColors'

export function useUsersChart() {
  const themeColors = useThemeColors()

  const usersOptions = shallowRef({
    series: [
      {
        name: 'New Users',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Renewals',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Resigns',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      height: 180,
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: [themeColors.primary, themeColors.accent, themeColors.info],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2],
      curve: 'smooth',
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: [
      {
        y: 0,
        offsetX: 0,
        offsetY: 0,
        labels: {
          show: false,
        },
        padding: {
          left: 0,
          right: 0,
        },
      },
    ],
    tooltip: {
      x: {
        show: false,
        format: 'dd/MM/yy HH:mm',
      },
    },
  })

  return {
    usersOptions,
  }
}
