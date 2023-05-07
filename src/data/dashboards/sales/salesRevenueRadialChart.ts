import { useThemeColors } from '/@src/composable/useThemeColors'

export function useSalesRevenueRadialChart() {
  const themeColors = useThemeColors()

  const salesRevenuesRadialOptions = shallowRef({
    series: [65],
    chart: {
      height: 155,
      type: 'radialBar',
      toolbar: {
        show: false,
      },
    },
    colors: [themeColors.info],
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
            color: themeColors.lightText,
          },
          value: {
            show: true,
            fontWeight: 600,
            fontFamily: 'Roboto, sans-serif',
            color: themeColors.info,
            fontSize: '16px',
            offsetY: 5,
          },
        },
      },
    },
    labels: ['Progress'],
  })

  return {
    salesRevenuesRadialOptions,
  }
}
