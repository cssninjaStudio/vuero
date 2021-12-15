import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()

export const creativityRadialOptions = {
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
}

export const engagmentRadialOptions = {
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
}

export const popularityRadialOptions = {
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
}
