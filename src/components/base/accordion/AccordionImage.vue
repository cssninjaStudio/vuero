<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="image-accordion">
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        class="has-background-image"
        tabindex="1"
        :style="{ backgroundImage: `url(${item.image})` }"
      >
        <div>
          <a>
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
