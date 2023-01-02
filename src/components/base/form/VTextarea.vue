<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export interface VTextareaEmits {
  (event: 'update:modelValue', value?: any): void
}
export interface VTextareaProps {
  raw?: boolean
  modelValue?: any
  autogrow?: boolean
}
const vFieldContext = reactive(
  useVFieldContext({
    create: false,
    help: 'VTextarea',
  })
)

const emits = defineEmits<VTextareaEmits>()
const props = withDefaults(defineProps<VTextareaProps>(), { modelValue: '' })
const textareaRef = ref<HTMLTextAreaElement>()
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

function fitSize() {
  if (!textareaRef.value) {
    return
  }

  if (props.autogrow) {
    textareaRef.value.style.height = 'auto'
    textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px'
  }
}

const classes = computed(() => {
  if (props.raw) return []

  return ['textarea']
})
</script>

<template>
  <textarea
    :id="vFieldContext.id"
    ref="textareaRef"
    v-model="value"
    :class="classes"
    :name="vFieldContext.id"
    @change="vFieldContext.field?.handleChange"
    @blur="vFieldContext.field?.handleBlur"
    @input="fitSize"
  ></textarea>
</template>
