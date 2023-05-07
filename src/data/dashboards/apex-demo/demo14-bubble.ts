import { useThemeColors } from '/@src/composable/useThemeColors'

function generateData(
  baseval: number,
  count: number,
  yrange: { min: number; max: number }
) {
  let i = 0
  const _series = []
  while (i < count) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

    _series.push([x, y, z])
    i++
  }
  return _series
}

export function useDemo14Bubble() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'Bubble1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Bubble2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Bubble3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Bubble4',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ]
  })

  return reactive({
    height: 280,
    type: 'bubble',
    series,
    options: {
      chart: {
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
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 0.8,
      },
      title: {
        text: 'Bubble Chart',
      },
      xaxis: {
        tickAmount: 12,
        type: 'category',
      },
      yaxis: {
        max: 70,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
    },
  })
}
