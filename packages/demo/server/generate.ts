// Pre-render the app into static HTML.
// run `pnpm ssg:build` and then `dist` can be served as a static site.

import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { type ResolvedConfig, type InlineConfig, resolveConfig } from 'vite'
import colors from 'picocolors'
import { env } from 'std-env'

import { createRenderer } from './generate/renderer'
import { buildApp } from './generate/builder'
import { scanRoutes } from './generate/scan'
import { populateRouteParams } from './generate/populate'
import { renderToFile } from './generate/render-to-file'

async function build() {
  const mode = env.MODE || env.NODE_ENV || 'production'

  const viteConfig: InlineConfig = {}
  const config = await resolveConfig(viteConfig, 'build', mode)

  const cwd = process.cwd()
  const root = config.root || cwd
  const outDir = config.build.outDir || 'dist'
  const out = path.isAbsolute(outDir) ? outDir : path.join(root, outDir)

  const outStatic = out
  const outServer = path.join(out, '.server')

  if (fs.existsSync(out)) {
    await fsp.rm(out, { recursive: true })
  }

  // scan base routes from src/pages
  const routes = await scanRoutes(cwd)

  // build client and server vite apps
  await buildApp({
    config,
    viteConfig,
    outStatic,
    outServer,
  })

  // load renderer from server build
  const {
    manifest,
    template,
    render,
  } = await createRenderer({
    outServer,
    outStatic,
  })

  // generate urls for pre-rendering depending on static config
  const pages = await populateRouteParams({
    config,
    routes,
  })

  // pre-render each page sequentially
  for (const page of pages) {
    const start = performance.now()
    const file = await renderToFile(render, {
      url: page.url,
      outStatic,
      manifest,
      template,
    })
    const duration = performance.now() - start

    const formattedDuration = duration.toFixed(2).padStart(5) + 'ms'
    config.logger.info(
      colors.dim(`[${page.logPrefix}] ${colors.green(page.url)} - ${colors.cyan(file)} - ${formattedDuration}`),
    )
  }

  // delete server build
  await fsp.rm(path.join(outServer), { recursive: true, force: true })

  // regenerate PWA service worker with updated files
  await generatePWA({
    config,
    outStatic,
  })

  config.logger.info(
    [
      `Pre-rendering done. You can now serve the ${colors.cyan(
        out.replace(cwd, '.'),
      )} directory with a static file server.`,
      `Example:`,
      `  ${colors.green('npx serve dist -p 3000')}`,
    ].join('\n'),
  )
  process.exit(0)
}

(async () => {
  try {
    await build()
  }
  catch (e) {
    console.error(e)
    process.exit(1)
  }
})()

async function generatePWA({
  config,
  outStatic,
}: {
  config: ResolvedConfig
  outStatic: string
}) {
  const pwaPlugin = config.plugins.find(plugin => plugin.name === 'vite-plugin-pwa')
    ?.api
  if (pwaPlugin && !pwaPlugin.disabled && pwaPlugin.generateSW) {
    config.logger.info(colors.green('[SSG] Regenerate PWA...'))
    await pwaPlugin.generateSW()

    // update sw.js to replace /index.html with nothing so that it can be served from /

    const swPath = path.join(outStatic, 'sw.js')
    const swContent = await fsp.readFile(swPath, 'utf-8')
    await fsp.writeFile(swPath, swContent.replace(/\/index\.html/g, ''), 'utf-8')
  }
}
