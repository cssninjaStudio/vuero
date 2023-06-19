<script lang="ts">
import type { InputMask, FactoryArg } from 'imask'

import IMask from 'imask'
import { type PropType } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Object as PropType<FactoryArg>,
      required: true,
    },
  },
  emits: ['update:modelValue', 'complete', 'accept'],
  setup(props, { emit, expose }) {
    const inputElement = ref<HTMLElement>()
    const inputMask = shallowRef<InputMask<any>>()

    watch([inputElement, () => props.options, () => props.modelValue], () => {
      if (inputElement.value && props.options) {
        try {
          if (inputMask.value) {
            inputMask.value.updateOptions(props.options)
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
        } catch (error) {
          console.error(
            'VIMaskInput: bad imask options, see https://imask.js.org/ for available parameters'
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

    expose({
      inputMask,
    })

    return () => h('input', { ref: inputElement, type: 'text', value: props.modelValue })
  },
})
</script>
