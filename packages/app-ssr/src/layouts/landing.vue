<script setup lang="ts">
import type {
  LandingNavItem,
} from '/@src/components/layouts/landing/landing.types'

const links = ref<LandingNavItem[]>([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'App',
    to: '/app',
  },
])
</script>

<template>
  <LandingLayout :links>
    <template #logo>
      <VLink
        to="/#"
        class="navbar-item"
      >
        <!-- your logo -->
      </VLink>
    </template>

    <template #nav-end>
      <div class="navbar-item">
        <VDarkmodeSwitch />
      </div>
      <div class="navbar-item">
        <VLink
          to="/auth"
          class="nav-link"
        >
          Login
        </VLink>
      </div>
      <div class="navbar-item">
        <VButton
          to="/auth/signup"
          color="primary"
          rounded
          raised
        >
          <strong>Signup</strong>
        </VButton>
      </div>
    </template>

    <slot />
  </LandingLayout>
</template>
