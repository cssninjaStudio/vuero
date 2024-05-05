export function useGoalCharts() {
  const themeColors = useThemeColors()
  const gaugeOptions = shallowRef({
    series: [57, 86],
    chart: {
      height: 220,
      type: 'radialBar',
      offsetY: -10,
    },
    colors: [themeColors.purple, themeColors.lime],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        inverseOrder: true,
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '14px',
            fontWeight: 500,
            offsetY: -10,
          },
          value: {
            show: true,
            fontWeight: 600,
            color: themeColors.grey,
            fontSize: '16px',
            offsetY: -5,
          },
          total: {
            show: true,
            fontSize: '14px',
            fontWeight: 500,
            color: themeColors.grey,
          },
        },
        hollow: {
          margin: 15,
          size: '75%',
        },
        track: {
          strokeWidth: '100%',
        },
      },
    },

    stroke: {
      lineCap: 'round',
    },
    labels: ['Efficiency', 'Productivity'],
  })

  return {
    gaugeOptions,
  }
}
