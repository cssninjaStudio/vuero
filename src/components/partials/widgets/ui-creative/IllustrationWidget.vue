<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
    default: 'Illustration Widget',
  },
  text: {
    type: String,
    required: true,
    default: 'Lorem ipsum sit dolor amet is a dummy text',
  },
  picture: {
    type: String,
    required: true,
    default: '',
  },
  badgeLeft: {
    type: String,
  },
  badgeRight: {
    type: String,
  },
  straight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="widget illustration-widget" :class="[straight && 'is-straight']">
    <div class="img-container">
      <img class="main" :src="picture" alt="" />
      <img v-if="badgeLeft" class="badge badge-1" :src="badgeLeft" alt="" />
      <img v-if="badgeRight" class="badge badge-2" :src="badgeRight" alt="" />
    </div>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>
