<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
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
        <h3 class="title is-5 is-narrow is-thin">{{ props.title }}</h3>
        <p class="light-text">
          {{ props.content }}
        </p>
      </div>
      <img class="light-image" :src="props.light" alt="" />
      <img class="dark-image" :src="props.dark" alt="" />
    </div>
    <div class="hub-card-foot">
      <slot></slot>
    </div>
  </div>
</template>
