<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
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
  radius: {
    type: String,
    default: 'regular',
  },
  loading: {
    type: String,
    default: 'regular',
  },
})
</script>

<template>
  <div
    class="is-raised has-loader"
    :class="[
      radius === 'regular' && 's-card',
      radius === 'smooth' && 'r-card',
      radius === 'rounded' && 'l-card',
      loading && 'has-loader-active',
    ]"
  >
    <slot name="loader"></slot>
    <div class="card-head">
      <V-Block :title="title" :subtitle="subtitle" center>
        <template #icon>
          <V-Avatar :picture="avatar" :badge="badge" />
        </template>
        <template #action>
          <WidgetDropdown />
        </template>
      </V-Block>
    </div>
    <div class="card-inner">
      <p>{{ content }}</p>
    </div>
  </div>
</template>
