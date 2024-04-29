import type { Plugin } from 'vite'
import MagicString from 'magic-string'

const commentRe = /<!--(?:.{2,}?)-->/sg

/**
 * This plugin removes HTML comments from your code.
 */
export function PurgeComments() {
  let sourcemap: boolean | 'inline' | 'hidden' | undefined
  return {
    name: 'purge-comments',
    enforce: 'pre',
    configResolved(config) {
      sourcemap = config.build.sourcemap
    },
    transform: (code, id) => {
      if (
        !(
          id.endsWith('.vue')
          || id.endsWith('.html')
          || id.endsWith('.svg')
        )
      ) {
        return
      }
      if (!code.includes('<!--')) {
        return
      }

      const s = new MagicString(code)
      s.replace(commentRe, '')

      if (s.hasChanged()) {
        return {
          code: s.toString(),
          map: sourcemap ? s.generateMap() : null,
        }
      }
    },
  } satisfies Plugin
}
