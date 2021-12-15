import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()

export const widgetRadialGroup1Options = {
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

export const widgetRadialGroup2Options = {
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
}

export const widgetRadialGroup3Options = {
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
