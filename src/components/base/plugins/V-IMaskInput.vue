<script setup lang="ts">
import type { InputMask } from 'imask'
import type { PropType } from 'vue'
import IMask from 'imask'
import { ref, watch, onUnmounted } from 'vue'

const inputElement = ref<HTMLElement | null>(null)
let inputMask: InputMask<any> | undefined

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  options: {
    type: Object as PropType<InputMask<any>>,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue', 'accept', 'complete'])

watch([inputElement, () => props.options, () => props.modelValue], () => {
  if (inputElement.value && props.options) {
    try {
      if (inputMask) {
        inputMask.updateOptions(props.options)
        inputMask.unmaskedValue = props.modelValue

        return
      }

      inputMask = IMask(inputElement.value, props.options)

      if (props.modelValue) {
        inputMask.unmaskedValue = props.modelValue
        inputMask.updateValue()
        emit('accept', inputMask, undefined)
      }

      inputMask.on('accept', (inputEvent: InputEvent) => {
        emit('update:modelValue', inputMask?.value || '')
        emit('accept', inputMask, inputEvent)
      })

      inputMask.on('complete', (inputEvent: InputEvent) => {
        emit('complete', inputMask, inputEvent)
      })
    } catch (error) {
      console.error(
        'V-IMaskInput: bad imask options, see https://imask.js.org/ for available parameters'
      )
      console.error(error)
    }
  }
})

onUnmounted(() => {
  if (inputMask) {
    inputMask.destroy()
    inputMask = undefined
  }
})
</script>

<template>
  <input ref="inputElement" :value="modelValue" type="text" />
</template>
