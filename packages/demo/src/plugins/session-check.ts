import { definePlugin } from '/@src/utils/plugins'

/**
 * Here we are setting up two router navigation guards
 * (note that we can have multiple guards in multiple plugins)
 *
 * We can add meta to pages either by declaring them manualy in the
 * routes declaration (see /@src/router.ts)
 * or by adding a <route> tag into .vue files (see /@src/pages/sidebar/dashboards.ts)
 *
 * <script setup lang="ts">
 * definePage({
 *   meta: {
 *     requiresAuth: true,
 *   },
 * })
 * </script>
 *
 * <template>
 *  // HTML content
 * </template>
 */
export default definePlugin(async ({ router, pinia, event }) => {
  const userSession = useUserSession(pinia)
  const token = useUserToken(event)
  const $fetch = useApiFetch(event)

  // 1. Load user profile if token is present.
  // When using SSR, it should be hydrated from the server
  if (token.value && !userSession.user) {
    try {
      // Do api request call to retreive user profile.
      // Note that the api is provided with json-server
      const user = await $fetch('/api/users/me')
      userSession.setUser(user)
    }
    catch (err) {
      // Delete stored token if it fails
      token.value = undefined
    }
  }

  // 2. If the page requires auth, check if user is logged in
  // if not, redirect to login page.
  router.beforeEach((to) => {
    const token = useUserToken(event)
    if (to.meta.requiresAuth && !token.value) {
      return {
        name: '/auth/login',
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      }
    }
  })
})
