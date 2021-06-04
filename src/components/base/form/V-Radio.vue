<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, defineProps, defineEmit } from 'vue'

type RadioColor =
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
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: [String, Number],
    default: undefined,
  },
  color: {
    type: String as PropType<RadioColor>,
    default: undefined,
    validator: (value: RadioColor) => {
      // The value must match one of these strings
      if (
        [undefined, 'primary', 'info', 'success', 'warning', 'danger'].indexOf(
          value
        ) === -1
      ) {
        console.warn(
          `V-Radio: invalid "${value}" color. Should be primary, info, success, warning, danger or undefined`
        )
        return false
      }

      return true
    },
  },
  square: {
    type: Boolean,
    default: false,
  },
  solid: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmit(['update:modelValue'])
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
