export function useDemo22Radar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      },
    ]
  })

  return reactive({
    height: 350,
    type: 'radar',
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: [
        themeColors.purple,
        themeColors.info,
        themeColors.lime,
        themeColors.purple,
        themeColors.orange,
      ],
      title: {
        text: 'Radar Chart',
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June'],
      },
    },
  })
}
