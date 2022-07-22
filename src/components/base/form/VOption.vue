<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

const vFieldContext = reactive(
  useVFieldContext({
    create: false,
    help: 'VOption',
  })
)
</script>

<template>
  <option>
    <slot v-bind="vFieldContext" />
  </option>
</template>

<style lang="scss">
option[disabled] {
  pointer-events: none;
  opacity: 0.4;
  cursor: default !important;
}
</style>
