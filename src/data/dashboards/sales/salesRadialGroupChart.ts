import { useThemeColors } from '/@src/composable/useThemeColors'

export function useSalesRadialGroupChart() {
  const themeColors = useThemeColors()

  const radialGroup1Options = ref({
    series: [31],
    chart: {
      height: 100,
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

  const radialGroup2Options = ref({
    series: [53],
    chart: {
      height: 100,
      type: 'radialBar',
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.purple],
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

  const radialGroup3Options = ref({
    series: [84],
    chart: {
      height: 100,
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
    radialGroup1Options,
    radialGroup2Options,
    radialGroup3Options,
  }
}
