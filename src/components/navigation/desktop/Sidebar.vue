<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'

type SidebarTheme =
  | 'default'
  | 'color'
  | 'color-curved'
  | 'curved'
  | 'float'
  | 'labels'
  | 'labels-hover'

const props = defineProps({
  theme: {
    type: String as PropType<SidebarTheme>,
    default: 'default',
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
})
const themeClasses = computed(() => {
  switch (props.theme) {
    case 'color':
      return 'is-colored'
    case 'labels':
      return 'has-labels'
    case 'labels-hover':
      return 'has-labels-hover'
    case 'float':
      return !props.isOpen ? 'is-float' : 'is-float is-bordered'
    case 'curved':
      return !props.isOpen ? 'is-curved' : ''
    case 'color-curved':
      return !props.isOpen ? 'is-colored is-curved' : 'is-colored'
    default:
      return ''
  }
})
</script>

<template>
  <div class="main-sidebar" :class="[themeClasses]">
    <div class="sidebar-brand">
      <RouterLink :to="{ name: 'index' }">
        <AnimatedLogo width="36px" />
      </RouterLink>
    </div>
    <div class="sidebar-inner">
      <div class="naver"></div>

      <ul class="icon-menu">
        <slot name="links"></slot>
      </ul>

      <!-- User account -->
      <ul class="bottom-menu">
        <slot name="bottom-links"></slot>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/layout/_sidebar.scss';
</style>
