import type { Chart } from 'billboard.js'
import { themeColors } from '/@src/utils/themeColors'
import { gauge } from 'billboard.js'

export const options = {
  data: {
    columns: [['data', 91.4]],
    type: gauge(),
    onclick: (data: number, index: number) => {
      console.log('[gaugeSimple] onclick', data, index)
    },
    onover: (data: number, index: number) => {
      console.log('[gaugeSimple] onover', data, index)
    },
    onout: (data: number, index: number) => {
      console.log('[gaugeSimple] onout', data, index)
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
}

export const onReady = (billboard: Chart) => {
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
