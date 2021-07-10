<script setup lang="ts">
import type { PropType } from 'vue'

type CardRadius = 'regular' | 'smooth' | 'rounded'

const props = defineProps({
  radius: {
    type: String as PropType<CardRadius>,
    default: 'regular',
    validator: (value: CardRadius) => {
      // The value must match one of these strings
      if (['regular', 'smooth', 'rounded'].indexOf(value) === -1) {
        console.warn(
          `V-CardAdvanced: invalid "${value}" radius. Should be regular, smooth or rounded`
        )
        return false
      }

      return true
    },
  },
})
</script>

<template>
  <div
    :class="[
      radius === 'regular' && 's-card-advanced',
      radius === 'smooth' && 'r-card-advanced',
      radius === 'rounded' && 'l-card-advanced',
    ]"
  >
    <div class="card-head">
      <div class="left">
        <slot name="header-left"></slot>
      </div>
      <div class="right">
        <slot name="header-right"></slot>
      </div>
    </div>
    <div class="card-body">
      <slot name="content"></slot>
    </div>
    <div class="card-foot">
      <div class="left">
        <slot name="footer-left"></slot>
      </div>
      <div class="right">
        <slot name="footer-right"></slot>
      </div>
    </div>
  </div>
</template>
