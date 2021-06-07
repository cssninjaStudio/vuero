<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, defineProps } from 'vue'

import { useWindowScroll } from '@vueuse/core'

type NavbarTheme = 'default' | 'colored' | 'fade'

const props = defineProps({
  theme: {
    type: String as PropType<NavbarTheme>,
    default: 'default',
  },
})

const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})
</script>

<template>
  <div
    class="navbar-navbar"
    :class="[
      isScrolling && 'is-scrolled',
      props.theme === 'fade' && 'is-transparent',
      props.theme === 'colored' && 'is-colored',
    ]"
  >
    <div class="navbar-navbar-inner">
      <div class="left">
        <!-- Title slot -->
        <slot name="title">
          <h1 class="title is-5">Page Title</h1>
        </slot>
      </div>
      <div class="center">
        <!-- Links slot -->
        <slot name="links">
          <div class="centered-links">
            <a href="/" class="centered-link centered-link-toggle">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:activity"
              ></i>
              <span>Homepage</span>
            </a>
          </div>

          <!-- 
          Dropdown default links
          <div class="centered-drops">
            <div class="centered-drop">
              <div
                class="dropdown is-modern is-spaced dropdown-trigger has-mega-dropdown"
              >
                <div class="is-trigger">
                  <a
                    href="/"
                    class="button v-button is-rounded"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                  >
                    <span>Homepage</span>
                    <span class="caret">
                      <i aria-hidden="true" class="iconify" data-icon="feather:chevron-down"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> 
          -->
        </slot>
      </div>
      <div class="right">
        <!-- Toolbar slot -->
        <slot name="toolbar"></slot>
      </div>
    </div>
  </div>

  <!-- Subnav slot -->
  <slot name="subnav"></slot>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';
@import '../../../scss/layout/_navbar.scss';
@import '../../../scss/layout/_responsive.scss';
</style>
