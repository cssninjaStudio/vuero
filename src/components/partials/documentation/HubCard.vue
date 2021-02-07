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
    default: '/@src/assets/illustrations/components/avatar.svg',
  },
  dark: {
    type: String,
    default: '/@src/assets/illustrations/components/avatar-dark.svg',
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
      <slot name="icon"></slot>
    </div>
    <div class="hub-card-foot">
      <slot></slot>
    </div>
  </div>
</template>
