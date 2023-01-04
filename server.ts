import path from 'node:path'
import { readFileSync } from 'node:fs'
import { createApp, fromNodeMiddleware, toNodeListener } from 'h3'
import { listen } from 'listhen'
import type { ViteDevServer } from 'vite'

const root = process.cwd()
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD
const isProd = process.env.NODE_ENV === 'production'

// prevent non-ready SSR dependencies from throwing errors
globalThis.__VUE_PROD_DEVTOOLS__ = false
globalThis.__VUE_I18N_FULL_INSTALL__ = false
globalThis.__VUE_I18N_LEGACY_API__ = false

async function createServer() {
  let vite: ViteDevServer
  const app = createApp({
    debug: true,
  })
  const resolve = (p) => path.resolve(__dirname, p)

  const manifest = isProd ? require('./dist/client/ssr-manifest.json') : {}
  const indexProd = isProd ? readFileSync(resolve('dist/client/index.html'), 'utf-8') : ''

  if (!isProd) {
    vite = await require('vite').createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        appType: 'custom',
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
      },
    })
    // use vite's connect instance as middleware
    app.use(fromNodeMiddleware(vite.middlewares))
  } else {
    app.use(fromNodeMiddleware(require('compression')()))
    app.use(
      fromNodeMiddleware(
        require('serve-static')(resolve('dist/client'), {
          index: false,
          fallthrough: true,
          maxAge: '1w',
        })
      )
    )
  }

  app.use(
    '*',
    fromNodeMiddleware(async (req, res) => {
      try {
        const url = req.url

        // send empty error 404 if it's a static file
        const [pathname] = url.split('?')
        const ext = pathname.split('.')
        if (ext.length > 1) {
          if (!res.headersSent) {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
          }
          return null
        }

        let template, render, init
        if (!isProd) {
          // always read fresh template in dev
          console.log('transforming...')
          template = readFileSync(resolve('index.html'), 'utf-8')
          template = await vite.transformIndexHtml(url, template)
          render = (await vite.ssrLoadModule('/src/entry-server.ts')).render
          init = (await vite.ssrLoadModule('/src/entry-server.ts')).init
          console.log('transform done')
        } else {
          template = indexProd
          render = require('./dist/server/entry-server.js').render
          init = require('./dist/server/entry-server.js').init
        }

        init(req, res)
        const {
          found,
          appHtml,
          headTags,
          htmlAttrs,
          bodyAttrs,
          preloadLinks,
          initialState,
        } = await render(url, manifest)

        const html = template
          .replace(`<html>`, `<html${htmlAttrs}>`)
          .replace(`<head>`, `<head><meta charset="UTF-8" />${headTags}`)
          .replace(`</head>`, `${preloadLinks}</head>`)
          .replace(`<body>`, `<body${bodyAttrs}>`)
          .replace(
            /<div id="app"([\s\w\-"'=[\]]*)><\/div>/,
            `<div id="app" data-server-rendered="true"$1>${appHtml}</div><script>window.__vuero__=${initialState}</script>`
          )

        // send error 404 page
        if (!found) {
          if (!res.headersSent) {
            res.setHeader('Content-Type', 'text/html')
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.writeHead(404)
          }
          return html
        }

        // send page
        return html
      } catch (error) {
        // send error 500 page
        vite?.ssrFixStacktrace(error)
        if (!isProd) {
          console.error('[pageError] ', error)
        } else {
          console.error('[pageError] ' + error)
        }

        if (!isProd) {
          if (!res.headersSent) {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.writeHead(500)
            res.end(error.message)
          }
          return
        } else {
          if (!res.headersSent) {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.writeHead(500)
            res.end('Internal Server Error')
          }
          return
        }
      }
    })
  )

  return { app, vite }
}

if (!isTest) {
  createServer()
    .then(({ app }) => listen(toNodeListener(app), { port: process.env.PORT || 3000 }))
    .catch((error) => {
      if (!isProd) {
        console.error('[serverError] ', error)
      } else {
        console.error('[serverError] ' + error)
      }
      process.exit(1)
    })

  if (!isProd) {
    process.on('unhandledRejection', (error) =>
      console.error('[dev] [unhandledRejection]', error)
    )
    process.on('uncaughtException', (error) =>
      console.error('[dev] [uncaughtException]', error)
    )
  } else {
    process.on('unhandledRejection', (error) =>
      console.error('[unhandledRejection] ' + error)
    )
    process.on('uncaughtException', (error) =>
      console.error('[uncaughtException] ' + error)
    )
  }
}
