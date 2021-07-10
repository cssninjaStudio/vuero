<script setup lang="ts">
import type { PropType } from 'vue'

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
const emit = defineEmits(['select'])
</script>

<template>
  <div class="image-accordion">
    <ul>
      <li
        v-for="(item, key) in items"
        :key="key"
        class="has-background-image"
        tabindex="1"
        :style="{ backgroundImage: `url(${item.image})` }"
      >
        <div>
          <a @click="emit('select', key)">
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
