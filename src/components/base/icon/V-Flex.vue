<script setup lang="ts">
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'
export type FlexJustifyContent =
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
export type FlexAlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'baseline'
  | 'stretch'
export type FlexAlignContent =
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

const props = withDefaults(
  defineProps<{
    direction?: FlexDirection
    wrap?: FlexWrap
    justifyContent?: FlexJustifyContent
    alignItems?: FlexAlignItems
    alignContent?: FlexAlignContent
    gap?: string
    rowGap?: string
    columnGap?: string
  }>(),
  {
    direction: 'row',
    wrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'normal',
    gap: '0',
    rowGap: '0',
    columnGap: '0',
  }
)
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
