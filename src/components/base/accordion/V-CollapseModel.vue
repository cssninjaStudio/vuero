<script setup lang="ts">
import type { PropType } from 'vue'
import { ref, toRefs } from 'vue'

type CollapseItem = {
  title: string
  content: string
}

const emit = defineEmits<{
  (e: 'update:modelValue', index?: number): void
}>()
const props = withDefaults(
  defineProps<{
    items: CollapseItem[]
    modelValue?: number
    withChevron?: boolean
  }>(),
  {
    modelValue: undefined,
    withChevron: false,
  }
)
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
        <V-Icon v-if="withChevron" icon="feather:chevron-down" />
        <V-Icon v-else-if="!withChevron" icon="feather:plus" />
      </div>
    </summary>
    <div class="collapse-content">
      <p>{{ item.content }}</p>
    </div>
  </details>
</template>
