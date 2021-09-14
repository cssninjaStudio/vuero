<script setup lang="ts">
import { computed } from 'vue'

type CheckboxColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'

const emit = defineEmits<{
  (e: 'update:modelValue', value: (string | number)[]): void
}>()
const props = withDefaults(
  defineProps<{
    value?: string | number
    label?: string
    color?: CheckboxColor
    modelValue?: (string | number)[]
    circle?: boolean
    solid?: boolean
  }>(),
  {
    value: undefined,
    label: undefined,
    color: undefined,
    modelValue: () => [],
    circle: false,
    solid: false,
  }
)

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
