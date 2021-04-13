<script setup lang="ts">
/**
 * This is a Vue Component that will be
 * automatically mapped to a catch allpath on vue-router (404).
 *
 * You will be able to access this page  at http://localhost:3000/non-existing-page
 *
 * Read more about routing:
 * @see /vite.config.ts
 * @see /src/router.ts
 */

import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  /**
   * replacing path with a leading /404 allow us to detect this
   * on nginx to return a real 404 status code
   *
   * @see /src/nginx/vuejs.conf
   */
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
@import '../scss/abstracts/_variables.scss';
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/generic/_utility.scss';
</style>
