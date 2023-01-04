import type { Chart, ChartOptions } from 'billboard.js'
import { useThemeColors } from '/@src/composable/useThemeColors'
import { bar } from 'billboard.js'

export function useBarStacked() {
  const themeColors = useThemeColors()
  const options = ref<ChartOptions>({
    data: {
      type: bar(),
      columns: [
        ['data1', -30, 200, 200, 400, -150, 250],
        ['data2', 130, 100, -100, 200, -150, 50],
        ['data3', -230, 200, 200, -300, 250, 250],
      ],
      colors: {
        data1: themeColors.accent,
        data2: themeColors.primary,
        data3: themeColors.purple,
      },
      groups: [['data1', 'data2']],
    },
    grid: {
      y: {
        lines: [
          {
            value: 0,
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
      text: 'Stacked Bar Chart',
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
      billboard.groups([['data1', 'data2', 'data3']])
    }, 1000)

    setTimeout(() => {
      billboard.load({
        columns: [['data4', 100, -50, 150, 200, -300, -100]],
      })
    }, 1500)

    setTimeout(() => {
      billboard.groups([['data1', 'data2', 'data3', 'data4']])
    }, 2000)
  }

  return {
    options,
    onReady,
  }
}
