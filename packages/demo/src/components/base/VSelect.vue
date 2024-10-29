<script setup lang="ts">
export interface VSelectProps {
  id?: string
  raw?: boolean
  multiple?: boolean
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<VSelectProps>()
const modelValue = defineModel<any>({
  default: '',
})
const attrs = useAttrs()

const { field, id } = useVFieldContext({
  id: () => props.id,
  create: false,
  help: 'VSelect',
})

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

const classes = computed(() => {
  if (props.raw)
    return []

  return ['select', props.multiple && 'is-multiple']
})
</script>

<template>
  <div :class="classes">
    <select
      :id="id"
      v-bind="attrs"
      v-model="internal"
      :name="id"
      :multiple="props.multiple"
      @change="field?.handleChange"
      @blur="field?.handleBlur"
    >
      <slot v-bind="{ selected: internal, id }" />
    </select>
  </div>
</template>
