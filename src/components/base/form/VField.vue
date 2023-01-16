<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export type VFieldProps = {
  id?: string
  label?: string
  addons?: boolean
  textaddon?: boolean
  grouped?: boolean
  multiline?: boolean
  horizontal?: boolean
  subcontrol?: boolean
  raw?: boolean
}

const props = withDefaults(defineProps<VFieldProps>(), {
  id: undefined,
  label: undefined,
})
const vFieldContext = reactive(
  useVFieldContext({ id: props.id, inherit: !props.subcontrol })
)

const slots = useSlots()
const hasLabel = computed(() => Boolean(slots?.label?.() || props.label))
const classes = computed(() => {
  if (props.raw) return []

  return [
    'field',
    props.addons && 'has-addons',
    props.textaddon && 'has-textarea-addon',
    props.grouped && 'is-grouped',
    props.grouped && props.multiline && 'is-grouped-multiline',
    props.horizontal && 'is-horizontal',
  ]
})

defineExpose(vFieldContext)
</script>

<template>
  <div :class="classes">
    <template v-if="props.addons">
      <div v-if="hasLabel" class="field-addon-label is-normal">
        <slot v-bind="vFieldContext" name="label">
          <VLabel>{{ props.label }}</VLabel>
        </slot>
      </div>
      <div class="field-addon-body">
        <slot v-bind="vFieldContext"></slot>
      </div>
    </template>
    <template v-else-if="hasLabel && props.horizontal">
      <div class="field-label is-normal">
        <slot v-bind="vFieldContext" name="label">
          <VLabel>{{ props.label }}</VLabel>
        </slot>
      </div>
      <div class="field-body">
        <slot v-bind="vFieldContext"></slot>
      </div>
    </template>
    <template v-else-if="hasLabel">
      <slot v-bind="vFieldContext" name="label">
        <VLabel>{{ props.label }}</VLabel>
      </slot>

      <slot v-bind="vFieldContext"></slot>
    </template>
    <template v-else>
      <slot v-bind="vFieldContext"></slot>
    </template>
  </div>
</template>
