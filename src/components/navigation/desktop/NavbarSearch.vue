<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useWindowScroll } from '@vueuse/core'

type NavbarSearchTheme = 'default' | 'center' | 'fade'

const props = defineProps({
  theme: {
    type: String as PropType<NavbarSearchTheme>,
    default: 'default',
  },
})

const route = useRoute()
const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})
</script>

<template>
  <div
    class="navbar-navbar-clean"
    :class="[
      isScrolling && 'is-scrolled',
      props.theme === 'fade' && 'is-transparent',
    ]"
  >
    <div class="navbar-navbar-inner">
      <!-- Title slot -->
      <div class="left">
        <slot name="title">
          <h1 class="title is-6">Page Title</h1>
        </slot>
      </div>
      <div class="center">
        <slot name="search"></slot>
      </div>
      <div class="right">
        <!-- Toolbar slot -->
        <slot name="toolbar"></slot>
      </div>
    </div>
    <div
      class="navbar-navbar-lower"
      :class="[
        props.theme === 'default' && 'is-between',
        props.theme === 'center' && 'is-centered',
        props.theme === 'fade' && 'is-centered',
      ]"
    >
      <div v-if="props.theme !== 'default'" class="left">
        <div class="welcome-text">
          <slot name="subtitle"></slot>
        </div>
      </div>
      <div
        :class="[
          props.theme === 'default' && 'left',
          props.theme === 'center' && 'center',
          props.theme === 'fade' && 'center',
        ]"
      >
        <slot name="links">
          <div class="buttons">
            <a href="/" class="button">Homepage</a>
          </div>
        </slot>
      </div>
      <div class="right">
        <slot name="toolbar-bottom"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';
@import '../../../scss/layout/_navbar-extension.scss';
@import '../../../scss/layout/_responsive.scss';
</style>
