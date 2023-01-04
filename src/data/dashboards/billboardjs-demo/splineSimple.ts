import type { ChartOptions } from 'billboard.js'
import { useThemeColors } from '/@src/composable/useThemeColors'
import { spline } from 'billboard.js'

export function useSplineSimple() {
  const themeColors = useThemeColors()
  const options = ref<ChartOptions>({
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50],
      ],
      colors: {
        data1: themeColors.accent,
        data2: themeColors.primary,
        data3: themeColors.orange,
        data4: themeColors.purple,
      },
      type: spline(),
    },
    size: {
      height: 280,
    },
    padding: {
      bottom: 20,
    },
    title: {
      text: 'Spline Chart',
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
