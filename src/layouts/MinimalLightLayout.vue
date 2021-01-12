<script lang="ts">
import { defineComponent } from 'vue'

const MinimalLightLayout = defineComponent({
  name: 'MinimalLightLayout',
  inheritAttrs: false,
  setup() {
    // MinimalLightLayout - Composition API

    return {}
  },
})

export default MinimalLightLayout
</script>

<template>
  <div class="minimal-wrapper light">
    <slot></slot>
  </div>
</template>
