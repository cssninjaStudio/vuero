<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  avatar: {
    type: String,
    default: 'https://via.placeholder.com/150x150',
  },
  badge: {
    type: String,
    default: 'https://via.placeholder.com/150x150',
  },
  title: {
    type: String,
    default: 'Card title',
  },
  subtitle: {
    type: String,
    default: 'Card subtitle',
  },
  content: {
    type: String,
    default:
      'I can be used as is in any layout. L Cards are simple containers that can hold any type of content, from simple plain text to more structured markup.',
  },
})
</script>

<template>
  <div class="s-card is-raised demo-s-card has-loader">
    <slot name="loader"></slot>
    <div class="card-head">
      <div class="media-flex-center no-margin">
        <V-Avatar :picture="picture" :badge="badge" />
        <div class="flex-meta">
          <span>{{ props.title }}</span>
          <span>{{ props.subtitle }}</span>
        </div>
      </div>
      <slot name="action"></slot>
    </div>
    <div class="card-inner">
      <p>{{ props.content }}</p>
    </div>
  </div>
</template>
