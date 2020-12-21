<script lang="ts">
import { defineComponent } from 'vue'

const MinimalLayout = defineComponent({
  name: 'MinimalLayout',
  inheritAttrs: false,
  setup() {
    // MinimalLayout - Composition API

    return {}
  },
})

export default MinimalLayout
</script>

<template>
  <div class="minimal-wrapper darker">
    <slot></slot>
  </div>
</template>