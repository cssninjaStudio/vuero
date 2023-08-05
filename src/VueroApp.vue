<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { initDarkmode } from '/@src/stores/darkmode'

// This is the global app setup function
const { locale } = useI18n()

const rtlCodes = [
  'ar',
  'arc',
  'dv',
  'fa',
  'ha',
  'he',
  'khw',
  'ks',
  'ku',
  'ps',
  'ur',
  'yi',
]

useHead(() => ({
  title: 'Vuero - Vue 3 Admin and Webapp UI Kit',
  link: [
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/svg+xml',
    },
    {
      rel: 'alternate icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
      sizes: '16x16',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180',
    },
    {
      rel: 'mask-icon',
      href: '/favicon.svg',
      type: 'image/svg+xml',
      color: '#FFFFFF',
    },
  ],
  meta: [
    // Critical Tags
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
    // PWA theme color
    {
      name: 'theme-color',
      content: '#ffffff',
    },
    {
      name: 'msapplication-TileColor',
      content: '#232326',
    },
    // SEO
    {
      name: 'robots',
      content: 'index,follow,max-image-preview:large',
    },
    {
      name: 'description',
      content:
        'Vuero is more than a dashboard template, it is design system built with Vue, Bulma and Typescript. It ships with more than 200+ demo pages and a components.',
    },
    // Open Graph
    {
      property: 'og:site_name',
      content: 'Vuero by Css Ninja',
    },
    {
      property: 'og:locale',
      content: 'en_US',
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      property: 'og:url',
      content: 'https://vuero.cssninja.io/',
    },
    {
      property: 'og:image:type',
      content: 'image/png',
    },
    {
      property: 'og:image:width',
      content: '1200',
    },
    {
      property: 'og:image:height',
      content: '630',
    },
    {
      property: 'og:image',
      content:
        'https://media.cssninja.io/embed/marketplace/product/wide.png?headline=Vue%203%20Admin%20and%20Webapp%20UI%20Kit&url=https%3A%2F%2Fcdn.schema.io%2Fcssninja%2F62671c0f1bfb2b0019e066aa%2F5badfba048f6ec5250e5e1a4e35cc5d2&previewUrl=https%3A%2F%2Fcdn.schema.io%2Fcssninja%2F62509cb6c752bf01326ee966%2Fa0c4a94938866331845447c595aacef2',
    },
    // Twitter
    {
      name: 'twitter:site',
      content: '@cssninjaStudio',
    },
  ],
  htmlAttrs: {
    lang: locale.value,
    dir: rtlCodes.includes(locale.value) ? 'rtl' : 'ltr',
  },
}))

/**
 * Initialize the darkmode watcher
 *
 * @see /@src/stores/darkmode
 */
initDarkmode()
</script>

<template>
  <div>
    <Suspense>
      <RouterView v-slot="{ Component }">
        <Transition
          name="fade-slow"
          mode="out-in"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </Suspense>
    <ClientOnly>
      <VReloadPrompt app-name="Vuero" />
    </ClientOnly>
  </div>
</template>
