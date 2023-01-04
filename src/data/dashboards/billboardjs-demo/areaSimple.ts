import type { ChartOptions } from 'billboard.js'
import { useThemeColors } from '/@src/composable/useThemeColors'
import { area } from 'billboard.js'

export function useAreaSimpleChart() {
  const themeColors = useThemeColors()
  const options = ref<ChartOptions>({
    data: {
      type: area(),
      columns: [
        ['data1', 300, 350, 300, 0, 0, 0],
        ['data2', 130, 100, 140, 200, 150, 50],
      ],
      colors: {
        data1: themeColors.accent,
        data2: themeColors.primary,
        data3: themeColors.info,
      },
      types: {
        data1: 'area',
        data2: 'area-spline',
      },
    },
    size: {
      height: 280,
    },
    padding: {
      bottom: 20,
    },
    title: {
      text: 'Area Chart',
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
