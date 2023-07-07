<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export interface VLabelProps {
  raw?: boolean
}

const props = defineProps<VLabelProps>()

const { field, id } = useVFieldContext({
  create: false,
  help: 'VLabel',
})

const classes = computed(() => {
  if (props.raw) return []

  return ['label']
})
</script>

<template>
  <label :class="classes" :for="id">
    <slot v-bind="{ field, id }" />
  </label>
</template>
