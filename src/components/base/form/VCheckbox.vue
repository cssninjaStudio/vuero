<script setup lang="ts">
import { computed } from 'vue'

export type VCheckboxColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export interface VCheckboxEmits {
  (e: 'update:modelValue', value: (string | number)[]): void
}
export interface VCheckboxProps {
  value?: string | number
  label?: string
  color?: VCheckboxColor
  modelValue?: (string | number)[]
  circle?: boolean
  solid?: boolean
  paddingless?: boolean
}

const emit = defineEmits<VCheckboxEmits>()
const props = withDefaults(defineProps<VCheckboxProps>(), {
  value: undefined,
  label: undefined,
  color: undefined,
  modelValue: () => [],
  circle: false,
  solid: false,
  paddingless: false,
})

const checked = computed(() => props.modelValue.includes(props.value))

function change() {
  const values = [...props.modelValue]

  if (checked.value) {
    values.splice(values.indexOf(props.value), 1)
  } else {
    values.push(props.value)
  }
  emit('update:modelValue', values)
}
</script>

<template>
  <label
    class="checkbox"
    :class="[
      props.solid ? 'is-solid' : 'is-outlined',
      props.circle && 'is-circle',
      props.color && `is-${props.color}`,
      props.paddingless && 'is-paddingless',
    ]"
  >
    <input
      type="checkbox"
      :checked="checked"
      :value="props.value"
      v-bind="$attrs"
      @change="change"
    />
    <span></span>
    {{ props.label || props.value }}
  </label>
</template>
