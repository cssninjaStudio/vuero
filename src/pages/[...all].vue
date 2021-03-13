<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

onMounted(() => {
  if (!route.path.startsWith('/404')) {
    window.location.href = `/404${route.fullPath}`
  }
})

useHead({
  title: 'Page not found - Vuero',
  meta: [
    {
      name: 'robots',
      content: 'noindex',
    },
  ],
})
</script>

<template>
  <MinimalLayout>
    <div class="error-container">
      <div class="error-wrapper">
        <div class="error-inner has-text-centered">
          <div class="bg-number">404</div>
          <img
            src="/@src/assets/illustrations/placeholders/error-1.svg"
            alt=""
          />
          <h3>We couldn't find that page</h3>
          <p>
            Looks like we couldn't find that page. Please try again or contact
            an administrator if the problem persists.
          </p>
          <div class="button-wrap">
            <V-Button color="primary" elevated :to="{ name: 'index' }">
              Take me Back
            </V-Button>
          </div>
        </div>
      </div>
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
@import '../assets/scss/abstracts/_variables.scss';
@import '../assets/scss/abstracts/_mixins.scss';
@import '../assets/scss/pages/generic/_utility.scss';
</style>
