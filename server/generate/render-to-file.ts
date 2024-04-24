import { ServerResponse, IncomingMessage } from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { Socket } from 'node:net'
import { H3Event } from 'h3'

import type { VueroServerRender } from '../types'
import { resolve } from '../utils'

export async function renderToFile(render: VueroServerRender, {
  url,
  template,
  manifest,
  outStatic,
}: {
  url: string
  template: string
  manifest: Record<string, string[]>
  outStatic: string
}) {
  const sock = new Socket()
  const req = new IncomingMessage(sock)
  const res = new ServerResponse(req)
  const event = new H3Event(req, res)

  const html = await render({
    event,
    manifest,
    template,
  })

  const base = url.endsWith('/') ? `${url}` : `${url}/`
  const file = `${base}index.html`
  const filePath = path.join(outStatic, file)

  const dirname = path.dirname(filePath)
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true })
  }

  if (typeof html === 'string') {
    fs.writeFileSync(resolve(filePath), html)
  }
  else {
    const stream = fs.createWriteStream(resolve(filePath))

    await html.pipeTo(new WritableStream({
      write(chunk) {
        stream.write(chunk)
      },
      close() {
        stream.end()
      },
      abort() {
        stream.end()
      },
    }))
  }

  return filePath
}
