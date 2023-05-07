import { useThemeColors } from '/@src/composable/useThemeColors'

export function useSharingChart() {
  const themeColors = useThemeColors()

  const sharingOptions = shallowRef({
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13, 30, 35, 41, 36, 26],
      },
    ],
    chart: {
      height: 180,
      type: 'bar',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: [themeColors.accent, themeColors.primary, themeColors.info],
    plotOptions: {
      bar: {
        columnWidth: '30px',
        distributed: true,
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
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
  })

  return {
    sharingOptions,
  }
}
