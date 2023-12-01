<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export interface VLabelProps {
  id?: string
  raw?: boolean
}

const props = withDefaults(defineProps<VLabelProps>(), {
  id: undefined,
})

const context = useVFieldContext({
  create: false,
  help: 'VLabel',
})

const classes = computed(() => {
  if (props.raw) return []

  return ['label']
})
</script>

<template>
  <label
    :class="classes"
    :for="props.id || context.id.value"
  >
    <slot v-bind="context" />
  </label>
</template>
