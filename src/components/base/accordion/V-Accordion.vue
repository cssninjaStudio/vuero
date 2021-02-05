<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, reactive } from 'vue'

type AccordionItem = {
  title: string
  content: string
}

const props = defineProps({
  items: {
    type: Array as PropType<AccordionItem[]>,
    required: true,
  },
  openItems: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
  exclusive: {
    type: Boolean,
    default: false,
  },
})

const internalOpenItems = reactive(props.openItems)
const toggle = (key: number) => {
  if (props.exclusive) {
    internalOpenItems.splice(0, internalOpenItems.length)
    internalOpenItems.push(key)

    return
  }

  if (internalOpenItems.includes(key)) {
    internalOpenItems.splice(internalOpenItems.indexOf(key), 1)
  } else {
    internalOpenItems.push(key)
  }
}
</script>

<template>
  <div class="single-accordion" :class="[exclusive && 'is-exclusive']">
    <div
      v-for="(item, key) in items"
      :key="key"
      class="accordion-item"
      :class="[internalOpenItems.includes(key) && 'is-active']"
    >
      <a class="accordion-header" @click="() => toggle(key)">{{
        item.title
      }}</a>
      <div class="accordion-content">{{ item.content }}</div>
    </div>
  </div>
</template>
