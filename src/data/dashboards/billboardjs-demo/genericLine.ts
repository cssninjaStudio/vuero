import type { Chart, ChartOptions } from 'billboard.js'
import { useThemeColors } from '/@src/composable/useThemeColors'
import { line } from 'billboard.js'

export function useGenericLine() {
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
    },
    size: {
      height: 280,
    },
    padding: {
      bottom: 20,
    },
    title: {
      text: 'Line Chart',
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

  const onReady = (billboard: Chart) => {
    setTimeout(() => {
      billboard.load({
        columns: [['data1', 230, 190, 300, 500, 300, 400]],
      })
    }, 2000)

    setTimeout(() => {
      billboard.load({
        columns: [['data3', 130, 150, 200, 300, 200, 100]],
      })
    }, 6500)
  }

  return {
    options,
    onReady,
  }
}
