import type { Chart, ChartOptions, DataItem } from 'billboard.js'
import { useThemeColors } from '/@src/composable/useThemeColors'
import { gauge } from 'billboard.js'

export function useGaugeSimple() {
  const themeColors = useThemeColors()
  const options = ref<ChartOptions>({
    data: {
      columns: [['data', 91.4]],
      type: gauge(),
      onclick(this: Chart, d: DataItem, element: SVGAElement) {
        console.log('[gaugeSimple] onclick', d, element)
      },
      onover(this: Chart, d: DataItem, element?: SVGAElement) {
        console.log('[gaugeSimple] onover', d, element)
      },
      onout(this: Chart, d: DataItem, element?: SVGAElement) {
        console.log('[gaugeSimple] onout', d, element)
      },
    },
    gauge: {},
    color: {
      pattern: [
        themeColors.accent,
        themeColors.info,
        themeColors.primary,
        themeColors.purple,
      ],
      threshold: {
        values: [30, 60, 90, 100],
      },
    },
    size: {
      height: 280,
    },
    padding: {
      bottom: 20,
    },
    title: {
      text: 'Gauge Chart',
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
        columns: [['data', 10]],
      })
    }, 1000)

    setTimeout(function () {
      billboard.load({
        columns: [['data', 50]],
      })
    }, 2000)

    setTimeout(function () {
      billboard.load({
        columns: [['data', 70]],
      })
    }, 3000)

    setTimeout(function () {
      billboard.load({
        columns: [['data', 0]],
      })
    }, 4000)

    setTimeout(function () {
      billboard.load({
        columns: [['data', 100]],
      })
    }, 5000)
  }

  return {
    options,
    onReady,
  }
}
