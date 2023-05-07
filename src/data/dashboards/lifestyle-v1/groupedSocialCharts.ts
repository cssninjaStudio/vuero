import { useThemeColors } from '/@src/composable/useThemeColors'

export function useGroupedSocialChart() {
  const themeColors = useThemeColors()

  const creativityRadialOptions = shallowRef({
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

  const engagmentRadialOptions = shallowRef({
    series: [53],
    chart: {
      height: 100,
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

  const popularityRadialOptions = shallowRef({
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
    creativityRadialOptions,
    engagmentRadialOptions,
    popularityRadialOptions,
  }
}
