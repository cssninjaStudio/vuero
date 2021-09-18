<script setup lang="ts">
import { ref } from 'vue'

export interface VAccordionItem {
  title: string
  content: string
}
export interface VAccordionProps {
  items: VAccordionItem[]
  openItems?: number[]
  exclusive?: boolean
}

const props = withDefaults(defineProps<VAccordionProps>(), {
  items: () => [],
  openItems: () => [],
})

const internalOpenItems = ref(props.openItems)
const toggle = (key: number) => {
  const wasOpen = internalOpenItems.value.includes(key)

  if (props.exclusive) {
    internalOpenItems.value.splice(0, internalOpenItems.value.length)

    if (!wasOpen) {
      internalOpenItems.value.push(key)
    }

    return
  }

  if (wasOpen) {
    internalOpenItems.value.splice(internalOpenItems.value.indexOf(key), 1)
  } else {
    internalOpenItems.value.push(key)
  }
}
</script>

<template>
  <div class="single-accordion" :class="[exclusive && 'is-exclusive']">
    <details
      v-for="(item, key) in items"
      :key="key"
      class="accordion-item"
      :open="internalOpenItems?.includes(key) ?? undefined"
      :class="[internalOpenItems?.includes(key) && 'is-active']"
    >
      <summary class="accordion-header" @click.prevent="() => toggle(key)">
        {{ item.title }}
      </summary>
      <div class="accordion-content">{{ item.content }}</div>
    </details>
  </div>
</template>
