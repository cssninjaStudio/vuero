<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref, watchEffect } from 'vue'
import { isLargeScreen } from '/@src/composition/state/responsiveState'

import { isDark } from '/@src/composition/state/darkModeState.ts'

const isMobileNavOpen = ref(false)

const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

watchEffect(() => {
  if (isLargeScreen.value) {
    isMobileNavOpen.value = false
  }
})
</script>

<template>
  <nav
    class="navbar is-fixed-top is-transparent"
    :class="[!isScrolling && 'is-docked', isMobileNavOpen && 'is-solid']"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <RouterLink :to="{ name: 'index' }" class="navbar-item">
        <div class="brand-icon">
          <AnimatedLogo width="34px" height="34px" />
        </div>
      </RouterLink>

      <a
        role="button"
        :class="[isMobileNavOpen && 'is-active']"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        @click="isMobileNavOpen = !isMobileNavOpen"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="[isMobileNavOpen && 'is-active']">
      <div class="navbar-start">
        <div class="navbar-item">
          <a
            href="https://themeforest.net/item/huro-multipurpose-admin-and-webapp-ui-kit/28933249"
            class="nav-link is-active"
            >Buy Now</a
          >
        </div>

        <div class="navbar-item">
          <a href="#huro-demos-list" class="nav-link is-scroll">Demos</a>
        </div>

        <div class="navbar-item">
          <a href="#huro-demo-elements" class="nav-link is-scroll"
            >UI Elements</a
          >
        </div>

        <div class="navbar-item">
          <a class="nav-link">Docs</a>
        </div>

        <div class="navbar-item">
          <a class="nav-link">Support</a>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item is-theme-toggle">
          <label class="theme-toggle">
            <input
              id="navbar-night-toggle--daynight"
              v-model="isDark"
              type="checkbox"
            />
            <span class="toggler">
              <span class="dark">
                <i class="iconify" data-icon="feather:moon"></i>
              </span>
              <span class="light">
                <i class="iconify" data-icon="feather:sun"></i>
              </span>
            </span>
          </label>
        </div>
        <div class="navbar-item">
          <RouterLink :to="{ name: 'auth-login-1' }" class="nav-link"
            >Login</RouterLink
          >
        </div>
        <div class="navbar-item">
          <RouterLink
            :to="{ name: 'auth-signup-1' }"
            class="button v-button is-rounded is-primary is-raised"
          >
            <strong>Sign up</strong>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
