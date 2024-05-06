<script setup lang="ts">
import 'iconify-icon'

useHead(() => ({
  title: 'My App',
  link: [
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/svg+xml',
    },
    {
      rel: 'style',
      href: '/vendors/font-awesome-v5.css',
    },
    {
      rel: 'style',
      href: '/vendors/line-icons-pro.css',
    },
  ],
  meta: [
    // Critical Tags
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
  ],
  script: [
    {
      innerHTML: `;(function () {
        const prefersDark =
          window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        const setting = localStorage.getItem('color-schema') || 'auto'
        if (setting === 'dark' || (prefersDark && setting !== 'light'))
          document.documentElement.classList.toggle('is-dark', true)
      })()`
    }
  ]
}))
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
