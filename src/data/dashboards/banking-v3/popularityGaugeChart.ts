import { useThemeColors } from '/@src/composable/useThemeColors'

export function usePopularityGaugeChart() {
  const themeColors = useThemeColors()

  const popularityGaugeOptions = {
    series: [67],
    title: {
      text: 'Bitcoin (BTC) Popularity',
    },
    chart: {
      height: 225,
      type: 'radialBar',
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.primary, themeColors.secondary],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '13px',
            fontWeight: '600',
            color: themeColors.lightText,
            offsetY: 80,
          },
          value: {
            offsetY: 40,
            fontSize: '18px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500',
            color: undefined,
            formatter: function (val: number) {
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
  }

  return {
    popularityGaugeOptions,
  }
}
