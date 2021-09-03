<script setup lang="ts">
import type { PropType } from 'vue'

type IconWrapsAlign = undefined | 'centered' | 'right'

const props = defineProps({
  addons: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String as PropType<IconWrapsAlign>,
    default: undefined,
    validator: (value: IconWrapsAlign) => {
      // The value must match one of these strings
      if ([undefined, 'centered', 'right'].indexOf(value) === -1) {
        console.warn(
          `V-IconWraps: invalid "${value}" align. Should be centered, right or undefined`
        )
        return false
      }

      return true
    },
  },
})
</script>

<template>
  <div
    class="icon-wraps"
    :class="[props.addons && 'has-addons', props.align && `is-${props.align}`]"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.icon-wraps {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  &.is-centered {
    justify-content: center;
  }
  &.is-right {
    justify-content: flex-end;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: -0.5rem;
  }

  &::v-deep(.icon-wrap:not(:last-child):not(.is-fullwidth)) {
    margin-right: 0.3rem;
  }
}
</style>
