<script setup lang="ts">
import { ref, watch } from 'vue'
import { VAnimatedCheckboxColor } from '/@src/components/base/form/VAnimatedCheckbox.vue'

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
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="inner-list-item media-flex-center"
    >
      <VAnimatedCheckbox
        v-model="completed"
        :value="todo.title"
        :color="color"
      />
      <div class="flex-meta is-light">
        <a href="#">{{ todo.title }}</a>
        <span>{{ todo.time }}</span>
      </div>
      <div class="flex-end">
        <span class="tag is-rounded">{{ todo.status }}</span>
      </div>
    </div>
  </div>
</template>
