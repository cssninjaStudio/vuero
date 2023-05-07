import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo12Bar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        name: 'Completed',
        data: [44, 55, 41, 64, 22, 43, 21],
      },
      {
        name: 'Pending',
        data: [53, 32, 33, 52, 13, 44, 32],
      },
    ]
  })

  return reactive({
    type: 'bar',
    height: 280,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: [themeColors.info, themeColors.primary],
      title: {
        text: 'Horizontal Bar Multiple',
        align: 'left',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff'],
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
    },
  })
}
