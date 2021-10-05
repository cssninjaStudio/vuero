<script setup lang="ts">
export type VMessageColor =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'white'
export interface VMessageEmits {
  (e: 'close'): void
}
export interface VMessageProps {
  color?: VMessageColor
  closable?: boolean
}

const emit = defineEmits<VMessageEmits>()
const props = withDefaults(defineProps<VMessageProps>(), {
  color: undefined,
})
</script>

<template>
  <div class="message" :class="[props.color && `is-${props.color}`]">
    <a
      v-if="props.closable"
      aria-label="Dismiss"
      class="delete"
      @click.prevent="emit('close')"
    ></a>
    <div class="message-body"><slot></slot></div>
  </div>
</template>
