<script setup lang="ts">
import { useViaPlaceholderError } from '/@src/composable/useViaPlaceholderError'

export type VAvatarSize = 'small' | 'medium' | 'large' | 'big' | 'xl'
export type VAvatarColor =
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
export type VAvatarDotColor =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface VAvatarProps {
  picture?: string
  pictureDark?: string
  placeholder?: string
  badge?: string
  initials?: string
  size?: VAvatarSize
  color?: VAvatarColor
  dotColor?: VAvatarDotColor
  squared?: boolean
  dot?: boolean
}

const props = withDefaults(defineProps<VAvatarProps>(), {
  picture: undefined,
  pictureDark: undefined,
  placeholder: 'https://via.placeholder.com/50x50',
  initials: '?',
  badge: undefined,
  size: undefined,
  color: undefined,
  dotColor: undefined,
})
</script>

<template>
  <div
    class="v-avatar"
    :class="[
      size && `is-${props.size}`,
      dot && 'has-dot',
      dotColor && `dot-${props.dotColor}`,
      squared && dot && 'has-dot-squared',
    ]"
  >
    <slot name="avatar">
      <img
        v-if="props.picture"
        class="avatar"
        :class="[
          props.squared && 'is-squared',
          props.pictureDark && 'light-image',
        ]"
        :src="props.picture"
        alt=""
        @error.once="(event) => useViaPlaceholderError(event, '150x150')"
      />
      <span
        v-else
        class="avatar is-fake"
        :class="[
          props.squared && 'is-squared',
          props.color && `is-${props.color}`,
        ]"
      >
        <span>{{ props.initials }}</span>
      </span>
      <img
        v-if="props.picture && props.pictureDark"
        class="avatar dark-image"
        :class="[props.squared && 'is-squared']"
        :src="props.pictureDark"
        alt=""
        @error.once="(event) => useViaPlaceholderError(event, '150x150')"
      />
    </slot>

    <slot name="badge">
      <img
        v-if="props.badge"
        class="badge"
        :src="props.badge"
        alt=""
        @error.once="(event) => useViaPlaceholderError(event, '150x150')"
      />
    </slot>
  </div>
</template>
