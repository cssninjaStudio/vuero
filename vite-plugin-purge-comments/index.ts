import type { Plugin } from 'vite'
import MagicString from 'magic-string'

function parseId(id: string) {
  const index = id.indexOf('?')
  if (index < 0) return id
  else return id.slice(0, index)
}

export interface PluginOptions {
  sourcemap?: boolean
}

/**
 * This plugin removes HTML comments from your code.
 */
export function VitePluginPurgeComments({ sourcemap = false }: PluginOptions = {}) {
  return {
    name: 'purge-comments',
    enforce: 'pre',
    transform: (code, id) => {
      const parsedId = parseId(id)
      if (
        !(
          parsedId.endsWith('.vue')
          || parsedId.endsWith('.html')
          || parsedId.endsWith('.svg')
        )
      ) {
        return
      }
      if (!code.includes('<!--')) {
        return
      }

      const s = new MagicString(code)
      s.replace(/<!--[\w\W\s]*?-->/g, '')

      if (s.hasChanged()) {
        return {
          code: s.toString(),
          map: sourcemap && (s.generateMap({ source: id, includeContent: true }) as any),
        }
      }
    },
  } satisfies Plugin
}
