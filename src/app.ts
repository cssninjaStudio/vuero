import {
  createApp as createClientApp,
  h,
  VNode,
  resolveDynamicComponent,
  Transition,
  provide,
  App,
} from 'vue'
import { RouterView } from 'vue-router'
import { createHead } from '@vueuse/head'
import { createI18n } from './i18n'
import { createRouter } from './router'

import {
  initUserSession,
  userSessionSymbol,
} from '/@src/composable/useUserSession'
import { initApi, apiSymbol } from '/@src/composable/useApi'
import useNotyf from '/@src/composable/useNotyf'

type VueroAppOptions = {
  enhanceApp?: (app: App) => Promise<void>
}

export async function createApp({ enhanceApp }: VueroAppOptions) {
  const head = createHead()
  const i18n = createI18n()
  const router = createRouter()
  const session = initUserSession()
  const api = initApi(session)

  /**
   * Here you can check if your user has a token stored
   * and check with your api if it still valid before your app start
   */
  // if (session.isLoggedIn) {
  //   try {
  //     // do api request call to retreive its profile
  //     const user = await api.get('/users/me')
  //     session.user = user
  //   } catch (err) {
  //     // delete stored token if it fails
  //     session.token = ''
  //   }
  // }

  const app = createClientApp({
    // This is the global app setup function
    setup() {
      /**
       * We provide user state and api to our entire app
       * We can then inject them later in any component
       *
       * @see /@src/composable/useApi and /@src/composable/useUserSession
       */
      provide(userSessionSymbol, session)
      provide(apiSymbol, api)

      /**
       * Here we are creating a render function for our router view with
       * a Transition for the inner component
       * Template equivalent would be:
       *
       * <RouterView v-slot="{ Component }">
       *   <transition name="fade-slow" mode="out-in">
       *     <component :is="Component" />
       *   </transition>
       * </RouterView>
       */
      return () => {
        const defaultSlot = ({ Component: _Component }: any) => {
          const Component = resolveDynamicComponent(_Component) as VNode

          return [
            h(
              Transition,
              { name: 'fade-slow', mode: 'out-in' },
              {
                default: () => [h(Component)],
              }
            ),
          ]
        }

        return h(RouterView, null, {
          default: defaultSlot,
        })
      }
    },
  })

  /**
   * Here we are setting up router navigation guards
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
  router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !session.isLoggedIn) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      const notif = useNotyf()
      notif.error(
        'Sorry, you should loggin to access this section (anything will work)'
      )

      return {
        // Will follow the redirection set in /@src/pages/auth/index.vue
        name: 'auth',
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      }
    }
  })

  app.use(head)
  app.use(router)
  app.use(i18n)

  if (enhanceApp) {
    await enhanceApp(app)
  }

  return app
}
