<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

type LoaderSize = undefined | 'small' | 'large' | 'xl'

const props = defineProps({
  size: {
    type: String as PropType<LoaderSize>,
    default: undefined,
    validator: function (value: LoaderSize) {
      // The value must match one of these strings
      if ([undefined, 'small', 'large', 'xl'].indexOf(value) === -1) {
        console.warn(
          `V-Loader: invalid "${value}" size. Should be small, large, xl or undefined`
        )
        return false
      }

      return true
    },
  },
  active: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="v-loader-wrapper" :class="[active && 'is-active']">
    <div class="loader is-loading" :class="[size && `is-${size}`]"></div>
  </div>
</template>
