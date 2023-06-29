<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export interface VSelectEmits {
  (event: 'update:modelValue', value?: any): void
}
export interface VSelectProps {
  raw?: boolean
  modelValue?: any
  multiple?: boolean
}
const vFieldContext = reactive(
  useVFieldContext({
    create: false,
    help: 'VSelect',
  })
)

defineOptions({
  inheritAttrs: false,
})
const emits = defineEmits<VSelectEmits>()
const props = withDefaults(defineProps<VSelectProps>(), { modelValue: '' })
const attrs = useAttrs()

const value = computed({
  get() {
    if (vFieldContext.field?.value) {
      return vFieldContext.field.value.value
    } else {
      return props.modelValue
    }
  },
  set(value: any) {
    if (vFieldContext.field?.value) {
      vFieldContext.field.value.value = value
    }
    emits('update:modelValue', value)
  },
})

const classes = computed(() => {
  if (props.raw) return []

  return ['select', props.multiple && 'is-multiple']
})
</script>

<template>
  <div :class="classes">
    <select
      :id="vFieldContext.id"
      v-bind="attrs"
      v-model="value"
      :name="vFieldContext.id"
      :multiple="props.multiple"
      @change="vFieldContext.field?.handleChange"
      @blur="vFieldContext.field?.handleBlur"
    >
      <slot v-bind="{ selected: value, id: vFieldContext.id }"></slot>
    </select>
  </div>
</template>
