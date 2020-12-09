<script lang="ts">
import { defineComponent } from 'vue'

import Navbar from '@src/components/Navbar.vue'

const DefaultLayout = defineComponent({
  name: 'DefaultLayout',
  components: {
    Navbar,
  },
  setup() {
    // DefaultLayout - Composition API

    return {}
  },
})

export default DefaultLayout
</script>

<template>
  <Navbar />

  <RouterView />
</template>