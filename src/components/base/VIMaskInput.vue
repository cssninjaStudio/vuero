<script lang="ts" setup generic="Opts extends FactoryArg">
import type { InputMask, FactoryArg, UpdateOpts } from 'imask'

import IMask from 'imask'

const props = defineProps<{
  modelValue: string
  options: Opts
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'accept': [value: InputMask<Opts>, event?: InputEvent]
  'complete': [value: InputMask<Opts>, event?: InputEvent]
}>()

const inputElement = ref<HTMLElement>()
const inputMask = shallowRef<InputMask<Opts>>()

watch([inputElement, () => props.options, () => props.modelValue], () => {
  if (inputElement.value && props.options) {
    try {
      if (inputMask.value) {
        inputMask.value.updateOptions(props.options as UpdateOpts<Opts>)
        inputMask.value.unmaskedValue = props.modelValue

        return
      }

      inputMask.value = IMask(inputElement.value, props.options ?? {})

      if (props.modelValue) {
        inputMask.value.unmaskedValue = props.modelValue
        inputMask.value.updateValue()
        emit('accept', inputMask.value, undefined)
      }

      inputMask.value.on('accept', (inputEvent) => {
        if (!inputMask.value) return
        emit('update:modelValue', inputMask.value?.value || '')
        emit('accept', inputMask.value, inputEvent)
      })

      inputMask.value.on('complete', (inputEvent) => {
        if (!inputMask.value) return
        emit('complete', inputMask.value, inputEvent)
      })
    }
    catch (error) {
      console.error(
        'VIMaskInput: bad imask options, see https://imask.js.org/ for available parameters',
      )
      console.error(error)
    }
  }
})

onUnmounted(() => {
  if (inputMask.value) {
    inputMask.value.destroy()
    inputMask.value = undefined
  }
})

defineExpose({
  inputMask,
})
</script>

<template>
  <input
    ref="inputElement"
    type="text"
    :value="props.modelValue"
  >
</template>
