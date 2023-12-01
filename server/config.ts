import type { Format, HTMLMinifierConfig, StaticParams } from './internal/types'

export const format: Format = 'esm'

/**
 * note: to work with bun, you need to use terser minifier
 */
export const htmlMinifier: HTMLMinifierConfig = {
  minifier: 'minify-html',
  minifyHtmlOptions: {
    keep_comments: true,
    minify_js: true,
  },
}

export function generateStaticParams(): StaticParams {
  return {
    // '/path/with/dynamic/[slug]': async () => {
    //   return [{ slug: 'first-slug' }, { slug: 'second-slug' }, { slug: 'third-slug' }]
    // },
  }
}
