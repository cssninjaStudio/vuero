/* eslint-disable @typescript-eslint/ban-ts-comment */

import { readFileSync } from 'node:fs'
import type { ViteDevServer } from 'vite'
import type { VueroServerRender } from '../types.js'
import { root, isProd, resolve } from '../utils.js'

export async function createRenderer() {
  let vite: ViteDevServer | undefined
  let render: VueroServerRender

  if (!isProd) {
    /**
     * During dev, we use vite's connect instance as middleware
     *
     * @see https://vitejs.dev/guide/ssr.html#setting-up-the-dev-server
     * @see https://vitejs.dev/config/server-options.html#server-middlewaremode
     */

    const [createServer, createViteRuntime] = await import('vite').then((m) => {
      return [
        m.createServer,
        m.createViteRuntime,
      ] as const
    })

    vite = await createServer({
      root,
      logLevel: 'info',
      appType: 'custom',
      server: {
        middlewareMode: true,
      },
    })

    // create render using vite runtime api
    const runtime = await createViteRuntime(vite)
    render = (await runtime.executeEntrypoint('/src/entry-server.ts')).render
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
  const manifest: Record<string, any> = isProd
    ? await import(
      // @ts-ignore - file present only when built
      '../../dist/client/.vite/ssr-manifest.json',
      { assert: { type: 'json' } }
    )
    : {}

  const template = isProd
    ? readFileSync(resolve('../dist/client/index.html'), 'utf-8')
    : ''

  return {
    manifest,
    template,
  }
}
