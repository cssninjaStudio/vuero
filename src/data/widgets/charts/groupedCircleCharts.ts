import { useThemeColors } from '/@src/composable/useThemeColors'

export function useGroupedCircleCharts() {
  const themeColors = useThemeColors()

  const widgetRadialGroup1Options = shallowRef({
    series: [31],
    chart: {
      height: 102,
      type: 'radialBar',
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.info],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '35%',
        },
        dataLabels: {
          show: false,
        },
      },
    },
    labels: [''],
  })

  const widgetRadialGroup2Options = shallowRef({
    series: [53],
    chart: {
      height: 102,
      type: 'radialBar',
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.orange],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '35%',
        },
        dataLabels: {
          show: false,
        },
      },
    },
    labels: [''],
  })

  const widgetRadialGroup3Options = shallowRef({
    series: [84],
    chart: {
      height: 102,
      type: 'radialBar',
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.primary],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '35%',
        },
        dataLabels: {
          show: false,
        },
      },
    },
    labels: [''],
  })

  return {
    widgetRadialGroup1Options,
    widgetRadialGroup2Options,
    widgetRadialGroup3Options,
  }
}
