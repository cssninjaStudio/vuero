<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, ref } from 'vue'

type CollapseItem = {
  title: string
  content: string
}

const props = defineProps({
  items: {
    type: Array as PropType<CollapseItem[]>,
    required: true,
  },
  itemOpen: {
    type: Number,
    default: undefined,
  },
  withChevron: {
    type: Boolean,
    default: false,
  },
})

const internalItemOpen = ref<number | undefined>(props.itemOpen)
const toggle = (key: number) => {
  if (internalItemOpen.value === key) {
    internalItemOpen.value = undefined
    return
  }

  internalItemOpen.value = key
}
</script>

<template>
  <details
    v-for="(item, key) in items"
    :key="key"
    :class="[
      withChevron && 'has-chevron',
      !withChevron && 'has-plus',
      internalItemOpen === key && 'is-active',
    ]"
    class="collapse"
  >
    <summary class="collapse-header" @click="() => toggle(key)">
      <h3>{{ item.title }}</h3>
      <div class="collapse-icon">
        <V-Icon v-if="withChevron" icon="feather:chevron-down" />
        <V-Icon v-else-if="!withChevron" icon="feather:plus" />
      </div>
    </summary>
    <div class="collapse-content">
      <p>{{ item.content }}</p>
    </div>
  </details>
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
