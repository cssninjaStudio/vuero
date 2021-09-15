<script setup lang="ts">
export type VFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type VFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'
export type VFlexJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
export type VFlexAlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'baseline'
  | 'stretch'
export type VFlexAlignContent =
  | 'normal'
  | 'flex-start'
  | 'flex-end'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export interface VFlexProps {
  direction?: VFlexDirection
  wrap?: VFlexWrap
  justifyContent?: VFlexJustifyContent
  alignItems?: VFlexAlignItems
  alignContent?: VFlexAlignContent
  gap?: string
  rowGap?: string
  columnGap?: string
}

const props = withDefaults(defineProps<VFlexProps>(), {
  direction: 'row',
  wrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'normal',
  gap: '0',
  rowGap: '0',
  columnGap: '0',
})
</script>

<template>
  <div class="v-flex">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.v-flex {
  display: flex;
  flex-direction: v-bind('props.direction');
  flex-wrap: v-bind('props.wrap');
  justify-content: v-bind('props.justifyContent');
  align-items: v-bind('props.alignItems');
  align-content: v-bind('props.alignContent');
  gap: v-bind('props.gap');
  row-gap: v-bind('props.rowGap');
  column-gap: v-bind('props.columnGap');
}
</style>
