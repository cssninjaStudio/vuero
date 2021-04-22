<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, defineProps } from 'vue'

type IconButtonDark = undefined | '1' | '2' | '3' | '4' | '5' | '6'
type IconButtonColor =
  | undefined
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  to: {
    type: Object,
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  color: {
    type: String as PropType<IconButtonColor>,
    default: undefined,
    validator: (value: IconButtonColor) => {
      // The value must match one of these strings
      if (
        [
          undefined,
          'primary',
          'info',
          'success',
          'warning',
          'danger',
          'white',
        ].indexOf(value) === -1
      ) {
        console.warn(
          `V-IconButton: invalid "${value}" color. Should be primary, info, success, warning, danger, white or undefined`
        )
        return false
      }

      return true
    },
  },
  dark: {
    type: String as PropType<IconButtonDark>,
    default: undefined,
    validator: (value: IconButtonDark) => {
      if (!value) return true
      // The value must match one of these strings
      if (['1', '2', '3', '4', '5', '6'].indexOf(value) === -1) {
        console.warn(
          `V-IconButton: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`
        )
        return false
      }

      return true
    },
  },
  circle: {
    type: Boolean,
    default: false,
  },
  bold: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  raised: {
    type: Boolean,
    default: false,
  },
  elevated: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  darkOutlined: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})
const classes = computed(() => {
  return [
    props.disabled && 'is-disabled',
    props.circle && 'is-circle',
    props.bold && 'is-bold',
    props.outlined && 'is-outlined',
    props.raised && 'is-raised',
    props.dark && `is-dark-bg-${props.dark}`,
    props.darkOutlined && 'is-dark-outlined',
    props.elevated && 'is-elevated',
    props.loading && 'is-loading',
    props.color && `is-${props.color}`,
    props.light && 'is-light',
  ]
})
</script>

<template>
  <RouterLink v-if="to" :to="to" class="button" :class="classes">
    <span v-if="isIconify" class="icon">
      <i class="iconify" :data-icon="icon"></i>
    </span>
    <span v-else-if="icon" class="icon">
      <i :class="icon"></i>
    </span>
  </RouterLink>
  <a v-else-if="href" :href="href" :class="classes">
    <span v-if="isIconify" class="icon">
      <i class="iconify" :data-icon="icon"></i>
    </span>
    <span v-else-if="icon" class="icon">
      <i :class="icon"></i>
    </span>
  </a>
  <button v-else class="button" :class="classes" :disabled="disabled">
    <span v-if="isIconify" class="icon">
      <i class="iconify" :data-icon="icon"></i>
    </span>
    <span v-else-if="icon" class="icon">
      <i :class="icon"></i>
    </span>
  </button>
</template>
