<script setup lang="ts">
import { defineEmit, PropType } from 'vue'
import { defineProps } from 'vue'

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
    validator: function (value: MessageColor) {
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
    <a v-if="closable" class="delete" @click="emit('close')"></a>
    <div class="message-body"><slot></slot></div>
  </div>
</template>
