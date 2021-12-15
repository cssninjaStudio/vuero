import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()
import type { Chart } from 'billboard.js'
import { gauge } from 'billboard.js'
import { ref } from 'vue'

export const progressGaugeOptions = ref({
  data: {
    columns: [['data', 91.4]],
    type: gauge(),
  },
  gauge: {
    label: {
      // return empty string
      extents: () => '',
    },
  },
  color: {
    pattern: [
      themeColors.accent,
      themeColors.info,
      themeColors.orange,
      themeColors.green,
    ],
    threshold: {
      values: [30, 60, 90, 100],
    },
  },
  size: {
    height: 90,
    width: 90,
  },
  padding: {
    bottom: 0,
  },
  legend: {
    show: false,
    position: 'inset',
  },
})

// For demo purpose
export const onprogressGaugeReady = (billboard: Chart) => {
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
