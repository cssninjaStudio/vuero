/* eslint-disable @typescript-eslint/ban-ts-comment */

import { readFileSync } from 'node:fs'
import type { ViteDevServer } from 'vite'

import type { VueroServerRender } from '../types.js'
import { isProduction } from 'std-env'
import { resolve } from '../utils.js'

export async function createRenderer() {
  let vite: ViteDevServer | undefined
  let render: VueroServerRender

  if (!isProduction) {
    const createServer = await import('vite').then(m => m.createServer)

    vite = await createServer({
      root: process.cwd(),
      logLevel: 'info',
      appType: 'custom',
      server: {
        middlewareMode: true,
      },
      define: {
        __VUERO_SSR_BUILD__: true,
      },
    })

    // mock renderer, it will be reloaded on each request in dev
    render = async () => ''
  }
  else {
    /**
     * Otherwise, we load compiled version,
     * and we register compression and serve-static express handlers in h3
     *
     * @see https://github.com/expressjs/compression
     * @see https://github.com/expressjs/serve-static
     */

    // @ts-ignore  - file present only when built
    render = await import('../../dist/server/entry-server.mjs').then(m => m.render)
  }

  return {
    vite,
    render,
  }
}

export async function loadAssets() {
  const manifest: Record<string, any> = isProduction
    ? await import(
      // @ts-ignore - file present only when built
      '../../dist/client/.vite/ssr-manifest.json',
      { assert: { type: 'json' } }
    )
    : {}

  const template = isProduction
    ? readFileSync(resolve('../dist/client/index.html'), 'utf-8')
    : ''

  return {
    manifest,
    template,
  }
}
