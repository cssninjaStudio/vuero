<script setup lang="ts">
export type MessageColor =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'white'

const emit = defineEmits<{
  (e: 'close'): void
}>()
const props = withDefaults(
  defineProps<{
    color?: MessageColor
    closable?: boolean
  }>(),
  {
    color: undefined,
  }
)
</script>

<template>
  <div class="message" :class="[color && `is-${color}`]">
    <a v-if="closable" class="delete" @click.prevent="emit('close')"></a>
    <div class="message-body"><slot></slot></div>
  </div>
</template>
