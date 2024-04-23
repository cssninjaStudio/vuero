import {
  createApp,
  fromNodeMiddleware,
  toNodeListener,
} from 'h3'
import { listen } from 'listhen'

import { isProd, resolve } from './utils'
import { createRenderer, loadAssets } from './serve/renderer'
import { createEventHandler } from './serve/event'
import { extendH3App } from './config'
import './serve/process-handlers'

async function createServer() {
  const app = createApp({
    debug: !isProd,
  })

  const { vite, render } = await createRenderer()
  const { template, manifest } = await loadAssets()
  const handler = createEventHandler({
    vite,
    render,
    template,
    manifest,
  })

  if (!isProd && vite) {
    app.use(fromNodeMiddleware(vite.middlewares))
  }

  if (isProd) {
    const [
      compression,
      serveStatic,
    ] = await Promise.all([
      import('compression').then(m => m.default || m),
      import('serve-static').then(m => m.default || m),
    ])

    // @ts-expect-error - express middleware
    app.use(fromNodeMiddleware(compression()))
    app.use(
      fromNodeMiddleware(
        serveStatic(resolve('../dist/client'), {
          index: false,
          fallthrough: true,
          maxAge: '1w',
        }),
      ),
    )
  }

  // Extend h3 app with user eventHandler via config
  extendH3App(app)

  // Register the catch-all handler which will render our app
  app.use('*', handler)

  return { app }
}

// start h3 server
createServer()
  .then(({ app }) => listen(toNodeListener(app), { port: process.env.PORT || 3000 }))
  .catch((error) => {
    if (!isProd) {
      console.error('[dev] [serverError] ', error)
    }
    else {
      console.error('[serverError] ' + error)
    }
    process.exit(1)
  })
