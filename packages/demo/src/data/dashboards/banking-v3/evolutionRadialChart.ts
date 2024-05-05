export function useEvolutionRadialChart() {
  const themeColors = useThemeColors()

  const evolutionRadialOptions = {
    series: [54],
    chart: {
      height: 220,
      type: 'radialBar',
    },
    colors: [themeColors.purple, themeColors.orange, themeColors.orange],
    title: {
      text: 'Bitcoin (BTC) Evolution',
      align: 'left',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            offsetY: 15,
            fontSize: '13px',
            fontFamily: '"Roboto Flex Variable", sans-serif',
            color: themeColors.grey,
            formatter: function () {
              return ['(30 days)']
            },
          },
          value: {
            color: themeColors.purple,
            offsetY: -20,
            fontSize: '16px',
            fontFamily: '"Roboto Flex Variable", sans-serif',
            fontWeight: '500',
          },
        },
      },
    },
    labels: ['Median Ratio'],
  }

  return {
    evolutionRadialOptions,
  }
}
