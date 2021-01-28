<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  picture: {
    type: String,
    default: '',
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
    type: String,
    default: '',
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
      size && 'is-' + size,
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
