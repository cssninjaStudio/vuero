<script lang="ts">
import { defineComponent } from 'vue'

import Hero from '@src/components/Hero.vue'

const IndexPage = defineComponent({
  name: 'IndexPage',
  components: {
    Hero,
  },
  setup() {
    // IndexPage - Composition API

    return {}
  },
})

export default IndexPage
</script>

<template>
  <Hero class="is-primary" title="Home page" subtitle="Just start hacking !" />
</template>