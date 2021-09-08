<script setup lang="ts">
import { CssUnitRe } from '/@src/utils/regex'

const props = withDefaults(
  defineProps<{
    width?: string
    lastLineWidth?: string
    lines?: number
    disabled?: boolean
    centered?: boolean
  }>(),
  {
    width: '100%',
    lastLineWidth: '100%',
    lines: 2,
  }
)
if (props.width.match(CssUnitRe) === null) {
  console.warn(
    `V-PlaceloadText: invalid "${value}" width. Should be a valid css unit value.`
  )
}
if (props.lastLineWidth.match(CssUnitRe) === null) {
  console.warn(
    `V-PlaceloadText: invalid "${value}" lastLineWidth. Should be a valid css unit value.`
  )
}
</script>

<template>
  <div class="content-shape-group">
    <V-Placeload
      v-for="line of props.lines - 1"
      :key="line"
      :width="props.width"
      :centered="props.centered"
    />
    <V-Placeload :width="props.lastLineWidth" :centered="props.centered" />
  </div>
</template>
