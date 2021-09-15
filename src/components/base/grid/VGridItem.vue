<script setup lang="ts">
export type VGridJustifySelf = 'start' | 'end' | 'center' | 'stretch' | 'auto'
export type VGridAlignSelf = 'start' | 'end' | 'center' | 'stretch' | 'auto'

export interface VGridItemProps {
  gridColumnStart?: string | number
  gridColumnEnd?: string | number
  gridRowStart?: string | number
  gridRowEnd?: string | number
  justifySelf?: VGridJustifySelf
  alignSelf?: VGridAlignSelf
  placeSelf?: string
}

const props = withDefaults(defineProps<VGridItemProps>(), {
  gridColumnStart: 'auto',
  gridColumnEnd: 'auto',
  gridRowStart: 'auto',
  gridRowEnd: 'auto',
  justifySelf: 'auto',
  alignSelf: 'auto',
  placeSelf: 'auto',
})
</script>

<template>
  <div class="v-grid-item">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.v-grid-item {
  grid-column-start: v-bind('props.gridColumnStart');
  grid-column-end: v-bind('props.gridColumnEnd');
  grid-row-start: v-bind('props.gridRowStart');
  grid-row-end: v-bind('props.gridRowEnd');
  justify-self: v-bind('props.justifySelf');
  align-self: v-bind('props.alignSelf');
  place-self: v-bind('props.placeSelf');
}
</style>
