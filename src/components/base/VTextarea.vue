<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export interface VTextareaProps {
  raw?: boolean
  autogrow?: boolean
}

const modelValue = defineModel<string>({
  default: '',
})
const props = defineProps<{
  raw?: boolean
  autogrow?: boolean
}>()

const { field, id } = useVFieldContext({
  create: false,
  help: 'VTextarea',
})

const textareaRef = ref<HTMLTextAreaElement>()

const internal = computed({
  get() {
    if (field?.value) {
      return field.value.value
    }
    else {
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
    v-model="internal"
    :class="classes"
    :name="id"
    @change="field?.handleChange"
    @blur="field?.handleBlur"
    @input="fitSize"
  />
</template>
