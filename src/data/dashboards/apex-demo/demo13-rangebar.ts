import dayjs from 'dayjs'
import { useThemeColors } from '/@src/composable/useThemeColors'

export function useDemo13RangeBar() {
  const themeColors = useThemeColors()
  const series = shallowRef<any[]>([])

  watchEffect(() => {
    series.value = [
      {
        data: [
          {
            x: 'Analysis',
            y: [new Date('2019-02-27').getTime(), new Date('2019-03-04').getTime()],
            fillColor: themeColors.accent,
          },
          {
            x: 'Design',
            y: [new Date('2019-03-04').getTime(), new Date('2019-03-08').getTime()],
            fillColor: themeColors.info,
          },
          {
            x: 'Coding',
            y: [new Date('2019-03-07').getTime(), new Date('2019-03-10').getTime()],
            fillColor: themeColors.primary,
          },
          {
            x: 'Testing',
            y: [new Date('2019-03-08').getTime(), new Date('2019-03-12').getTime()],
            fillColor: themeColors.purple,
          },
          {
            x: 'Deployment',
            y: [new Date('2019-03-12').getTime(), new Date('2019-03-17').getTime()],
            fillColor: themeColors.orange,
          },
        ],
      },
    ]
  })

  return reactive({
    height: 280,
    type: 'rangeBar',
    series,
    options: {
      title: {
        text: 'Timeline',
        align: 'left',
      },
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
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false,
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: string, opts: any) {
          const label = opts?.w?.globals?.labels?.[opts.dataPointIndex] ?? ''
          const a = dayjs(val[0])
          const b = dayjs(val[1])
          const diff = b.diff(a, 'days')
          return label + ': ' + diff + (diff > 1 ? 'D' : 'd')
        },
        style: {
          colors: ['#f3f4f5', '#fff'],
        },
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        show: false,
      },
      grid: {
        row: {
          colors: ['transparent'],
          opacity: 1,
        },
      },
    },
  })
}
