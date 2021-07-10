<script lang="ts">
const CssUnitRe =
  /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/
</script>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: '100%',
    validator: (value: String) => {
      if (value.match(CssUnitRe) === null) {
        console.warn(
          `V-Placeload: invalid "${value}" width. Should be a valid css unit value.`
        )
      }

      return true
    },
  },
  height: {
    type: String,
    default: '10px',
    validator: (value: String) => {
      if (value.match(CssUnitRe) === null) {
        console.warn(
          `V-Placeload: invalid "${value}" height. Should be a valid css unit value.`
        )
      }

      return true
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  centered: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="content-shape"
    :class="[props.centered && 'is-centered', !props.disabled && 'loads']"
  ></div>
</template>

<style scoped>
.content-shape {
  width: v-bind('props.width');
  height: v-bind(height);
}
</style>
