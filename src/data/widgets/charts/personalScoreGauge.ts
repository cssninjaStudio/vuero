import type { Chart } from 'billboard.js'
import { useThemeColors } from '/@src/composable/useThemeColors'
import { gauge } from 'billboard.js'

export function usePersonalScoreGauge() {
  const themeColors = useThemeColors()

  const personalScoreGaugeOptions = shallowRef({
    data: {
      columns: [['data', 91.4]],
      type: gauge(),
      /*
      onclick: function (data: any, event: any) {
        console.log("onclick", d, i);
      },
      onover: function (data: any, event: any) {
        console.log("onover", d, i);
      },
      onout: function (data: any, event: any) {
        console.log("onout", d, i);
      }
      */
    },
    gauge: {},
    color: {
      pattern: [
        themeColors.accent,
        themeColors.info,
        themeColors.orange,
        themeColors.primary,
      ],
      threshold: {
        values: [30, 60, 90, 100],
      },
    },
    size: {
      height: 120,
    },
    padding: {
      bottom: 20,
    },
    legend: {
      show: false,
      position: 'inset',
    },
  })

  // For demo purpose
  const onPersonalScoreGaugeReady = (billboard: Chart) => {
    setTimeout(function () {
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
    personalScoreGaugeOptions,
    onPersonalScoreGaugeReady,
  }
}
