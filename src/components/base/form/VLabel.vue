<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useVFieldContext } from '/@src/composable/useVFieldContext'

export interface VLabelProps {
  raw?: boolean
}

const props = defineProps<VLabelProps>()

const vFieldContext = reactive(
  useVFieldContext({
    create: false,
    help: 'VLabel',
  })
)

const classes = computed(() => {
  if (props.raw) return []

  return ['label']
})
</script>

<template>
  <label :class="classes" :for="vFieldContext.id">
    <slot v-bind="vFieldContext" />
  </label>
</template>
