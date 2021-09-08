<script setup lang="ts">
export type AvatarSize = 'small' | 'medium' | 'large' | 'big' | 'xl'
export type AvatarColor =
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
export type AvatarDotColor =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

const props = withDefaults(
  defineProps<{
    picture?: string
    pictureDark?: string
    placeholder?: string
    badge?: string
    initials?: string
    size?: AvatarSize
    color?: AvatarColor
    dotColor?: AvatarDotColor
    squared?: boolean
    dot?: boolean
  }>(),
  {
    picture: undefined,
    pictureDark: undefined,
    placeholder: 'https://via.placeholder.com/50x50',
    initials: '?',
    badge: undefined,
    size: undefined,
    color: undefined,
    dotColor: undefined,
  }
)
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
    <slot name="avatar">
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
        v-if="picture && pictureDark"
        class="avatar dark-image"
        :class="[squared && 'is-squared']"
        :src="pictureDark"
        alt=""
        @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
      />
    </slot>

    <slot name="badge">
      <img
        v-if="badge"
        class="badge"
        :src="badge"
        alt=""
        @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
      />
    </slot>
  </div>
</template>
