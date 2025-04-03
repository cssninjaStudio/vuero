<script setup lang="ts">
export interface VTextareaProps {
  id?: string
  raw?: boolean
  autogrow?: boolean
}

const props = defineProps<VTextareaProps>()
const modelValue = defineModel<string>({
  default: '',
})
const { field, id } = useVFieldContext({
  id: () => props.id,
  create: false,
  help: 'VTextarea',
})

const textareaRef = useTemplateRef<HTMLTextAreaElement>('textarea')

const internal = computed<string>({
  get() {
    if (field?.value) {
      return (field.value.value) as any
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
    textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
  }
}

const classes = computed(() => {
  if (props.raw)
    return []

  return ['textarea']
})
</script>

<template>
  <textarea
    :id="id"
    ref="textarea"
    v-model="internal"
    :class="classes"
    :name="id"
    @change="field?.handleChange"
    @blur="field?.handleBlur"
    @input="fitSize"
  />
</template>
