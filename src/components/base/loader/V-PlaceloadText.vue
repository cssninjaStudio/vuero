<script lang="ts">
const CssUnitRe =
  /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/
</script>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '100%',
    validator: (value: String) => {
      if (value.match(CssUnitRe) === null) {
        console.warn(
          `V-PlaceloadText: invalid "${value}" placeload. Should be a valid css unit value.`
        )
      }

      return true
    },
  },
  lastLineWidth: {
    type: String,
    default: '100%',
    validator: (value: String) => {
      if (value.match(CssUnitRe) === null) {
        console.warn(
          `V-PlaceloadText: invalid "${value}" placeload. Should be a valid css unit value.`
        )
      }

      return true
    },
  },
  lines: {
    type: Number,
    default: 2,
  },
  centered: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="content-shape-group">
    <V-Placeload
      :width="props.width"
      v-for="line of props.lines - 1"
      :key="line"
      :centered="props.centered"
    />
    <V-Placeload :width="props.lastLineWidth" :centered="props.centered" />
  </div>
</template>
