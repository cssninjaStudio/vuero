<script setup lang="ts">
import { toRefs } from 'vue'

export interface VCollapseItem {
  title: string
  content: string
}
export interface VCollapseEmits {
  (e: 'update:modelValue', index?: number): void
}
export interface VCollapseProps {
  items: VCollapseItem[]
  modelValue?: number
  withChevron?: boolean
}

const emit = defineEmits<VCollapseEmits>()
const props = withDefaults(defineProps<VCollapseProps>(), {
  modelValue: undefined,
})
const { modelValue } = toRefs(props)

const toggle = (key: number) => {
  if (modelValue.value === key) {
    emit('update:modelValue')
    return
  }

  emit('update:modelValue', key)
}
</script>

<template>
  <details
    v-for="(item, key) in items"
    :key="key"
    :class="[withChevron && 'has-chevron', !withChevron && 'has-plus']"
    :open="modelValue === key || undefined"
    class="collapse"
  >
    <summary class="collapse-header" @click.prevent="() => toggle(key)">
      <h3>{{ item.title }}</h3>
      <div class="collapse-icon">
        <VIcon v-if="withChevron" icon="feather:chevron-down" />
        <VIcon v-else-if="!withChevron" icon="feather:plus" />
      </div>
    </summary>
    <div class="collapse-content">
      <p>{{ item.content }}</p>
    </div>
  </details>
</template>
