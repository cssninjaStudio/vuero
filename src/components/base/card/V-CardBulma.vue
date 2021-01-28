<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String,
    default: 'https://via.placeholder.com/1280x960',
  },
  avatar: {
    type: String,
    default: 'https://via.placeholder.com/150x150',
  },
  title: {
    type: String,
    default: 'Avatar title',
  },
  subtitle: {
    type: String,
    default: 'Avatar subtitle',
  },
  badge: {
    type: String,
  },
  text: {
    type: String,
  },
})
</script>

<template>
  <div class="card v-card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="image"
          alt=""
          @error="$event.target.src = 'https://via.placeholder.com/1280x960'"
        />
      </figure>
    </div>
    <div class="card-content">
      <V-Block :title="title" :subtitle="subtitle" center narrow>
        <template #icon>
          <V-Avatar :picture="avatar" :badge="badge" size="medium" />
        </template>
      </V-Block>
      <div class="inner-content p-t-20 p-b-20">
        <p>{{ text }}</p>
      </div>

      <slot></slot>
    </div>
  </div>
</template>
