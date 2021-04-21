<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

type AvatarSize = undefined | 'small' | 'medium' | 'large' | 'big' | 'xl'
type AvatarColor =
  | undefined
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'h-purple'
  | 'h-orange'
  | 'h-blue'
  | 'h-green'
  | 'h-red'
  | 'h-yellow'
type AvatarDotColor =
  | undefined
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

const props = defineProps({
  picture: {
    type: String,
    default: undefined,
  },
  placeholder: {
    type: String,
    default: 'https://via.placeholder.com/50x50',
  },
  badge: {
    type: String,
    default: undefined,
  },
  initials: {
    type: String,
    default: '?',
  },
  size: {
    type: String as PropType<AvatarSize>,
    default: undefined,
    validator: (value: AvatarSize) => {
      // The value must match one of these strings
      if (
        [undefined, 'small', 'medium', 'large', 'big', 'xl'].indexOf(value) ===
        -1
      ) {
        console.warn(
          `V-Avatar: invalid "${value}" size. Should be small, medium, large, big, xl or undefined`
        )
        return false
      }

      return true
    },
  },
  color: {
    type: String as PropType<AvatarColor>,
    default: undefined,
    validator: (value: AvatarColor) => {
      // The value must match one of these strings
      if (
        [
          undefined,
          'primary',
          'success',
          'info',
          'warning',
          'danger',
          'h-purple',
          'h-orange',
          'h-blue',
          'h-green',
          'h-red',
          'h-yellow',
        ].indexOf(value) === -1
      ) {
        console.warn(
          `V-Avatar: invalid "${value}" color. Should be primary, success, info, warning, ` +
            `danger, h-purple, h-orange, h-blue, h-green, h-red, h-yellow or undefined`
        )
        return false
      }

      return true
    },
  },
  dotColor: {
    type: String as PropType<AvatarDotColor>,
    default: undefined,
    validator: (value: AvatarDotColor) => {
      // The value must match one of these strings
      if (
        [undefined, 'primary', 'info', 'warning', 'danger', 'grey'].indexOf(
          value
        ) === -1
      ) {
        console.warn(
          `V-Avatar: invalid "${value}" dotColor. Should be primary, info, warning, danger, grey or undefined`
        )
        return false
      }

      return true
    },
  },
  squared: {
    type: Boolean,
    default: false,
  },
  dot: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="v-avatar"
    :class="[
      size && `is-${size}`,
      dot && 'has-dot',
      dotColor && `dot-${dotColor}`,
      squared && dot && 'has-dot-squared',
    ]"
  >
    <img
      v-if="picture"
      class="avatar"
      :class="[squared && 'is-squared']"
      :src="picture"
      alt=""
      @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
    />
    <span
      v-else
      class="avatar is-fake"
      :class="[squared && 'is-squared', color && `is-${color}`]"
    >
      <span>{{ initials }}</span>
    </span>
    <img
      v-if="badge"
      class="badge"
      :src="badge"
      alt=""
      @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
    />
  </div>
</template>
