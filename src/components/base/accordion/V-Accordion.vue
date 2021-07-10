<script setup lang="ts">
import type { PropType } from 'vue'
import { reactive } from 'vue'

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
  const wasOpen = internalOpenItems.includes(key)

  if (props.exclusive) {
    internalOpenItems.splice(0, internalOpenItems.length)

    if (!wasOpen) {
      internalOpenItems.push(key)
    }

    return
  }

  if (wasOpen) {
    internalOpenItems.splice(internalOpenItems.indexOf(key), 1)
  } else {
    internalOpenItems.push(key)
  }
}
</script>

<template>
  <div class="single-accordion" :class="[exclusive && 'is-exclusive']">
    <details
      v-for="(item, key) in items"
      :key="key"
      class="accordion-item"
      :open="!internalOpenItems.includes(key)"
      :class="[internalOpenItems.includes(key) && 'is-active']"
    >
      <summary class="accordion-header" @click="() => toggle(key)">
        {{ item.title }}
      </summary>
      <div class="accordion-content">{{ item.content }}</div>
    </details>
  </div>
</template>

<style lang="scss" scoped>
summary {
  outline: none;
  list-style: none;

  &::marker {
    display: none;
  }
}
</style>
