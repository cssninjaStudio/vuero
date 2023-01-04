import type { Chart, ChartOptions } from 'billboard.js'
import { useThemeColors } from '/@src/composable/useThemeColors'
import { bubble } from 'billboard.js'

export function useBubbleSimple() {
  const themeColors = useThemeColors()
  const options = ref<ChartOptions>({
    data: {
      columns: [
        ['data1', 30, 190, 200, 110, 150, 160, 50, 80, 55, 220],
        ['data2', 130, 100, 10, 143, 80, 50, 200, 123, 185, 98],
        ['data3', 160, 153, 85, 80, 250, 120, 5, 84, 99, 175],
      ],
      colors: {
        data1: themeColors.accent,
        data2: themeColors.primary,
        data3: themeColors.info,
        data4: themeColors.purple,
      },
      type: bubble(),
      labels: true,
    },
    bubble: {
      maxR: 50,
    },
    axis: {
      x: {
        type: 'category',
      },
      y: {
        max: 450,
      },
    },
    size: {
      height: 280,
    },
    padding: {
      bottom: 20,
    },
    title: {
      text: 'Bubble Chart',
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
        columns: [['data1', 100, 50, 150, 200, 100, 350, 58, 210, 80, 126]],
      })
    }, 1000)

    setTimeout(() => {
      billboard.load({
        columns: [['data2', 305, 350, 55, 25, 335, 29, 258, 310, 180, 226]],
      })
    }, 2000)

    setTimeout(() => {
      billboard.load({
        columns: [['data3', 223, 121, 259, 247, 53, 159, 95, 111, 307, 337]],
      })
    }, 3000)
  }

  return {
    options,
    onReady,
  }
}
