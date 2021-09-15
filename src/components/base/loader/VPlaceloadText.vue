<script setup lang="ts">
import { CssUnitRe } from '/@src/utils/regex'

export interface VPlaceloadTextProps {
  width?: string
  lastLineWidth?: string
  lines?: number
  disabled?: boolean
  centered?: boolean
}

const props = withDefaults(defineProps<VPlaceloadTextProps>(), {
  width: '100%',
  lastLineWidth: '100%',
  lines: 2,
})
if (props.width.match(CssUnitRe) === null) {
  console.warn(
    `VPlaceloadText: invalid "${props.width}" width. Should be a valid css unit value.`
  )
}
if (props.lastLineWidth.match(CssUnitRe) === null) {
  console.warn(
    `VPlaceloadText: invalid "${props.lastLineWidth}" lastLineWidth. Should be a valid css unit value.`
  )
}
</script>

<template>
  <div class="content-shape-group">
    <VPlaceload
      v-for="line of props.lines - 1"
      :key="line"
      :width="props.width"
      :centered="props.centered"
    />
    <VPlaceload :width="props.lastLineWidth" :centered="props.centered" />
  </div>
</template>
