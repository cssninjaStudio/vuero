<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

type AccordionImageItem = {
  title: string
  content: string
  image: string
}

const props = defineProps({
  items: {
    type: Array as PropType<AccordionImageItem[]>,
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
