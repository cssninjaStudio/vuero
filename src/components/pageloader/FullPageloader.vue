<script lang="ts">
import { defineComponent } from 'vue'

const FullPageloader = defineComponent({
  name: 'FullPageloader',
  components: {},
  setup() {
    // FullPageloader - Composition API

    return {}
  },
})

export default FullPageloader
</script>

<template>
  <!-- Pageloader -->
  <div class="pageloader is-full"></div>
  <div class="infraloader is-full is-active"></div>
</template>