export function useGrowthRadialChart() {
  const themeColors = useThemeColors()

  const optionsCircle = shallowRef({
    series: [65],
    chart: {
      height: 160,
      type: 'radialBar',
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.purple],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '75%',
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '14px',
            fontWeight: 500,
            offsetY: -10,
            color: themeColors.grey,
          },
          value: {
            show: true,
            fontWeight: 600,
            color: themeColors.purple,
            fontSize: '16px',
            offsetY: -5,
          },
        },
      },
    },
    labels: ['Growth'],
  })

  return {
    optionsCircle,
  }
}
