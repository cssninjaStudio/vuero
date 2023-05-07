import { useThemeColors } from '/@src/composable/useThemeColors'
import { toDate, toFixed } from '/@src/utils/apex-formatters'

export function useDemo6Area() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(async () => {
    const { dataSeries } = await import('./data/dataSeries')

    let ts1 = 1388534400000
    let ts2 = 1388620800000
    let ts3 = 1389052800000

    const dataSet: any[] = [[], [], []]

    for (let i = 0; i < 12; i++) {
      ts1 = ts1 + 86400000
      const innerArr: any[] = [ts1, dataSeries[2][i].value]
      dataSet[0].push(innerArr)
    }
    for (let i = 0; i < 18; i++) {
      ts2 = ts2 + 86400000
      const innerArr: any[] = [ts2, dataSeries[1][i].value]
      dataSet[1].push(innerArr)
    }
    for (let i = 0; i < 12; i++) {
      ts3 = ts3 + 86400000
      const innerArr: any[] = [ts3, dataSeries[0][i].value]
      dataSet[2].push(innerArr)
    }

    series.value = [
      {
        name: 'Desktops',
        data: dataSet[0],
      },
      {
        name: 'Phones',
        data: dataSet[1],
      },
      {
        name: 'Tablets',
        data: dataSet[2],
      },
    ]
  })

  return reactive({
    type: 'area',
    height: 280,
    series,
    options: {
      chart: {
        stacked: false,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100],
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#8e8da4',
          },
          offsetX: 0,
          formatter: toFixed(2, 1000000),
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      xaxis: {
        type: 'datetime',
        tickAmount: 8,
        min: new Date('01/01/2014').getTime(),
        max: new Date('01/20/2014').getTime(),
        labels: {
          rotate: -15,
          rotateAlways: true,
          formatter: toDate('DD MMM YYYY'),
        },
      },
      colors: [themeColors.accent, themeColors.info, themeColors.primary],
      title: {
        text: 'Multiple Areas',
        align: 'left',
      },
      tooltip: {
        shared: true,
      },
      stroke: {
        width: [2, 2, 2],
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
        // offsetX: -10
      },
    },
  })
}
