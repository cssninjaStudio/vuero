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
        <LandingNavigation :links="props.links">
          <template #logo>
            <slot name="logo" />
          </template>
          <template #end>
            <slot name="nav-end" />
          </template>
        </LandingNavigation>
      </div>

      <slot />
    </main>
  </MinimalLayout>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/_demo/landing';
</style>
