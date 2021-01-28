<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  content: {
    type: String,
    default: 'Get familiar with Vuero components. Code examples included.',
  },
  light: {
    type: String,
    default: '/images/illustrations/components/avatar.svg',
  },
  dark: {
    type: String,
    default: '/images/illustrations/components/avatar-dark.svg',
  },
})
</script>

<template>
  <div class="hub-card">
    <div class="hub-card-body">
      <div class="inner-content">
        <h3 class="title is-5 is-narrow is-thin">{{ title }}</h3>
        <p class="light-text">
          {{ content }}
        </p>
      </div>
      <img class="light-image" :src="light" alt="" />
      <img class="dark-image" :src="dark" alt="" />
    </div>
    <div class="hub-card-foot">
      <slot></slot>
    </div>
  </div>
</template>
