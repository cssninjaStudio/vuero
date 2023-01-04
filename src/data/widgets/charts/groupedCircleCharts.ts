import { useThemeColors } from '/@src/composable/useThemeColors'

export function useGroupedCircleCharts() {
  const themeColors = useThemeColors()

  const widgetRadialGroup1Options = ref({
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

  const widgetRadialGroup2Options = ref({
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

  const widgetRadialGroup3Options = ref({
    series: [84],
    chart: {
      height: 102,
      type: 'radialBar',
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.green],
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
