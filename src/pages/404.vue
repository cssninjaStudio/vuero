<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowLeftIcon } from '@zhuowenli/vue-feather-icons'

import Hero from '@src/components/Hero.vue'

const NotFoundPage = defineComponent({
  name: 'NotFoundPage',
  components: {
    Hero,
    ArrowLeftIcon,
  },
  setup() {
    // NotFoundPage - Composition API

    return {}
  },
})

export default NotFoundPage
</script>

<template>
  <Hero
    class="is-warning"
    title="Page not found :("
    subtitle="Sorry the page you are looking is missing"
  >
    <RouterLink class="button" :to="{ name: 'index' }">
      <ArrowLeftIcon />
      <span>Back to homepage</span>
    </RouterLink>
  </Hero>
</template>


<style lang="scss" scoped>
.button {
  svg {
    margin: 0 8px 0 0;
  }
}
</style>