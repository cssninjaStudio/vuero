<script setup lang="ts">
type ButtonsAlign = 'centered' | 'right'

const props = withDefaults(
  defineProps<{
    align?: ButtonsAlign
    addons?: boolean
  }>(),
  {
    align: undefined,
  }
)
</script>

<template>
  <div
    class="buttons"
    :class="[props.addons && 'has-addons', props.align && `is-${props.align}`]"
  >
    <slot></slot>
  </div>
</template>
