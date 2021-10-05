<script setup lang="ts">
export interface VAccordionImageItem {
  title: string
  content: string
  image: string
}
export interface VAccordionImageEmits {
  (e: 'select', key: string | number): void
}
export interface VAccordionImageProps {
  items: VAccordionImageItem[]
}

const emit = defineEmits<VAccordionImageEmits>()
const props = withDefaults(defineProps<VAccordionImageProps>(), {
  items: () => [],
})
</script>

<template>
  <div class="image-accordion">
    <ul>
      <li
        v-for="(item, key) in props.items"
        :key="key"
        class="has-background-image"
        tabindex="0"
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
