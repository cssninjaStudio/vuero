<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    label: {
        type: String,
        required: true,
        default: 'Label'
    },
     color: {
        type: String,
        default: ''
    },
    light: {
        type: Boolean,
        default: false
    },
    rounded: {
        type: Boolean,
        default: false
    },
    curved: {
        type: Boolean,
        default: false
    },
    outlined: {
        type: Boolean,
        default: false
    },
    elevated: {
        type: Boolean,
        default: false
    },
})
</script>

<template>
  <span
    class="tag"
    :class="[
      color && 'is-' + color,
      rounded && 'is-rounded',
      curved && 'is-curved',
      outlined && 'is-outlined',
      light && 'is-light',
      elevated && 'is-elevated',
    ]"
    >{{ props.label }}</span
  >
</template>