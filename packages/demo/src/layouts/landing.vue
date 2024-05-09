<script setup lang="ts">
import type {
  LandingNavItem,
  LandingFooterColumn,
  LandingSocialItem,
} from '/@src/components/layouts/landing/landing.types'

const links = ref<LandingNavItem[]>([
  {
    label: 'Buy now',
    to: 'http://go.cssninja.io/buy-vuero',
    active: true,
  },
  {
    label: 'Demos',
    to: '/#vuero-demos',
  },
  {
    label: 'UI Elements',
    to: '/#vuero-components',
  },
  {
    label: 'Docs',
    to: 'https://docs.cssninja.io/vuero',
  },
  {
    label: 'Support',
    to: 'https://cssninja.io/faq/support',
  },
])

const footer = ref<LandingFooterColumn[]>([
  {
    label: 'Vuero',
    children: [
      {
        label: 'Quality',
        to: 'https://cssninja.io/faq/quality',
      },
      {
        label: 'GitHub Access',
        to: 'https://cssninja.io/faq/github-access',
      },
      {
        label: 'Our licenses',
        to: 'https://cssninja.io/faq/licenses',
      },
    ],
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Frequent questions',
        to: 'https://cssninja.io/faq',
      },
      {
        label: 'GitHub access',
        to: 'https://cssninja.io/faq/github-access',
      },
      {
        label: 'Support center',
        to: 'https://cssninja.io/faq/support',
      },
      {
        label: 'Learning',
        to: 'https://docs.cssninja.io',
      },
    ],
  },
  {
    label: 'Terms',
    children: [
      {
        label: 'Terms of Service',
        to: 'https://cssninja.io/about/terms-of-service',
      },
      {
        label: 'Privacy policy',
        to: 'https://cssninja.io/about/privacy-policy',
      },
      {
        label: 'Contact us',
        to: 'https://cssninja.io/company/contact',
      },
    ],
  },
])

const social = ref<LandingSocialItem[]>([
  {
    icon: 'fa6-brands:facebook-f',
    link: 'https://www.facebook.com/cssninjaStudio/',
  },
  {
    icon: 'fa6-brands:github',
    link: 'https://github.com/cssninjaStudio',
  },
  {
    icon: 'fa6-brands:x-twitter',
    link: 'https://twitter.com/cssninjaStudio',
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
        <div class="brand-icon">
          <AnimatedLogo
            width="34px"
            height="34px"
          />
        </div>
      </VLink>
    </template>

    <template #nav-end>
      <div class="navbar-item">
        <VDarkmodeSwitch />
      </div>
      <div class="navbar-item">
        <VLink
          to="/auth/login-3"
          class="nav-link"
        >
          Login
        </VLink>
      </div>
      <div class="navbar-item">
        <VButton
          to="/auth/signup-3"
          color="primary"
          rounded
          raised
        >
          <strong>Signup</strong>
        </VButton>
      </div>
    </template>

    <slot />

    <LandingFooter
      title="Ready to get started?"
      subtitle="Get your Vuero copy now"
      :social
      :links="footer"
    >
      <div class="p-b-10">
        <AnimatedLogo
          width="36px"
          height="36px"
        />

        <div class="footer-description p-t-10 p-b-10">
          Vuero is built for developers and designers. It's modular approach lets you
          create awesome navbars with incredible layouts and elements.
        </div>
        <div class="footer-description" />
      </div>

      <template #action>
        <VButton
          href="http://go.cssninja.io/buy-vuero"
          color="primary"
          rounded
          raised
        >
          Buy <strong>Vuero</strong> on Themeforest
        </VButton>
        <VLink
          to="https://go.cssninja.io/discord"
          class="has-text-primary is-flex is-align-items-center ml-5"
        >
          <span>Join us on Discord</span>
          <VIcon
            class="ml-1"
            icon="lucide:external-link"
          />
        </VLink>
      </template>

      <template #copyright>
        &copy; 2020-{{ new Date().getFullYear() }} <br>
        Designed and coded with
        <VIcon icon="fas fa-heart" class="has-text-danger" /> by
        <VLink
          to="https://cssninja.io"
          class="has-text-primary"
        >
          CSS Ninja.
        </VLink>
      </template>
    </LandingFooter>
  </LandingLayout>
</template>
