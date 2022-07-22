import { createRouter as createClientRouter, createWebHistory } from '@vue-router'

/**
 * Here is how a simple route is generated:
 * import { RouteRecordRaw } from '@vue-router'
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
 * import { RouteRecordRaw } from '@vue-router'
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

    // handle scroll behavior between routes
    scrollBehavior: (to, _, savedPosition) => {
      // Scroll to heading on click
      if (to.hash) {
        if (to.hash === '#') {
          return {
            top: 0,
            behavior: 'smooth',
          }
        }

        const el = document.querySelector(to.hash)

        // vue-router does not incorporate scroll-margin-top on its own.
        if (el) {
          const top = parseFloat(getComputedStyle(el).scrollMarginTop)
          if (el instanceof HTMLElement) {
            el.focus()
          }

          return {
            el: to.hash,
            behavior: 'smooth',
            top,
          }
        }

        return {
          el: to.hash,
          behavior: 'smooth',
        }
      }

      // Scroll to top of window
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    },
  })

  return router
}
