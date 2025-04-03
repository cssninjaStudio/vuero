import type { ViteDevServer } from 'vite'

import type { VueroServerRender } from '../types'
import { readFileSync } from 'node:fs'
import {
  eventHandler,
  getRequestURL,
  setResponseHeader,
  setResponseStatus,
} from 'h3'
import { isDebug, isProduction } from 'std-env'

import { resolve } from '../utils'

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
      if (!isProduction && vite) {
        const url = getRequestURL(event)
        // always read fresh template in dev
        template = readFileSync(resolve('../index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url.pathname, template)

        // reload the server entrypoint on every request in dev
        render = (await vite.ssrLoadModule('/src/entry-server.ts')).render
      }

      // render the vue app to HTML
      return await render({
        event,
        manifest,
        template,
      })
    }
    catch (error: any) {
      // handle error 500 page
      if (!isProduction || isDebug) {
        setResponseHeader(event, 'Cache-Control', 'no-cache, no-store, must-revalidate')
        setResponseStatus(event, 500)

        vite?.ssrFixStacktrace(error)
        console.error('[dev] [pageError] ', error)

        const Youch = await import('youch').then(m => m.Youch)
        const youch = new Youch()
        return await youch.toHTML(error, {
          title: 'An error occurred during Vuero server rendering',
        })
      }
      else {
        setResponseHeader(event, 'Cache-Control', 'no-cache, no-store, must-revalidate')
        setResponseStatus(event, 500)

        console.error(`[pageError] ${error}`)
        return 'Internal Server Error'
      }
    }
  })
}
