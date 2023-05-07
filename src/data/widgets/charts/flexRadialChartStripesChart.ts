import { useThemeColors } from '/@src/composable/useThemeColors'

export function useFlexRadialChartStripes() {
  const themeColors = useThemeColors()

  const flexRadialChartStripesOptions = shallowRef({
    series: [65],
    chart: {
      height: 180,
      type: 'radialBar',
      offsetX: -15,
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.info, themeColors.secondary],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '13px',
            fontWeight: '600',
            color: themeColors.lightText,
            show: false,
          },
          value: {
            offsetY: 5,
            fontSize: '16px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500',
            color: undefined,
            formatter: function (val: string) {
              return val + '%'
            },
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ['(30 days)'],
  })
  return {
    flexRadialChartStripesOptions,
  }
}
