<script setup lang="ts">
import type { PropType } from 'vue'

type LoaderSize = undefined | 'small' | 'large' | 'xl'
type LoaderWrapperRadius = undefined | 'regular' | 'smooth' | 'rounded'

const props = defineProps({
  size: {
    type: String as PropType<LoaderSize>,
    default: undefined,
    validator: (value: LoaderSize) => {
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
  card: {
    type: String as PropType<LoaderWrapperRadius>,
    default: undefined,
    validator: (value: LoaderWrapperRadius) => {
      // The value must match one of these strings
      if ([undefined, 'regular', 'smooth', 'rounded'].indexOf(value) === -1) {
        console.warn(
          `V-Loader: invalid "${value}" card. Should be regular, smooth, rounded or undefined`
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
  grey: {
    type: Boolean,
    default: false,
  },
  translucent: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="has-loader" :class="[active && 'has-loader-active']">
    <div
      v-if="active"
      class="v-loader-wrapper is-active"
      :class="[
        grey && 'is-grey',
        translucent && 'is-translucent',
        card === 'regular' && 's-card',
        card === 'smooth' && 'r-card',
        card === 'rounded' && 'l-card',
      ]"
    >
      <div class="loader is-loading" :class="[size && `is-${size}`]"></div>
    </div>

    <slot></slot>
  </div>
</template>
