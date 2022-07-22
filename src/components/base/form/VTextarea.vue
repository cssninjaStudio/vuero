<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export interface VTextareaEmits {
  (event: 'update:modelValue', value?: any): void
}
export interface VTextareaProps {
  raw?: boolean
  modelValue?: any
}
const vFieldContext = reactive(
  useVFieldContext({
    create: false,
    help: 'VTextarea',
  })
)

const emits = defineEmits<VTextareaEmits>()
const props = withDefaults(defineProps<VTextareaProps>(), { modelValue: '' })
const value = ref(vFieldContext?.field?.value ?? props.modelValue)

watch(value, () => {
  emits('update:modelValue', value.value)
})
watch(
  () => props.modelValue,
  () => {
    value.value = props.modelValue
  }
)

const classes = computed(() => {
  if (props.raw) return []

  return ['textarea']
})
</script>

<template>
  <textarea
    :id="vFieldContext.id"
    v-model="value"
    :class="classes"
    :name="vFieldContext.id"
    @change="vFieldContext.field?.handleChange"
    @blur="vFieldContext.field?.handleBlur"
  ></textarea>
</template>
