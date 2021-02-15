<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

type SnackImageSize = undefined | 'small'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<SnackImageSize>,
    default: undefined,
    validator: function (value: SnackImageSize) {
      // The value must match one of these strings
      if ([undefined, 'small'].indexOf(value) === -1) {
        console.warn(
          `V-SnackImage: invalid "${value}" size. Should be small or undefined`
        )
        return false
      }

      return true
    },
  },
  white: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="snack" :class="[white && 'is-white', size && `is-${size}`]">
    <div class="snack-media">
      <img
        class="avatar"
        :src="image"
        alt=""
        @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
      />
    </div>
    <span class="snack-text">{{ title }}</span>
    <span class="snack-action">
      <slot></slot>
    </span>
  </div>
</template>
