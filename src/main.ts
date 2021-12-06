/**
 * This is your client vue app entrypoint
 * Its loaded because it is referenced in the vite
 * entrypoint file (index.html located at the root of this project)
 *
 * External css/js files will be loaded as dependencies.
 * You may want to check the vite configuration.
 * Some plugins will register virtual components or lazyload other for us.
 *
 * @see /index.html
 * @see /vite.config.ts
 */
import { AxiosInstance } from 'axios'
import { App } from 'vue'
import { Router } from 'vue-router'
import { createApp } from './app'
import { useNotyf } from './composable/useNotyf'
import { useUserSession } from './stores/userSession'

// Lazy load aditional components
async function registerGlobalComponents(app: App) {
  const VCalendar = (await import('v-calendar')).default
  const VueMultiselect = (await import('@vueform/multiselect')).default
  const VueSlider = (await import('@vueform/slider')).default
  const VueTippy = (await import('vue-tippy')).default

  const background = (await import('./directives/background')).default
  const tooltip = (await import('./directives/tooltip')).default

  app.use(VCalendar)
  app.use(VueTippy, {
    defaultProps: {
      theme: 'light',
    },
  })

  app.component(VueMultiselect.name, VueMultiselect)
  app.component(VueSlider.name, VueSlider)

  app.directive('background', background)
  app.directive('tooltip', tooltip)
}

/**
 * Here we are setting up two router navigation guards
 *
 * We can add meta to pages either by declaring them manualy in the
 * routes declaration (see /@src/router.ts)
 * or by adding a <route> tag into .vue files (see /@src/pages/sidebar/dashboards.ts)
 *
 * <route lang="yaml">
 * meta:
 *   requiresAuth: true
 * </route>
 *
 * <script setup lang="ts">
 *  // TS script
 * </script>
 *
 * <template>
 *  // HTML content
 * </template>
 */
function registerRouterNavigationGuards(router: Router, api: AxiosInstance) {
  router.beforeEach(async (to, from) => {
    const userSession = useUserSession()
    const notyf = useNotyf()

    if (!from?.name && userSession.isLoggedIn) {
      // 1. If the name is not set, it means we are navigating to the first page
      // and we are logged in, so we should check user information from the server
      try {
        // Do api request call to retreive user profile.
        // Note that the api is provided with json-server
        const { data: user } = await api.get('/api/users/me')
        userSession.setUser(user)
        notyf.success(`Welcome back, ${user.name}`)
      } catch (err) {
        // delete stored token if it fails
        userSession.logoutUser()
        notyf.error('Your session is invalid')

        if (to.meta.requiresAuth) {
          // redirect the user somewhere
          return {
            // Will follow the redirection set in /@src/pages/auth/index.vue
            name: 'auth',
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
          }
        }
      }
    } else if (to.meta.requiresAuth && !userSession.isLoggedIn) {
      // 2. If the requires auth via requiresAuth meta, check if user is logged in
      // if not, redirect to login page.
      notyf.error({
        message: 'Sorry, you should loggin to access this section (anything will work)',
        duration: 7000,
      })

      return {
        // Will follow the redirection set in /@src/pages/auth/index.vue
        name: 'auth',
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      }
    }
  })
}

/**
 * We create our app and mount it when it is ready
 *
 * @see /@src/app.ts for more detailed informations
 */
createApp().then(async ({ app, router, api }) => {
  // register router middleware
  registerRouterNavigationGuards(router, api)

  // register global components
  await registerGlobalComponents(app)

  // wait for the app to be ready
  await router.isReady()

  // finaly mount the app to the DOM
  app.mount('#app')
})
