<script lang="ts">
import { defineComponent } from 'vue'

const LandingNavigation = defineComponent({
  name: 'LandingNavigation',
  components: {},
  setup() {
    // LandingNavigation - Composition API

    return {}
  },
})

export default LandingNavigation
</script>

<template>
  <nav
    class="navbar is-fixed-top is-transparent is-docked"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <div class="brand-icon">
          <img
            class="light-image-l"
            src="assets/img/logos/logo/logo.svg"
            alt=""
          />
          <img
            class="dark-image-l"
            src="assets/img/logos/logo/logo-light.svg"
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
            target="_blank"
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
            <input id="navbar-night-toggle--daynight" type="checkbox" />
            <span class="toggler">
              <span class="dark">
                <i data-feather="moon"></i>
              </span>
              <span class="light">
                <i data-feather="sun"></i>
              </span>
            </span>
          </label>
        </div>
        <div class="navbar-item">
          <a href="/auth-login.html" class="nav-link">Login</a>
        </div>
        <div class="navbar-item">
          <a
            href="/auth-signup.html"
            class="button h-button is-rounded is-primary is-raised"
          >
            <strong>Sign up</strong>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>