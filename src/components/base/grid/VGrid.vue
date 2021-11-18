<script setup lang="ts">
import { computed } from 'vue'

export type VGridJustifyItems = 'start' | 'end' | 'center' | 'stretch' | 'initial'
export type VGridAlignItems = 'start' | 'end' | 'center' | 'stretch' | 'initial'
export type VGridJustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'initial'
export type VGridAlignContent =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'initial'
export type VGridAutoFlow = 'row' | 'column' | 'row dense' | 'column dense' | 'initial'

export interface VGridProps {
  inline?: boolean
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridTemplateAreas?: string
  columnGap?: string
  rowGap?: string
  justifyItems?: VGridJustifyItems
  alignItems?: VGridAlignItems
  justifyContent?: VGridJustifyContent
  alignContent?: VGridAlignContent
  placeContent?: string
  gridAutoColumns?: string
  gridAutoRows?: string
  gridAutoFlow?: VGridAutoFlow
}
const props = withDefaults(defineProps<VGridProps>(), {
  gridTemplateColumns: 'none',
  gridTemplateRows: 'none',
  gridTemplateAreas: 'none',
  columnGap: 'normal',
  rowGap: 'normal',
  justifyItems: 'initial',
  alignItems: 'initial',
  justifyContent: 'initial',
  alignContent: 'initial',
  placeContent: 'normal',
  gridAutoColumns: 'auto',
  gridAutoRows: 'auto',
  gridAutoFlow: 'row',
})
const display = computed(() => (props.inline ? 'inline-grid' : 'grid'))
</script>

<template>
  <div class="v-grid">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.v-grid {
  display: v-bind(display);
  grid-template-columns: v-bind('props.gridTemplateColumns');
  grid-template-rows: v-bind('props.gridTemplateRows');
  grid-template-areas: v-bind('props.gridTemplateAreas');
  column-gap: v-bind('props.columnGap');
  row-gap: v-bind('props.rowGap');
  justify-items: v-bind('props.justifyItems');
  align-items: v-bind('props.alignItems');
  justify-content: v-bind('props.justifyContent');
  align-content: v-bind('props.alignContent');
  place-content: v-bind('props.placeContent');
  grid-auto-columns: v-bind('props.gridAutoColumns');
  grid-auto-rows: v-bind('props.gridAutoRows');
  grid-auto-flow: v-bind('props.gridAutoFlow');
}
</style>
