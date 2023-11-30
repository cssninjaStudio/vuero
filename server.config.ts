import type { HTMLMinifierConfig } from './build-ssg.types'

// note: to work with bun, you need to use terser minifier
export const htmlMinifier: HTMLMinifierConfig = {
  minifier: 'minify-html',
  minifyHtmlOptions: {
    keep_comments: true,
    minify_js: true,
  },
}
