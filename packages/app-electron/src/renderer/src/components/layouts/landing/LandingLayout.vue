<script setup lang="ts">
import type { LandingNavItem } from './landing.types'

const props = withDefaults(defineProps<{
  links: LandingNavItem[]
}>(), {
  links: () => [],
})
</script>

<template>
  <MinimalLayout theme="light">
    <main class="landing-page-wrapper">
      <LandingGrids />

      <div class="hero">
        <LandingNavigation>
          <template #logo>
            <slot name="logo" />
          </template>
          <template #end>
            <slot name="nav-end" />
          </template>

          <slot name="nav-links">
            <div
              v-for="link in props.links"
              :key="link.label"
              class="navbar-item"
            >
              <VLink
                :to="link.to"
                class="nav-link"
                :class="[link.active && 'is-active']"
              >
                {{ link.label }}
              </VLink>
            </div>
          </slot>
        </LandingNavigation>
      </div>

      <slot />
    </main>
  </MinimalLayout>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/layout/landing';
</style>
