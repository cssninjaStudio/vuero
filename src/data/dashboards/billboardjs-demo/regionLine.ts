import type { ChartOptions } from 'billboard.js'
import { useThemeColors } from '/@src/composable/useThemeColors'
import { line } from 'billboard.js'

export function useRegionLine() {
  const themeColors = useThemeColors()
  const options = ref<ChartOptions>({
    data: {
      type: line(),
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25],
      ],
      colors: {
        data1: themeColors.accent,
        data2: themeColors.primary,
        data3: themeColors.info,
      },
      regions: {
        data1: [
          {
            start: 1,
            end: 2,
            style: {
              dasharray: '6 2',
            },
          },
          {
            start: 3,
            style: {
              dasharray: '2 3',
            },
          },
        ],
        data2: [
          {
            end: 3,
          },
        ],
      },
    },
    size: {
      height: 280,
    },
    padding: {
      bottom: 20,
    },
    title: {
      text: 'Line Chart with Regions',
      position: 'left',
      padding: {
        bottom: 20,
        right: 20,
        top: 0,
        left: 20,
      },
    },
    legend: {
      position: 'inset',
    },
  })

  return {
    options,
  }
}
