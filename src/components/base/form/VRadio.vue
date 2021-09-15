<script setup lang="ts">
import { computed } from 'vue'

export type VRadioColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'
export interface VRadioEmits {
  (e: 'update:modelValue', value: string | number): void
}
export interface VRadioProps {
  value: string | number
  modelValue?: string | number
  name: string
  label?: string
  color?: VRadioColor
  square?: boolean
  solid?: boolean
}

const emit = defineEmits<VRadioEmits>()
const props = withDefaults(defineProps<VRadioProps>(), {
  modelValue: undefined,
  label: undefined,
  color: undefined,
})

const checked = computed(() => props.value === props.modelValue)

function change() {
  emit('update:modelValue', props.value)
}
</script>

<template>
  <label
    class="radio"
    :class="[
      props.solid ? 'is-solid' : 'is-outlined',
      props.square && 'is-square',
      props.color && `is-${props.color}`,
    ]"
  >
    <input
      type="radio"
      :checked="checked"
      :value="props.value"
      :name="props.name"
      v-bind="$attrs"
      @change="change"
    />
    <span></span>
    {{ props.label || props.value }}
  </label>
</template>
