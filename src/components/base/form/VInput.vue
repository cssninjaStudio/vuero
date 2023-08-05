<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export interface VInputProps {
  raw?: boolean
  trueValue?: boolean
  falseValue?: boolean
}

const modelValue = defineModel<any>({
  default: '',
  local: true,
})
const props = withDefaults(defineProps<VInputProps>(), {
  modelValue: '',
  trueValue: true,
  falseValue: false,
})

const { field, id } = useVFieldContext({
  create: false,
  help: 'VInput',
})

const internal = computed({
  get() {
    if (field?.value) {
      return field.value.value
    } else {
      return modelValue.value
    }
  },
  set(value: any) {
    if (field?.value) {
      field.value.setValue(value)
    }
    modelValue.value = value
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
    v-model="internal"
    :class="classes"
    :name="id"
    :true-value="props.trueValue"
    :false-value="props.falseValue"
    @change="field?.handleChange"
    @blur="field?.handleBlur"
  >
</template>
