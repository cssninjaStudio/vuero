<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, defineProps } from 'vue'

type SnackColor =
  | undefined
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
type SnackSize = undefined | 'small'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: undefined,
  },
  image: {
    type: String,
    default: undefined,
  },
  placeholder: {
    type: String,
    default: 'https://via.placeholder.com/50x50',
  },
  color: {
    type: String as PropType<SnackColor>,
    default: undefined,
    validator: (value: SnackColor) => {
      // The value must match one of these strings
      if (
        [undefined, 'primary', 'success', 'info', 'warning', 'danger'].indexOf(
          value
        ) === -1
      ) {
        console.warn(
          `V-Snack: invalid "${value}" color. Should be primary, success, info, warning, danger or undefined`
        )
        return false
      }

      return true
    },
  },
  size: {
    type: String as PropType<SnackSize>,
    default: undefined,
    validator: (value: SnackSize) => {
      // The value must match one of these strings
      if ([undefined, 'small'].indexOf(value) === -1) {
        console.warn(
          `V-Snack: invalid "${value}" size. Should be small or undefined`
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
      v-if="icon"
      class="snack-media is-icon"
      :class="[color && `is-${color}`, solid && `is-solid`]"
    >
      <i v-if="isIconify" class="iconify snack-icon" :data-icon="icon"></i>
      <i v-else class="snack-icon" :class="icon"></i>
    </div>
    <div v-else-if="image" class="snack-media">
      <img
        class="avatar"
        :src="image"
        alt=""
        @error.once="$event.target.src = placeholder"
      />
    </div>
    <span class="snack-text">{{ title }}</span>
    <span class="snack-action">
      <slot></slot>
    </span>
  </div>
</template>
