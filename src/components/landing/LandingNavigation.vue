<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

import { isDark } from '/@src/composition/state/ui/darkModeState.ts'

const { y } = useWindowScroll()
const isScrolling = computed(() => {
  return y.value > 30
})
</script>

<template>
  <nav
    class="navbar is-fixed-top is-transparent"
    :class="[!isScrolling && 'is-docked']"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <div class="brand-icon">
          <img
            class="light-image-l"
            src="/@images/logos/logo/logo.svg"
            alt=""
          />
          <img
            class="dark-image-l"
            src="/@images/logos/logo/logo-light.svg"
            alt=""
          />
        </div>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
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
                <Icon icon="feather:moon" />
              </span>
              <span class="light">
                <Icon icon="feather:sun" />
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
            class="button h-button is-rounded is-primary is-raised"
          >
            <strong>Sign up</strong>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
