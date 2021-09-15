<script setup lang="ts">
export type VFlexItemAlignSelf =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch'

export interface VFlexItemProps {
  order?: string | number
  flexGrow?: string | number
  flexShrink?: number
  flexBasis?: string | 'auto'
  alignSelf?: VFlexItemAlignSelf
}

const props = withDefaults(defineProps<VFlexItemProps>(), {
  order: 0,
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',
  alignSelf: 'auto',
})
</script>

<template>
  <div class="v-flex-item">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.v-flex-item {
  order: v-bind('props.order');
  flex-grow: v-bind('props.flexGrow');
  flex-shrink: v-bind('props.flexShrink');
  flex-basis: v-bind('props.flexBasis');
  align-self: v-bind('props.alignSelf');
}
</style>
