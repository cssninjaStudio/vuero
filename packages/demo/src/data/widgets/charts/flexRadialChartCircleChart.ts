export function useFlexRadialChartCircle() {
  const themeColors = useThemeColors()

  const flexRadialChartCircleOptions = shallowRef({
    series: [65],
    chart: {
      height: 150,
      type: 'radialBar',
      offsetX: -10,
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
            show: false,
            fontSize: '12px',
            fontWeight: 400,
            offsetY: 5,
            color: themeColors.grey,
          },
          value: {
            show: true,
            fontWeight: 600,
            fontFamily: '"Roboto Flex Variable", sans-serif',
            color: themeColors.purple,
            fontSize: '16px',
            offsetY: 5,
          },
        },
      },
    },
    labels: ['Progress'],
  })

  return {
    flexRadialChartCircleOptions,
  }
}
