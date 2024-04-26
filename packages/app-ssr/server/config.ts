/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { App } from 'h3'
import type { StaticParams } from './types'

/**
 * Extend h3 app with eventHandler
 *
 * @see https://h3.unjs.io/
 */
export function extendH3App(app: App) {
  // app.use('/api/hello/:name', eventHandler(async (event) => {
  //   const query = getQuery(event)
  //   const params = getRouterParams(event)

  //   return `Hello ${params.name}!`
  // }))
}

export function generateStaticParams(): StaticParams {
  return {
    // '/path/with/dynamic/[slug]': async () => {
    //   return [{ slug: 'first-slug' }, { slug: 'second-slug' }, { slug: 'third-slug' }]
    // },
  }
}

// https://vuejs.org/api/compile-time-flags.html
// @ts-ignore - vue feature flags
globalThis.__VUE_OPTIONS_API__ = false
// @ts-ignore - vue feature flags
globalThis.__VUE_PROD_DEVTOOLS__ = false
// @ts-ignore - vue feature flags
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false
