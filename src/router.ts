import {
  createRouter as createClientRouter,
  createWebHistory,
} from 'vue-router'
import * as NProgress from 'nprogress'

/**
 * routes are generated using vite-plugin-pages
 * each .vue files located in the ./src/pages are registered as a route
 * @see https://github.com/hannoeru/vite-plugin-pages
 */
import routes from 'pages-generated'

/**
 * Here is how a simple route is generated:
 * import { RouteRecordRaw } from 'vue-router'
 *
 * const routes: RouteRecordRaw = [{
 *    component: () => import('/src/pages/wizard-1.vue'),
 *    name: 'wizard-v1',
 *    path: '/wizard-v1',
 *    props: true,
 *    meta: {
 *      requiresAuth: true
 *    },
 * }]
 *
 * Here is how nested routes are generated:
 * import { RouteRecordRaw } from 'vue-router'
 *
 * const routes: RouteRecordRaw = [{
 *    component: () => import('/src/pages/auth.vue'),
 *    path: '/auth',
 *    props: true,
 *    children: [
 *      {
 *        component: () => import('/src/pages/auth/login-1.vue'),
 *        name: 'auth-login-1',
 *        path: 'login-1',
 *        props: true
 *      },
 *    ],
 * }]
 *
 * Uncomment the line below to view the generated routes
 */
// console.log(routes)

export function createRouter() {
  const router = createClientRouter({
    /**
     * If you need to serve vuero under a subdirectory,
     * you have to set the name of the directory in createWebHistory here
     * and update "base" config in vite.config.ts
     */
    // history: createWebHistory('my-subdirectory'),
    history: createWebHistory(),
    routes,
  })

  /**
   * Handle NProgress display on page changes
   */
  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })

  return router
}
