<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  todos: {
    type: Array,
    required: true,
    default: () => [],
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  color: {
    type: String,
    default: undefined,
  },
})

const completed = ref(props.modelValue)
const emit = defineEmits(['update:modelValue'])

watch(completed, () => {
  emit('update:modelValue', completed.value)
})
</script>

<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="inner-list-item media-flex-center"
    >
      <V-AnimatedCheckbox
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
