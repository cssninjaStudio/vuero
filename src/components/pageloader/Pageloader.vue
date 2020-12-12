<script lang="ts">
import { defineComponent } from 'vue'

const Pageloader = defineComponent({
  name: 'Pageloader',
  components: {},
  setup() {
    // Pageloader - Composition API

    return {}
  },
})

export default Pageloader
</script>

<template>
  <!-- Pageloader -->
  <div class="pageloader"></div>
  <div class="infraloader is-active"></div>
</template>