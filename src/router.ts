import {
  createRouter as createClientRouter,
  createWebHistory,
  createMemoryHistory,
  setupDataFetchingGuard,
} from 'vue-router/auto'

/*
 * By default, this plugins checks the folder at src/pages for any .vue files
 * and generates the corresponding routing structure basing itself in the file name.
 * This way, you no longer need to maintain a routes array when adding routes to your application,
 * instead just add the new .vue component to the routes folder and let this plugin do the rest!
 *
 * Let's take a look at a simple example:
 *
 * src/pages/
 * ├── index.vue
 * ├── about.vue
 * └── users/
 *     ├── index.vue
 *     └── [id].vue
 * This will generate the following routes:
 *
 * /: -> renders the index.vue component
 * /about: -> renders the about.vue component
 * /users: -> renders the users/index.vue component
 * /users/:id: -> renders the users/[id].vue component. id becomes a route param.
 *
 * View more examples:
 * @see https://github.com/posva/unplugin-vue-router#routes-folder-structure
 */
export function createRouter() {
  const router = createClientRouter({
    /**
     * If you need to serve vuero under a subdirectory,
     * you have to set the name of the directory in createWebHistory here
     * and update "base" config in vite.config.ts
     */
    // history: createWebHistory('my-subdirectory'),
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),

    /**
     * You can extend existing routes:
     */
    // extendRoutes: (routes) => {
    //   const adminRoute = routes.find((r) => r.name === '/admin')
    //   if (!adminRoute) {
    //     adminRoute.meta ??= {}
    //     adminRoute.meta.requiresAuth = true
    //   }
    //   // completely optional since we are modifying the routes in place
    //   return routes
    // },

    // handle scroll behavior between routes
    scrollBehavior: (to, from, savedPosition) => {
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
      } else if (to.path !== from.path) {
        return { top: 0 }
      }
    },
  })

  /**
   * Data Fetching is an experimental feature from vue & vue-router
   *
   * @see https://github.com/vuejs/rfcs/discussions/460
   * @see https://github.com/posva/unplugin-vue-router/tree/main/src/data-fetching
   */
  setupDataFetchingGuard(router)

  return router
}
