export function useDemo17Donuts() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [44, 55, 41, 17, 15]
  })

  return reactive({
    height: 290,
    type: 'donut',
    series,
    options: {
      title: {
        text: 'Donut Chart',
      },
      chart: {},
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      colors: [
        themeColors.purple,
        themeColors.info,
        themeColors.lime,
        themeColors.purple,
        themeColors.orange,
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 280,
              toolbar: {
                show: false,
              },
            },
            legend: {
              position: 'top',
            },
          },
        },
      ],
      legend: {
        position: 'right',
        horizontalAlign: 'center',
      },
    },
  })
}
