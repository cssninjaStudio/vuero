<script setup lang="ts">
import type { VAnimatedCheckboxColor } from '/@src/components/base/form/VAnimatedCheckbox.vue'

const emit = defineEmits<{
  (e: 'update:modelValue', value: any[]): void
}>()
const props = withDefaults(
  defineProps<{
    todos?: any[]
    modelValue?: any[]
    color?: VAnimatedCheckboxColor
  }>(),
  {
    todos: () => [],
    modelValue: () => [],
    color: undefined,
  }
)

const completed = ref(props.modelValue)

watch(completed, () => {
  emit('update:modelValue', completed.value ?? [])
})
</script>

<template>
  <div>
    <VBlock v-for="todo in todos" :key="todo.id" center lighter class="inner-list-item">
      <template #icon>
        <VAnimatedCheckbox v-model="completed" :value="todo.title" :color="color" />
      </template>
      <template #action>
        <span class="tag is-rounded">{{ todo.status }}</span>
      </template>

      <a href="#">{{ todo.title }}</a>
      <span>{{ todo.time }}</span>
    </VBlock>
  </div>
</template>
