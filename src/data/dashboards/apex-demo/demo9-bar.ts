import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo9Bar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'Desktops',
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: 'Phones',
        data: [13, 23, 20, 8, 13, 27],
      },
      {
        name: 'Tablets',
        data: [11, 17, 15, 15, 21, 14],
      },
      {
        name: 'Hybrid',
        data: [21, 7, 25, 13, 22, 8],
      },
    ]
  })

  return reactive({
    type: 'bar',
    height: 280,
    series,
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      colors: [
        themeColors.accent,
        themeColors.info,
        themeColors.primary,
        themeColors.purple,
        themeColors.orange,
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'top',
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '01/01/2011 GMT',
          '01/02/2011 GMT',
          '01/03/2011 GMT',
          '01/04/2011 GMT',
          '01/05/2011 GMT',
          '01/06/2011 GMT',
        ],
      },
      title: {
        text: 'Stacked Bars',
        align: 'left',
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
      fill: {
        opacity: 1,
      },
    },
  })
}
