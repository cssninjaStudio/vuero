import { useThemeColors } from '/@src/composable/useThemeColors'

export function useShippingCharts() {
  const themeColors = useThemeColors()
  const freeShippingChartOptions = shallowRef({
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

  const groundShippingChartOptions = shallowRef({
    series: [53],
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

  const nextDayAirChartOptions = shallowRef({
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
    freeShippingChartOptions,
    groundShippingChartOptions,
    nextDayAirChartOptions,
  }
}
