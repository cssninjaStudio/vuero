<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, defineProps } from 'vue'

type SnackIconColor =
  | undefined
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
type SnackIconSize = undefined | 'small'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String as PropType<SnackIconColor>,
    default: undefined,
    validator: function (value: SnackIconColor) {
      // The value must match one of these strings
      if (
        [undefined, 'primary', 'success', 'info', 'warning', 'danger'].indexOf(
          value
        ) === -1
      ) {
        console.warn(
          `V-SnackIcon: invalid "${value}" color. Should be primary, success, info, warning, danger or undefined`
        )
        return false
      }

      return true
    },
  },
  size: {
    type: String as PropType<SnackIconSize>,
    default: undefined,
    validator: function (value: SnackIconSize) {
      // The value must match one of these strings
      if ([undefined, 'small'].indexOf(value) === -1) {
        console.warn(
          `V-SnackIcon: invalid "${value}" size. Should be small or undefined`
        )
        return false
      }

      return true
    },
  },
  solid: {
    type: Boolean,
    default: false,
  },
  white: {
    type: Boolean,
    default: false,
  },
})

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})
</script>

<template>
  <div class="snack" :class="[white && 'is-white', size && `is-${size}`]">
    <div
      class="snack-media is-icon"
      :class="[color && `is-${color}`, solid && `is-solid`]"
    >
      <i v-if="isIconify" class="iconify snack-icon" :data-icon="icon"></i>
      <i v-else class="snack-icon" :class="icon"></i>
    </div>
    <span class="snack-text">{{ title }}</span>
    <span class="snack-action">
      <slot></slot>
    </span>
  </div>
</template>
