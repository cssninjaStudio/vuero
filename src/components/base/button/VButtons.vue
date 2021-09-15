<script setup lang="ts">
export type VButtonsAlign = 'centered' | 'right'
export interface VButtonsProps {
  align?: VButtonsAlign
  addons?: boolean
}

const props = withDefaults(defineProps<VButtonsProps>(), {
  align: undefined,
})
</script>

<template>
  <div
    class="buttons"
    :class="[props.addons && 'has-addons', props.align && `is-${props.align}`]"
  >
    <slot></slot>
  </div>
</template>
