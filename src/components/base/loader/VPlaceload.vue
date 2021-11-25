<script setup lang="ts">
import { CssUnitRe } from '/@src/utils/regex'

export type VPlaceloadProps = {
  width?: string
  height?: string
  mobileWidth?: string
  mobileHeight?: string
  disabled?: boolean
  centered?: boolean
}

const props = withDefaults(defineProps<VPlaceloadProps>(), {
  width: '100%',
  height: '10px',
  mobileWidth: undefined,
  mobileHeight: undefined,
})
const mobileWidthValue = props.mobileWidth ?? props.width
const mobileHeightValue = props.mobileHeight ?? props.height

if (props.width.match(CssUnitRe) === null) {
  console.warn(
    `VPlaceload: invalid "${props.width}" width. Should be a valid css unit value.`
  )
}
if (props.height.match(CssUnitRe) === null) {
  console.warn(
    `VPlaceload: invalid "${props.height}" height. Should be a valid css unit value.`
  )
}
if (mobileWidthValue.match(CssUnitRe) === null) {
  console.warn(
    `VPlaceload: invalid "${mobileWidthValue}" mobileWidth. Should be a valid css unit value.`
  )
}
if (mobileHeightValue.match(CssUnitRe) === null) {
  console.warn(
    `VPlaceload: invalid "${mobileHeightValue}" mobileHeight. Should be a valid css unit value.`
  )
}
</script>

<template>
  <div
    class="content-shape"
    :class="[props.centered && 'is-centered', !props.disabled && 'loads']"
  ></div>
</template>

<style lang="scss" scoped>
.content-shape {
  width: v-bind('props.width');
  height: v-bind('props.height');
}

.content-shape {
  &.is-grow-1 {
    flex-grow: 1;
  }

  &.is-grow-2 {
    flex-grow: 2;
  }

  &.is-grow-3 {
    flex-grow: 3;
  }

  &.is-grow-4 {
    flex-grow: 4;
  }

  &.mw-30 {
    max-width: 30%;
  }

  &.mw-60 {
    max-width: 60%;
  }

  &.mw-80 {
    max-width: 80%;
  }

  &.is-centered {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 767px) {
  .content-shape {
    width: v-bind(mobileWidthValue);
    height: v-bind(mobileHeightValue);
  }
}
</style>
