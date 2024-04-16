<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const props = withDefaults(
  defineProps<{
    title?: string
    picture?: string
    views?: string
  }>(),
  {
    title: 'A nice and short little movie',
    picture: 'https://via.placeholder.com/400x300',
    views: '',
  },
)
</script>

<template>
  <div class="widget-content">
    <img
      :src="props.picture"
      alt=""
      @error.once="onceImageErrored(400, 300)"
    >
    <div class="widget-meta">
      <iconify-icon
        aria-hidden="true"
        class="iconify"
        icon="lucide:play-circle"
      ></iconify-icon>
      <h4>{{ props.title }}</h4>
      <span class="views">
        <iconify-icon
          aria-hidden="true"
          class="iconify"
          icon="lucide:eye"
        ></iconify-icon>
        <span>{{ props.views }}</span>
      </span>
    </div>
  </div>
</template>
