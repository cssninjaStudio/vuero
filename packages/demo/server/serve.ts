import {
  createApp,
  fromNodeMiddleware,
  toNodeListener,
} from 'h3'
import { listen } from 'listhen'

import { isProduction, env } from 'std-env'
import { resolve } from './utils'
import { createRenderer, loadAssets } from './serve/renderer'
import { createEventHandler } from './serve/event'
import { extendH3App } from './config'
import { registerProcessHandlers } from './serve/process-handlers'

async function createServer() {
  const app = createApp({
    debug: !isProduction,
  })

  const { vite, render } = await createRenderer()
  const { template, manifest } = await loadAssets()
  const handler = createEventHandler({
    vite,
    render,
    template,
    manifest,
  })

  // During dev, we use vite's connect instance as middleware
  // @see https://vitejs.dev/guide/ssr.html
  if (!isProduction && vite) {
    app.use(fromNodeMiddleware(vite.middlewares))
  }

  if (isProduction) {
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
  app.use(handler)

  return { app }
}

// start h3 server
const port = env.PORT || 3000
createServer()
  .then(({ app }) => listen(toNodeListener(app), { port }))
  .catch((error) => {
    if (!isProduction) {
      console.error('[dev] [serverError] ', error)
    }
    else {
      console.error('[serverError] ' + error)
    }
    process.exit(1)
  })

registerProcessHandlers()
