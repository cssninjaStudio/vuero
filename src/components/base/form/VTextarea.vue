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
const { field, id } = useVFieldContext({
  create: false,
  help: 'VTextarea',
})

const emits = defineEmits<VTextareaEmits>()
const props = withDefaults(defineProps<VTextareaProps>(), { modelValue: '' })
const textareaRef = ref<HTMLTextAreaElement>()

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
    :id="id"
    ref="textareaRef"
    v-model="value"
    :class="classes"
    :name="id"
    @change="field?.handleChange"
    @blur="field?.handleBlur"
    @input="fitSize"
  ></textarea>
</template>
