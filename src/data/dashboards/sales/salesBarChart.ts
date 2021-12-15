import { reactive } from 'vue'
import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()

export const barData = [
  {
    x: 'Jan',
    y: 322,
  },
  {
    x: 'Feb',
    y: 459,
  },
  {
    x: 'Mar',
    y: 212,
  },
  {
    x: 'Apr',
    y: 345,
  },
  {
    x: 'May',
    y: 111,
  },
  {
    x: 'Jun',
    y: 189,
  },
  {
    x: 'Jul',
    y: 498,
  },
  {
    x: 'Aug',
    y: 612,
  },
  {
    x: 'Sep',
    y: 451,
  },
  {
    x: 'Oct',
    y: 248,
  },
  {
    x: 'Nov',
    y: 306,
  },
  {
    x: 'Dec',
    y: 366,
  },
]

export const barData2 = [
  {
    x: 'Jan',
    y: 25,
  },
  {
    x: 'Feb',
    y: 49,
  },
  {
    x: 'Mar',
    y: 36,
  },
  {
    x: 'Apr',
    y: 84,
  },
  {
    x: 'May',
    y: 64,
  },
  {
    x: 'Jun',
    y: 131,
  },
  {
    x: 'Jul',
    y: 48,
  },
  {
    x: 'Aug',
    y: 144,
  },
  {
    x: 'Sep',
    y: 96,
  },
  {
    x: 'Oct',
    y: 11,
  },
  {
    x: 'Nov',
    y: 31,
  },
  {
    x: 'Dec',
    y: 8,
  },
]

export const salesBarOptions = reactive<any>({
  series: [],
  chart: {
    height: 205,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.accent, themeColors.green],
  dataLabels: {
    enabled: false,
  },
  noData: {
    text: 'Loading...',
  },
  xaxis: {
    type: 'category',
    tickPlacement: 'on',
    labels: {
      rotate: -45,
      rotateAlways: true,
    },
  },
})
