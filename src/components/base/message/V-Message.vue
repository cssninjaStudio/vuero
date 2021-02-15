<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

type MessageColor =
  | undefined
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

const props = defineProps({
  color: {
    type: String as PropType<MessageColor>,
    default: undefined,
    validator: function (value: MessageColor) {
      // The value must match one of these strings
      if (
        [undefined, 'primary', 'success', 'info', 'warning', 'danger'].indexOf(
          value
        ) === -1
      ) {
        console.warn(
          `V-Message: invalid "${value}" color. Should be primary, success, info, warning, danger or undefined`
        )
        return false
      }

      return true
    },
  },
})
</script>

<template>
  <div class="message" :class="[color && `is-${color}`]">
    <a class="delete"></a>
    <div class="message-body"><slot></slot></div>
  </div>
</template>
