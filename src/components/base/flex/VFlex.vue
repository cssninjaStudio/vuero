<script setup lang="ts">
import { computed } from 'vue'

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
  | 'normal'
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
  | 'normal'
export type VFlexAlignContent =
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
  | 'normal'

export interface VFlexProps {
  inline?: boolean
  flexDirection?: VFlexDirection
  flexWrap?: VFlexWrap
  justifyContent?: VFlexJustifyContent
  alignItems?: VFlexAlignItems
  alignContent?: VFlexAlignContent
  rowGap?: string
  columnGap?: string
}

const props = withDefaults(defineProps<VFlexProps>(), {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'normal',
  alignItems: 'normal',
  alignContent: 'normal',
  rowGap: 'normal',
  columnGap: 'normal',
})
const display = computed(() => (props.inline ? 'inline-flex' : 'flex'))
</script>

<template>
  <div class="v-flex">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.v-flex {
  display: v-bind(display);
  flex-direction: v-bind('props.flexDirection');
  flex-wrap: v-bind('props.flexWrap');
  justify-content: v-bind('props.justifyContent');
  align-items: v-bind('props.alignItems');
  align-content: v-bind('props.alignContent');
  row-gap: v-bind('props.rowGap');
  column-gap: v-bind('props.columnGap');
}
</style>
