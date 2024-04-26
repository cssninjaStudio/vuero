import fsp from 'node:fs/promises'
import path from 'node:path'

import type { VueroServerRender } from '../types'

export async function createRenderer({
  outServer,
  outStatic,
}: {
  outServer: string
  outStatic: string
}) {
  const template = await fsp.readFile(path.join(outStatic, './index.html'), 'utf-8')
  const manifest = JSON.parse(
    await fsp.readFile(path.join(outStatic, './.vite/ssr-manifest.json'), 'utf-8'),
  )

  const prefix = process.platform === 'win32' ? 'file://' : ''
  const entryServer = path.join(prefix, outServer, 'entry-server.mjs')

  // const _require = createRequire(import.meta.url)

  const render: VueroServerRender = (await import(entryServer)).render

  return {
    manifest,
    template,
    render,
  }
}
