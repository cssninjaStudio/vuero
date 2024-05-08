/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { App } from 'h3'
import type { StaticParams } from './types'
import { defineLazyEventHandler } from 'h3'

/**
 * Extend h3 app with eventHandler
 *
 * @see https://h3.unjs.io/
 */
export function extendH3App(app: App) {
  app.use('/api/hello-world', defineLazyEventHandler(
    () => import('./handlers/hello-world').then(m => m.default),
  ))
}

export function generateStaticParams(): StaticParams {
  return {
    // '/path/with/dynamic/[slug]': async () => {
    //   return [{ slug: 'first-slug' }, { slug: 'second-slug' }, { slug: 'third-slug' }]
    // },
  }
}
