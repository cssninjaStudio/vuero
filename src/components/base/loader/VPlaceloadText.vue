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

<style lang="scss">
.content-shape-group {
  width: 100%;
  max-width: 100%;

  .content-shape {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  &.is-grow-1 {
    flex-grow: 1;
  }

  &.is-grow-2 {
    flex-grow: 2;
  }

  &.is-grow-3 {
    flex-grow: 3;
  }

  &.is-grow-4 {
    flex-grow: 4;
  }

  &.mw-30 {
    max-width: 30%;
  }

  &.mw-60 {
    max-width: 60%;
  }

  &.mw-80 {
    max-width: 80%;
  }

  &.is-centered {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
