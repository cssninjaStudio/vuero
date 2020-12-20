<script lang="ts">
import { defineComponent } from 'vue'

const Icon = defineComponent({
  name: 'Icon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  setup() {
    // Icon - Composition API

    return {}
  },
})

export default Icon
</script>

<template>
  <span class="iconify" :data-icon="icon" />
</template>