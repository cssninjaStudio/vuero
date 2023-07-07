<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export interface VInputEmits {
  (event: 'update:modelValue', value?: any): void
}
export interface VInputProps {
  raw?: boolean
  modelValue?: any
  trueValue?: boolean
  falseValue?: boolean
}

const { field, id } = useVFieldContext({
  create: false,
  help: 'VInput',
})

const emits = defineEmits<VInputEmits>()
const props = withDefaults(defineProps<VInputProps>(), {
  modelValue: '',
  trueValue: true,
  falseValue: false,
})
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

  return ['input', 'v-input']
})
</script>

<template>
  <input
    :id="id"
    v-model="value"
    :class="classes"
    :name="id"
    :true-value="props.trueValue"
    :false-value="props.falseValue"
    @change="field?.handleChange"
    @blur="field?.handleBlur"
  />
</template>
