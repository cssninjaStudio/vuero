import type { Chart, ChartOptions } from 'billboard.js'
import { useThemeColors } from '/@src/composable/useThemeColors'
import { areaLineRange, areaSplineRange } from 'billboard.js'

export function useAreaLineRangeChart() {
  const themeColors = useThemeColors()

  const options = ref<ChartOptions>({
    data: {
      x: 'x',
      type: areaLineRange(),
      columns: [
        [
          'x',
          '2013-01-01',
          '2013-01-02',
          '2013-01-03',
          '2013-01-04',
          '2013-01-05',
          '2013-01-06',
        ],
        <any>[
          'data1',
          [150, 140, 110],
          [155, 130, 115],
          [160, 135, 120],
          [135, 120, 110],
          [180, 150, 130],
          [199, 160, 125],
        ],
        ['data2', 130, 340, 200, 500, 250, 350],
      ],
      colors: {
        data1: themeColors.accent,
        data2: themeColors.primary,
        data3: themeColors.info,
        data4: themeColors.purple,
      },
      types: {
        data1: 'area-line-range',
      },
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m-%d',
        },
      },
    },
    size: {
      height: 280,
    },
    padding: {
      bottom: 20,
    },
    title: {
      text: 'Area Range Chart',
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
        columns: <any>[
          [
            'data3',
            [220, 215, 205],
            [240, 225, 215],
            [260, 235, 225],
            [280, 245, 235],
            [270, 255, 225],
            [240, 225, 215],
          ],
        ],
        types: {
          data3: areaSplineRange(),
        },
      })
    }, 1000)

    setTimeout(() => {
      billboard.load({
        columns: <any>[
          [
            'data4',
            { high: 155, low: 145, mid: 150 },
            { high: 200, mid: 190, low: 150 },
            { high: 230, mid: 215, low: 200 },
            { high: 210, mid: 200, low: 180 },
            { high: 220, mid: 210, low: 190 },
            { high: 200, mid: 180, low: 160 },
          ],
        ],
        types: {
          data4: areaSplineRange(),
        },
      })
    }, 1500)
  }

  return {
    options,
    onReady,
  }
}
