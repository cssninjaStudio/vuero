import { readFileSync } from 'node:fs'

import {
  setResponseStatus,
  setHeader,
  getRequestURL,
  eventHandler,
} from 'h3'
import type { ViteDevServer } from 'vite'
import { minify } from 'html-minifier-terser'

import type { VueroServerRender } from '../types'
import { isProd, resolve } from '../utils'
import { options } from '../config'

export function createEventHandler({
  vite,
  render,
  template: baseTemplate,
  manifest,
}: {
  vite?: ViteDevServer
  render: VueroServerRender
  template: string
  manifest: Record<string, any>
}) {
  return eventHandler(async (event) => {
    try {
      // load template and render function from vue app
      let template = baseTemplate
      if (!isProd && vite) {
        const url = getRequestURL(event)
        // always read fresh template in dev
        template = readFileSync(resolve('../index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url.pathname, template)
      }

      // render the vue app to HTML
      const html = await render({
        event,
        manifest,
        template,
      })

      if (typeof html === 'string') {
        // return html
        return minify(html, options)
      }
    }
    catch (error: any) {
      // handle error 500 page
      if (!isProd) {
        setHeader(event, 'Cache-Control', 'no-cache, no-store, must-revalidate')
        setResponseStatus(event, 500)

        vite?.ssrFixStacktrace(error)
        console.error('[dev] [pageError] ', error)

        return error.message
      }
      else {
        setHeader(event, 'Cache-Control', 'no-cache, no-store, must-revalidate')
        setResponseStatus(event, 500)

        console.error('[pageError] ' + error)
        return 'Internal Server Error'
      }
    }
  })
}
