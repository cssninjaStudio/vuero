<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    todos: {
        type: Array,
        required: true,
        default: []
    },
    color: {
        type: String,
        default: ''
    }
})
</script>

<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="inner-list-item media-flex-center"
    >
      <AnimatedCheckbox v-model:checked="todo.completed" :color="props.color" />
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