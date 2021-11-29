<script setup lang="ts">
import { CssUnitRe } from '/@src/utils/regex'

export interface VTextEllipsisProps {
  width?: string
  mobileWidth?: string
}

const props = withDefaults(defineProps<VTextEllipsisProps>(), {
  width: '150px',
  mobileWidth: undefined,
})
const mobileWidthValue = props.mobileWidth ?? props.width

if (props.width.match(CssUnitRe) === null) {
  console.warn(
    `VTextEllipsis: invalid "${props.width}" width. Should be a valid css unit value.`
  )
}
if (mobileWidthValue.match(CssUnitRe) === null) {
  console.warn(
    `VTextEllipsis: invalid "${mobileWidthValue}" mobileWidth. Should be a valid css unit value.`
  )
}
</script>

<template>
  <span class="text-ellipsis"><slot></slot></span>
</template>

<style lang="scss" scoped>
.text-ellipsis {
  max-width: v-bind('props.width');
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@media (max-width: 767px) {
  .text-ellipsis {
    max-width: v-bind('mobileWidthValue');
  }
}
</style>
