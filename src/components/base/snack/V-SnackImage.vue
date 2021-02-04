<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String,
    default: 'https://via.placeholder.com/150x150',
  },
  title: {
    type: String,
    default: 'Snack title',
  },
  size: {
    type: String,
    default: '',
  },
  white: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="snack" :class="[white && 'is-white', size && `is-${size}`]">
    <div class="snack-media">
      <img
        class="avatar"
        :src="image"
        alt=""
        @error="$event.target.src = 'https://via.placeholder.com/150x150'"
      />
    </div>
    <span class="snack-text">{{ title }}</span>
    <span class="snack-action">
      <slot></slot>
    </span>
  </div>
</template>
