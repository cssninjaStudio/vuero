<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export interface VSelectEmits {
  (event: 'update:modelValue', value?: any): void
}
export interface VSelectProps {
  raw?: boolean
  modelValue?: any
  multiple?: boolean
}
const { field, id } = useVFieldContext({
  create: false,
  help: 'VSelect',
})

defineOptions({
  inheritAttrs: false,
})
const emits = defineEmits<VSelectEmits>()
const props = withDefaults(defineProps<VSelectProps>(), { modelValue: '' })
const attrs = useAttrs()

const value = computed({
  get() {
    if (field?.value) {
      return field.value.value
    } else {
      return props.modelValue
    }
  },
  set(value: any) {
    if (field?.value) {
      field.value.setValue(value)
    }
    emits('update:modelValue', value)
  },
})

const classes = computed(() => {
  if (props.raw) return []

  return ['select', props.multiple && 'is-multiple']
})
</script>

<template>
  <div :class="classes">
    <select
      :id="id"
      v-bind="attrs"
      v-model="value"
      :name="id"
      :multiple="props.multiple"
      @change="field?.handleChange"
      @blur="field?.handleBlur"
    >
      <slot v-bind="{ selected: value, id }"></slot>
    </select>
  </div>
</template>
