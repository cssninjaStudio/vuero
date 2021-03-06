import type { Chart } from 'billboard.js'
import { themeColors } from '/@src/state/themeColors'
import { gauge } from 'billboard.js'
import { ref } from 'vue'

export const gaugeSimpleOptions = ref({
  data: {
    columns: [['data', 91.4]],
    type: gauge(),
    onclick: function (d, i) {
      console.log('onclick', d, i)
    },
    onover: function (d, i) {
      console.log('onover', d, i)
    },
    onout: function (d, i) {
      console.log('onout', d, i)
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
    position: 'top-left',
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

export const onGaugeSimpleReady = (billboard: Chart) => {
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
