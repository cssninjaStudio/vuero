<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'

type CheckboxColor =
  | undefined
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

const props = defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  color: {
    type: String as PropType<CheckboxColor>,
    default: undefined,
    validator: (value: CheckboxColor) => {
      // The value must match one of these strings
      if (
        [undefined, 'primary', 'info', 'success', 'warning', 'danger'].indexOf(
          value
        ) === -1
      ) {
        console.warn(
          `V-Checkbox: invalid "${value}" color. Should be primary, info, success, warning, danger or undefined`
        )
        return false
      }

      return true
    },
  },
  circle: {
    type: Boolean,
    default: false,
  },
  solid: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])
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
