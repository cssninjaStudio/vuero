<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

type AvatarSize = undefined | 'small' | 'medium' | 'large' | 'big' | 'xl'

const props = defineProps({
  picture: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'https://via.placeholder.com/150x150',
  },
  badge: {
    type: String,
    default: '',
  },
  initials: {
    type: String,
    default: '?',
  },
  size: {
    type: String as PropType<AvatarSize>,
    default: undefined,
  },
  color: {
    type: String,
    default: '',
  },
  squared: {
    type: Boolean,
    default: false,
  },
  dot: {
    type: Boolean,
    default: false,
  },
  dotColor: {
    type: String,
    default: '',
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
      @error="$event.target.src = 'https://via.placeholder.com/150x150'"
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
      @error="$event.target.src = 'https://via.placeholder.com/150x150'"
    />
  </div>
</template>
