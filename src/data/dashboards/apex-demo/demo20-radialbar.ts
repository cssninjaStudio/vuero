import { useThemeColors } from '/@src/composable/useThemeColors'
import { asPercent } from '/@src/utils/apex-formatters'

export function useDemo20RadialBar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [67]
  })

  return reactive({
    height: 295,
    type: 'radialBar',
    series,
    options: {
      title: {
        text: 'Radial Bar Gauge',
      },
      chart: {
        offsetY: -10,
        toolbar: {
          show: false,
        },
      },
      colors: [
        themeColors.accent,
        themeColors.info,
        themeColors.primary,
        themeColors.purple,
        themeColors.orange,
      ],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: undefined,
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: '22px',
              color: undefined,
              formatter: asPercent,
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
      labels: ['Median Ratio'],
    },
  })
}
