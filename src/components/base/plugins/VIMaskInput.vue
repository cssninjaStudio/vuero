<script lang="ts">
import type { InputMask, AnyMaskedOptions } from 'imask'
import type { PropType } from 'vue'
import { ref, watch, onUnmounted, h, defineComponent } from 'vue'
import IMask from 'imask'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Object as PropType<AnyMaskedOptions>,
      required: true,
    },
  },
  emits: ['update:modelValue', 'complete', 'accept'],
  setup(props, { emit }) {
    const inputElement = ref<HTMLElement>()
    let inputMask: InputMask<any> | undefined

    watch([inputElement, () => props.options, () => props.modelValue], () => {
      if (inputElement.value && props.options) {
        try {
          if (inputMask) {
            inputMask.updateOptions(props.options)
            inputMask.unmaskedValue = props.modelValue

            return
          }

          inputMask = IMask(inputElement.value, props.options ?? {})

          if (props.modelValue) {
            inputMask.unmaskedValue = props.modelValue
            inputMask.updateValue()
            emit('accept', inputMask, undefined)
          }

          inputMask.on('accept', (inputEvent: InputEvent) => {
            if (!inputMask) return
            emit('update:modelValue', inputMask?.value || '')
            emit('accept', inputMask, inputEvent)
          })

          inputMask.on('complete', (inputEvent: InputEvent) => {
            if (!inputMask) return
            emit('complete', inputMask, inputEvent)
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
      if (inputMask) {
        inputMask.destroy()
        inputMask = undefined
      }
    })

    return () => h('input', { ref: inputElement, type: 'text', value: props.modelValue })
  },
})
</script>
