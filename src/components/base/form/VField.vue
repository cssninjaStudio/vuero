<script setup lang="ts">
import { provide, useSlots, computed } from 'vue'

import { useVField, useVFieldSymbol } from '/@src/composable/useVField'

export type VFieldProps = {
  label?: string
  addons?: boolean
  textaddon?: boolean
  grouped?: boolean
  multiline?: boolean
  horizontal?: boolean
}

const props = withDefaults(defineProps<VFieldProps>(), {
  label: undefined,
})

const vField = useVField()
const slots = useSlots()
const hasLabel = computed(() => Boolean(slots?.label?.() || props.label))

provide(useVFieldSymbol, vField)
</script>

<template>
  <div
    class="field"
    :class="[
      props.addons && 'has-addons',
      props.textaddon && 'has-textarea-addon',
      props.grouped && 'is-grouped',
      props.grouped && props.multiline && 'is-grouped-multiline',
      props.horizontal && 'is-horizontal',
    ]"
  >
    <template v-if="hasLabel && props.horizontal">
      <div class="field-label is-normal">
        <label class="label" :for="vField.id">
          <slot name="label">{{ props.label }}</slot>
        </label>
      </div>
      <div class="field-body">
        <slot></slot>
      </div>
    </template>
    <template v-else-if="hasLabel">
      <label class="label" :for="vField.id">
        <slot name="label">{{ props.label }}</slot>
      </label>

      <slot></slot>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
