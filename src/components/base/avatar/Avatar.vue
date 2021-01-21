<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
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
    class="h-avatar"
    :class="[props.size && 'is-' + props.size, props.dot && 'has-dot']"
  >
    <img
      v-if="picture"
      class="avatar"
      :class="[squared && 'is-squared']"
      :src="props.picture"
      alt=""
      @error="$event.target.src = 'https://via.placeholder.com/150x150'"
    />
    <span v-else class="avatar is-fake" :class="[squared && 'is-squared']">
      <span>{{ props.initials }}</span>
    </span>
    <img
      v-if="badge"
      class="badge"
      :src="props.badge"
      alt=""
      @error="$event.target.src = 'https://via.placeholder.com/150x150'"
    />
  </div>
</template>
