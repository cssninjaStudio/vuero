<script setup lang="ts">
import { watchPostEffect, computed, ref } from 'vue'

import type { PeityOptions, PeityType } from '/@src/utils/peity'
import { drawBar, drawLine, drawPie } from '/@src/utils/peity'

export interface VPeityProps {
  values: number[]
  type: PeityType
  min?: number
  max?: number
  radius?: number
  innerRadius?: number
  height?: number
  width?: number
  padding?: number
  stroke?: string
  strokeWidth?: number
  fill?: string[]
}

const props = withDefaults(defineProps<VPeityProps>(), {
  type: 'line',
  radius: 8,
  padding: 0.1,
  innerRadius: 5,
  min: undefined,
  max: undefined,
  height: 16,
  width: 16,
  stroke: undefined,
  strokeWidth: 1,
  fill: undefined,
  values: () => [],
})

const svgElement = ref<HTMLElement>()
const svgHeight = computed(() => {
  const height = props.height || 16

  if (props.type === 'pie' || props.type === 'donut') {
    const diameter = props.radius * 2
    return height || diameter
  }

  return height
})
const svgWidth = computed(() => {
  const width = props.width || 16

  if (props.type === 'pie' || props.type === 'donut') {
    const diameter = props.radius * 2
    return width || diameter
  }

  return width
})

watchPostEffect(() => {
  if (!svgElement.value) {
    return
  }

  const element = svgElement.value
  element.innerHTML = ''

  const opts: PeityOptions = {
    type: props.type,
    height: props.height,
    width: props.width,
    fill: (idx: number): string => {
      const f = props.fill ?? []
      return f[idx % f.length]
    },
  }

  switch (props.type) {
    case 'bar':
      opts.min = props.min
      opts.padding = props.padding
      drawBar(element, props.values, opts)
      break
    case 'line':
      opts.min = props.min
      opts.stroke = props.stroke
      opts.strokeWidth = props.strokeWidth
      drawLine(element, props.values, opts)
      break
    case 'pie':
      opts.radius = props.radius
      opts.innerRadius = props.innerRadius
      drawPie(element, props.values, opts)
      break
    case 'donut':
      opts.radius = props.radius
      opts.innerRadius = props.innerRadius
      drawPie(element, props.values, opts)
      break
  }
})
</script>

<template>
  <svg
    ref="svgElement"
    xmlns="http://www.w3.org/2000/svg"
    class="peity"
    :height="svgHeight"
    :width="svgWidth"
  ></svg>
</template>
