<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: undefined,
  },
  image: {
    type: String,
    default: undefined,
  },
  avatar: {
    type: String,
    default: undefined,
  },
  badge: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    default: undefined,
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
          @error.once="
            $event.target.src = 'https://via.placeholder.com/1280x960'
          "
        />
      </figure>
    </div>
    <div class="card-content">
      <V-Block :title="title" :subtitle="subtitle" center narrow>
        <template #icon>
          <V-Avatar :picture="avatar" :badge="badge" size="medium" />
        </template>
      </V-Block>
      <div v-if="text" class="inner-content p-t-20 p-b-20">
        <p>{{ text }}</p>
      </div>

      <slot></slot>
    </div>
  </div>
</template>
