import type { ViteDevServer } from 'vite'
import path from 'node:path'
import { readFileSync } from 'node:fs'
import { Buffer } from 'node:buffer'
import { lazyMinifier } from './internal/minifier'
import { htmlMinifier } from './config'
import {
  createApp,
  setResponseStatus,
  setHeader,
  getRequestURL,
  eventHandler,
  fromNodeMiddleware,
  toNodeListener,
  // getQuery,
  // getRouterParams,
} from 'h3'
import devalue from '@nuxt/devalue'
import { listen } from 'listhen'
import { fileURLToPath } from 'node:url'

const root = process.cwd()
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD
const isProd = process.env.NODE_ENV === 'production'

const resolve = (p: string) =>
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), p)

// prevent non-ready SSR dependencies from throwing errors
// @ts-expect-error ignore
globalThis.__VUE_PROD_DEVTOOLS__ = false
// @ts-expect-error ignore
globalThis.__VUE_I18N_FULL_INSTALL__ = false
// @ts-expect-error ignore
globalThis.__VUE_I18N_LEGACY_API__ = false

async function createServer() {
  let vite: ViteDevServer

  const app = createApp({
    debug: !isProd,
  })

  const manifest = isProd
    ? await import(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - this may be undefined in dev
      '../dist/client/.vite/ssr-manifest.json',
      { assert: { type: 'json' } }
    )
    : {}
  const indexProd = isProd
    ? readFileSync(resolve('../dist/client/index.html'), 'utf-8')
    : ''

  if (!isProd) {
    /**
     * During dev, we use vite's connect instance as middleware
     *
     * @see https://vitejs.dev/guide/ssr.html#setting-up-the-dev-server
     * @see https://vitejs.dev/config/server-options.html#server-middlewaremode
     */

    process.env.VITE_CJS_IGNORE_WARNING = 'true'

    vite = await import('vite').then(m =>
      m.createServer({
        root,
        logLevel: isTest ? 'error' : 'info',
        appType: 'custom',
        server: {
          middlewareMode: true,
          watch: {
            // During tests we edit the files too fast and sometimes chokidar
            // misses change events, so enforce polling for consistency
            usePolling: true,
            interval: 100,
          },
        },
      }),
    )

    // use vite's connect instance as middleware in h3 app
    app.use(fromNodeMiddleware(vite.middlewares))
  }
  else {
    /**
     * Otherwise, we register compression and serve-static express handlers in h3
     *
     * @see https://github.com/expressjs/compression
     * @see https://github.com/expressjs/serve-static
     */

    // @ts-expect-error ignore
    const compression = await import('compression').then(m => m.default || m)
    // @ts-expect-error ignore
    const serveStatic = await import('serve-static').then(m => m.default || m)

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

  /**
   * Using h3's eventHandler, we can register custom handlers for different routes
   *
   * @see https://github.com/unjs/h3#more-app-usage-examples
   */
  // app.use('/api/hello/:name', eventHandler(async (event) => {
  //   const query = getQuery(event)
  //   const params = getRouterParams(event)

  //   return `Hello ${params.name}!`
  // }))

  /**
   * Register the catch-all handler which will render our app
   */
  app.use(
    '*',
    eventHandler(async (event) => {
      try {
        const url = getRequestURL(event)

        // send empty error 404 if it's a static file
        const ext = url.pathname.split('.')
        if (ext.length > 1) {
          setHeader(event, 'Cache-Control', 'no-cache, no-store, must-revalidate')
          return null
        }

        // load template and render function from vue app
        let template, render
        if (!isProd) {
          // always read fresh template in dev
          template = readFileSync(resolve('../index.html'), 'utf-8')
          template = await vite.transformIndexHtml(url.pathname, template)
          render = (await vite.ssrLoadModule('/src/entry-server.ts')).render
        }
        else {
          // use built template and render function in production
          template = indexProd
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          render = require('../dist/server/entry-server.js').render
        }

        // render the vue app to HTML
        const {
          appHtml,
          headTags,
          htmlAttrs,
          bodyAttrs,
          bodyTags,
          bodyTagsOpen,
          preloadLinks,
          initialState,
        } = await render(event, url.pathname, manifest)

        // inject the app-rendered HTML into the template
        const html = template
          .replace(`<html>`, `<html${htmlAttrs}>`)
          .replace(`<head>`, `<head><meta charset="UTF-8" />${headTags}`)
          .replace(`</head>`, `${preloadLinks}</head>`)
          .replace(`<body>`, `<body${bodyAttrs}>${bodyTagsOpen}`)
          .replace(`</body>`, `${bodyTags}</body>`)
          .replace(
            /<div id="app"([\s\w\-"'=[\]]*)><\/div>/,
            `<div id="app" data-server-rendered="true"$1>${appHtml}</div><script>window.__vuero__=${devalue(
              initialState,
            )}</script>`,
          )

        // send minified page
        setHeader(event, 'Content-Type', 'text/html')

        let minified: Buffer | string = html

        switch (htmlMinifier.minifier) {
          case 'terser': {
            const minifier = await lazyMinifier(htmlMinifier.minifier)
            minified = await minifier(html, htmlMinifier.terserOptions)
            break
          }
          case 'minify-html': {
            const minifier = await lazyMinifier(htmlMinifier.minifier)
            minified = minifier(Buffer.from(html), htmlMinifier.minifyHtmlOptions)
            break
          }
        }

        return Buffer.from(minified)
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
    }),
  )

  return { app }
}

if (!isTest) {
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

  if (!isProd) {
    process.on('unhandledRejection', error =>
      console.error('[dev] [unhandledRejection]', error),
    )
    process.on('uncaughtException', error =>
      console.error('[dev] [uncaughtException]', error),
    )
  }
  else {
    process.on('unhandledRejection', error =>
      console.error('[unhandledRejection] ' + error),
    )
    process.on('uncaughtException', error =>
      console.error('[uncaughtException] ' + error),
    )
  }
}
