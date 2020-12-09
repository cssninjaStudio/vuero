<script lang="ts">
import { ref, defineComponent } from 'vue'

const Hero = defineComponent({
  name: 'Hero',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  setup() {
    // Hero - Composition API

    return {}
  },
})

export default Hero
</script>

<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <h2 v-if="subtitle" class="subtitle">{{ subtitle }}</h2>

        <slot></slot>
      </div>
    </div>
  </section>
</template>
