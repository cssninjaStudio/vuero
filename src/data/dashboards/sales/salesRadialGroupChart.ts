import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()

export const radialGroup1Options = {
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

export const radialGroup2Options = {
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
}

export const radialGroup3Options = {
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
