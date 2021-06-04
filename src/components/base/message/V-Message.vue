<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, defineEmit } from 'vue'

type MessageColor =
  | undefined
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'white'

const props = defineProps({
  color: {
    type: String as PropType<MessageColor>,
    default: undefined,
    validator: (value: MessageColor) => {
      // The value must match one of these strings
      if (
        [
          undefined,
          'primary',
          'success',
          'info',
          'warning',
          'danger',
          'white',
        ].indexOf(value) === -1
      ) {
        console.warn(
          `V-Message: invalid "${value}" color. Should be primary, success, info, warning, danger, white or undefined`
        )
        return false
      }

      return true
    },
  },
  closable: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmit(['close'])
</script>

<template>
  <div class="message" :class="[color && `is-${color}`]">
    <a v-if="closable" class="delete" @click.prevent="emit('close')"></a>
    <div class="message-body"><slot></slot></div>
  </div>
</template>
