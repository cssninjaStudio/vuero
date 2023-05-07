import { useThemeColors } from '/@src/composable/useThemeColors'

function generateData(
  baseval: number,
  count: number,
  yrange: { min: number; max: number }
) {
  let i = 0
  let date = baseval
  const series = []
  while (i < count) {
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push([date, y])
    date += 86400000
    i++
  }
  return series
}

export function useDemo15Scatter() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'Team 1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Team 2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Team 3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 30, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Team 4',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 10, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Team 5',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 30, {
          min: 10,
          max: 60,
        }),
      },
    ]
  })

  return reactive({
    height: 280,
    type: 'scatter',
    series,
    options: {
      title: {
        text: 'Scatter Chart',
      },
      chart: {
        zoom: {
          type: 'xy',
        },
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
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: 'datetime',
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
