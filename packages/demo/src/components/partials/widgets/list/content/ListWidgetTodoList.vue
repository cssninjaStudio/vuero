<script setup lang="ts" generic="T extends ModelItem">
import type { VAnimatedCheckboxColor } from '/@src/components/base/VAnimatedCheckbox.vue'

export interface ModelItem {
  id: string | number
  title: string
  status?: string
  time?: string
}

const props = withDefaults(
  defineProps<{
    todos?: T[]
    color?: VAnimatedCheckboxColor
  }>(),
  {
    todos: () => [] as T[],
    color: undefined,
  },
)

const modelValue = defineModel<T[]>({
  default: () => [],
})
</script>

<template>
  <div>
    <VBlock
      v-for="todo in props.todos"
      :key="todo.id"
      center
      lighter
      class="inner-list-item"
    >
      <template #icon>
        <VAnimatedCheckbox
          v-model="modelValue"
          :value="todo as T"
          :color="props.color"
        />
      </template>
      <template #action>
        <span
          v-if="todo.status"
          class="tag is-rounded"
        >{{ todo.status }}</span>
      </template>

      <a href="#">{{ todo.title }}</a>
      <span v-if="todo.time">{{ todo.time }}</span>
    </VBlock>
  </div>
</template>
