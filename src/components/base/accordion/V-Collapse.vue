<script setup lang="ts">
import { ref } from 'vue'

export type CollapseItem = {
  title: string
  content: string
}

const props = withDefaults(
  defineProps<{
    items: CollapseItem[]
    itemOpen?: number
    withChevron?: boolean
  }>(),
  {
    items: () => [],
    itemOpen: undefined,
  }
)

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
    :class="[withChevron && 'has-chevron', !withChevron && 'has-plus']"
    :open="internalItemOpen === key || undefined"
    class="collapse"
  >
    <summary class="collapse-header" @click.prevent="() => toggle(key)">
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
