import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()

export const freeShippingChartOptions = {
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
}

export const groundShippingChartOptions = {
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
}

export const nextDayAirChartOptions = {
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
}
