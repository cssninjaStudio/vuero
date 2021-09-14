<script setup lang="ts">
import { CssUnitRe } from '/@src/utils/regex'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    disabled?: boolean
    centered?: boolean
  }>(),
  {
    width: '100%',
    height: '10px',
  }
)

if (props.width.match(CssUnitRe) === null) {
  console.warn(
    `V-Placeload: invalid "${props.width}" width. Should be a valid css unit value.`
  )
}
if (props.height.match(CssUnitRe) === null) {
  console.warn(
    `V-Placeload: invalid "${props.height}" height. Should be a valid css unit value.`
  )
}
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
