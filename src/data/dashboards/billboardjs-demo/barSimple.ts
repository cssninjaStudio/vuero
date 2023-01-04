import type { Chart, ChartOptions } from 'billboard.js'
import { useThemeColors } from '/@src/composable/useThemeColors'
import { bar } from 'billboard.js'

export function useBarSimple() {
  const themeColors = useThemeColors()
  const options = ref<ChartOptions>({
    data: {
      type: bar(),
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
    },
    bar: {
      width: {
        ratio: 0.5,
      },
    },
    size: {
      height: 280,
    },
    padding: {
      bottom: 20,
    },
    title: {
      text: 'Bar Chart',
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
        columns: [['data3', 130, -150, 200, 300, -200, 100]],
      })
    }, 1000)
  }

  return {
    options,
    onReady,
  }
}
