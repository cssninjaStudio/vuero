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

const vFieldContext = reactive(
  useVFieldContext({
    create: false,
    help: 'VInput',
  })
)
const emits = defineEmits<VInputEmits>()
const props = withDefaults(defineProps<VInputProps>(), {
  modelValue: '',
  trueValue: true,
  falseValue: false,
})
const value = computed({
  get() {
    if (vFieldContext.field?.value) {
      return vFieldContext.field.value.value
    } else {
      return props.modelValue
    }
  },
  set(value: any) {
    if (vFieldContext.field?.value) {
      vFieldContext.field.value.value = value
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
    :id="vFieldContext.id"
    v-model="value"
    :class="classes"
    :name="vFieldContext.id"
    :true-value="props.trueValue"
    :false-value="props.falseValue"
    @change="vFieldContext.field?.handleChange"
    @blur="vFieldContext.field?.handleBlur"
  />
</template>
