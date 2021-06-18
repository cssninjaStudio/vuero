<script lang="ts">
const CssUnitRe =
  /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/
</script>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, computed } from 'vue'

type ButtonSize = undefined | 'big' | 'huge'
type ButtonColor =
  | undefined
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
type ButtonDark = undefined | '1' | '2' | '3' | '4' | '5' | '6'

const props = defineProps({
  to: {
    type: [Object, String],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  iconCaret: {
    type: String,
    default: undefined,
  },
  placeload: {
    type: String,
    default: undefined,
    validator: (value: string) => {
      if (value.match(CssUnitRe) === null) {
        console.warn(
          `V-Button: invalid "${value}" placeload. Should be a valid css unit value.`
        )
      }

      return true
    },
  },
  color: {
    type: String as PropType<ButtonColor>,
    default: undefined,
    validator: (value: ButtonColor) => {
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
          `V-Button: invalid "${value}" color. Should be primary, info, success, warning, danger, white or undefined`
        )
        return false
      }

      return true
    },
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: undefined,
    validator: (value: ButtonSize) => {
      // The value must match one of these strings
      if ([undefined, 'big', 'huge'].indexOf(value) === -1) {
        console.warn(
          `V-Button: invalid "${value}" size. Should be big, huge or undefined`
        )
        return false
      }

      return true
    },
  },
  dark: {
    type: String as PropType<ButtonDark>,
    default: undefined,
    validator: (value: ButtonDark) => {
      // The value must match one of these strings
      if ([undefined, '1', '2', '3', '4', '5', '6'].indexOf(value) === -1) {
        console.warn(
          `V-Button: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`
        )
        return false
      }

      return true
    },
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  bold: {
    type: Boolean,
    default: false,
  },
  fullwidth: {
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
  lower: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const isIconIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})
const isCaretIconify = computed(() => {
  return props.iconCaret && props.iconCaret.indexOf(':') !== -1
})
const classes = computed(() => {
  return [
    'button',
    'v-button',
    props.disabled && 'is-disabled',
    props.rounded && 'is-rounded',
    props.bold && 'is-bold',
    props.size && `is-${props.size}`,
    props.lower && 'is-lower',
    props.fullwidth && 'is-fullwidth',
    props.outlined && 'is-outlined',
    props.dark && `is-dark-bg-${props.dark}`,
    props.darkOutlined && 'is-dark-outlined',
    props.raised && 'is-raised',
    props.elevated && 'is-elevated',
    props.loading && !props.placeload && 'is-loading',
    props.color && `is-${props.color}`,
    props.light && 'is-light',
  ]
})
</script>

<template>
  <RouterLink
    :aria-hidden="props.placeload && 'true'"
    v-if="to"
    :to="to"
    :class="classes"
  >
    <span v-if="isIconIconify" class="icon">
      <i aria-hidden="true" class="iconify" :data-icon="icon"></i>
    </span>
    <span v-else-if="icon" class="icon">
      <i aria-hidden="true" :class="icon"></i>
    </span>
    <V-Placeload v-if="props.placeload" :width="props.placeload" />
    <span v-else>
      <slot></slot>
    </span>
    <span v-if="isCaretIconify" class="caret">
      <i aria-hidden="true" class="iconify" :data-icon="iconCaret"></i>
    </span>
    <span v-else-if="iconCaret" class="caret">
      <i aria-hidden="true" :class="iconCaret"></i>
    </span>
  </RouterLink>
  <a
    :aria-hidden="props.placeload && 'true'"
    v-else-if="href"
    :href="href"
    :class="classes"
  >
    <span v-if="isIconIconify" class="icon">
      <i aria-hidden="true" class="iconify" :data-icon="icon"></i>
    </span>
    <span v-else-if="icon" class="icon">
      <i aria-hidden="true" :class="icon"></i>
    </span>
    <V-Placeload v-if="props.placeload" :width="props.placeload" />
    <span v-else>
      <slot></slot>
    </span>
    <span v-if="isCaretIconify" class="caret">
      <i aria-hidden="true" class="iconify" :data-icon="iconCaret"></i>
    </span>
    <span v-else-if="iconCaret" class="caret">
      <i aria-hidden="true" :class="iconCaret"></i>
    </span>
  </a>
  <button
    :aria-hidden="props.placeload && 'true'"
    v-else
    :class="classes"
    :disabled="disabled"
  >
    <span v-if="isIconIconify" class="icon">
      <i aria-hidden="true" class="iconify" :data-icon="icon"></i>
    </span>
    <span v-else-if="icon" class="icon">
      <i aria-hidden="true" :class="icon"></i>
    </span>

    <V-Placeload v-if="props.placeload" :width="props.placeload" />
    <span v-else>
      <slot></slot>
    </span>
    <span v-if="isCaretIconify" class="caret">
      <i aria-hidden="true" class="iconify" :data-icon="iconCaret"></i>
    </span>
    <span v-else-if="iconCaret" class="caret">
      <i aria-hidden="true" :class="iconCaret"></i>
    </span>
  </button>
</template>
